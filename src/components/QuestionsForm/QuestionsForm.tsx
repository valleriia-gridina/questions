import { useState, useEffect } from "react";
import { questions as originalQuestions } from "../constants";
import QuestionCard from "../QuestionCard/QuestionCard";
import { Link } from "react-router-dom";
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

type QuestionsProps = {
  quantityOfQuestions: number;
};

// Shuffle the questions array

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const QuestionsForm: React.FC<QuestionsProps> = ({ quantityOfQuestions }) => {
  const [questions, setQuestions] = useState<Question[]>(originalQuestions);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState<TAnswers[]>([]);

  // Shuffle answers
  useEffect(() => {
    const shuffledQuestions = shuffleArray(originalQuestions).map(
      (question) => ({
        ...question,
        answerOptions: shuffleArray(question.answerOptions),
      })
    );
    // Show exact quantity of questions
    const qtyQuestionsShuffeled = shuffledQuestions.slice(
      0,
      quantityOfQuestions
    );

    setQuestions(qtyQuestionsShuffeled);
  }, [quantityOfQuestions]);

  // Prev, next buttons functionality

  const handleShowNext = () => {
    setActiveQuestion(activeQuestion + 1);
    console.log(activeQuestion);
  };
  const handleShowPrev = () => {
    setActiveQuestion(activeQuestion - 1);
  };
  const isLastQuestion = questions.length - 1;

  // Answer processing
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

  // setting active question
  const handleQuestionSwitch = (index: number) => {
    setActiveQuestion(index);
  };

  const correctAnswersCount = answers.filter(
    (answer) => answer.isCorrect
  ).length;

  const currentAnswer = answers.find(
    (answer) => answer.id === questions[activeQuestion].id
  );

  return (
    <>
      <div>
        <div className="questionNumber">Вопрос {activeQuestion + 1} </div>
        <ul className="questions">
          <QuestionCard
            quantity={0}
            {...questions[activeQuestion]}
            handleAnswer={handleAnswer}
            selectedAnswerId={currentAnswer?.selectedAnswerId || null}
          />
        </ul>
        <nav className="questionsNav">
          {activeQuestion > 0 && (
            <button onClick={handleShowPrev}>&lt;&lt;</button>
          )}
          {activeQuestion !== isLastQuestion ? (
            <button onClick={handleShowNext}>&gt;&gt;</button>
          ) : (
            <Link
              to="/results"
              state={{
                importCorrectAnswersCount: correctAnswersCount,
                importQuantityOfQuestions: quantityOfQuestions,
              }}
              className="link"
            >
              Finish test
            </Link>
          )}
        </nav>
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
    </>
  );
};

export default QuestionsForm;
