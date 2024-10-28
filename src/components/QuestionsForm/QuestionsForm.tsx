import { useState, useEffect } from "react";
import { questions as originalQuestions } from "../constants";
import QuestionCard from "../QuestionCard/QuestionCard";
import cx from "classnames";

type TAnswers = {
  id: number;
  isCorrect: boolean;
  selectedAnswerId: number | null;
};

type AnswerOption = {
  id: number;
  title: string;
  isCorrect: boolean;
};

type Question = {
  id: number;
  title: string;
  answerOptions: AnswerOption[];
  explanation: string;
};

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const QuestionsForm = () => {
  const [questions, setQuestions] = useState<Question[]>(originalQuestions);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState<TAnswers[]>([]);
  const [finish, setFinish] = useState(false);

  const [quantity, setQuantity] = useState<number>(10);

  useEffect(() => {
    const qtyQuestions = originalQuestions.slice(0, quantity);
    const shuffledQuestions = shuffleArray(qtyQuestions).map((question) => ({
      ...question,
      answerOptions: shuffleArray(question.answerOptions),
    }));
    setQuestions(shuffledQuestions);
    console.log("qty of questions:", quantity);
  }, [quantity]);

  console.log("quantity", quantity);

  const handleShowNext = () => {
    setActiveQuestion(activeQuestion + 1);
    console.log(activeQuestion);
  };
  const handleShowPrev = () => {
    setActiveQuestion(activeQuestion - 1);
  };
  const isLastQuestion = questions.length - 1;

  const handleAnswer = (
    questionId: number,
    answerId: number,
    isCorrect: boolean
  ) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = prevAnswers.filter(
        (answer) => answer.id !== questionId
      );
      return [
        ...updatedAnswers,
        { id: questionId, selectedAnswerId: answerId, isCorrect },
      ];
    });
  };

  const handleQuestionSwitch = (index: number) => {
    setActiveQuestion(index);
  };

  const handleFinish = () => {
    setFinish(true);
  };

  const correctAnswersCount = answers.filter(
    (answer) => answer.isCorrect
  ).length;

  const currentAnswer = answers.find(
    (answer) => answer.id === questions[activeQuestion].id
  );

  const handleStartNewTest = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setFinish(false);

    // const shuffledQuestions = shuffleArray(originalQuestions).map(
    //   (question) => ({
    //     ...question,
    //     answerOptions: shuffleArray(question.answerOptions),
    //   })
    // );
    // setQuestions(shuffledQuestions);
  };

  const handleQuantity = (e: { target: { value: string } }) => {
    const inputNumber = parseInt(e.target.value);
    if (!isNaN(inputNumber)) {
      setQuantity(inputNumber);
    }
    console.log("setQuantity", inputNumber);
  };

  return (
    <>
      {!finish ? (
        <div>
          <ul>
            <QuestionCard
              {...questions[activeQuestion]}
              handleAnswer={handleAnswer}
              selectedAnswerId={currentAnswer?.selectedAnswerId || null}
            />
          </ul>

          {activeQuestion > 0 && <button onClick={handleShowPrev}>prev</button>}
          {activeQuestion !== isLastQuestion ? (
            <button onClick={handleShowNext}>next</button>
          ) : (
            <button onClick={handleFinish}>Finish test</button>
          )}

          <ul className={"questionList"}>
            {questions.map((question, index) => {
              const el = answers.find((answer) => answer.id === question.id);
              return (
                <li
                  onClick={() => handleQuestionSwitch(index)}
                  key={question.id}
                  className={cx(`question`, {
                    isCorrect: el?.isCorrect,
                    isWrong: !el?.isCorrect && el !== undefined,
                    isActive: index === activeQuestion,
                  })}
                >
                  {index + 1}
                </li>
              );
            })}
          </ul>
          <span>Правильных ответов: {correctAnswersCount}</span>
        </div>
      ) : (
        <div>
          <span>
            {correctAnswersCount > 36
              ? `Супер! Вы прошли тест! Правильных ответов: ${correctAnswersCount}`
              : `Вы провалили тест. Правильных ответов: ${correctAnswersCount}`}
          </span>
          <div>
            <input
              type="text"
              placeholder="Enter questions quantity... "
              onChange={handleQuantity}
            />
            <button onClick={handleStartNewTest}>Start new test</button>
          </div>
        </div>
      )}
    </>
  );
};

export default QuestionsForm;
