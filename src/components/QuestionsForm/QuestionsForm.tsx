import { useState, useEffect } from "react";
import { questions as originalQuestions } from "../constants";
import QuestionCard from "../QuestionCard/QuestionCard";
import { Link } from "react-router-dom";
import cx from "classnames";
import { TAnswers, TQuestionOrig, TQuestionsProps } from "../types";

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const QuestionsForm: React.FC<TQuestionsProps> = ({ quantityOfQuestions }) => {
  const [questions, setQuestions] =
    useState<TQuestionOrig[]>(originalQuestions);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState<TAnswers[]>([]);

  useEffect(() => {
    const shuffledQuestions = shuffleArray(originalQuestions).map(
      (question) => ({
        ...question,
        answerOptions: shuffleArray(question.answerOptions),
      })
    );
    const qtyQuestionsShuffeled = shuffledQuestions.slice(
      0,
      quantityOfQuestions
    );

    setQuestions(qtyQuestionsShuffeled);
  }, [quantityOfQuestions]);

  const handleShowNext = () => {
    setActiveQuestion(activeQuestion + 1);
  };
  const handleShowPrev = () => {
    setActiveQuestion(activeQuestion - 1);
  };
  const isLastQuestion = questions.length - 1;

  const handleAnswer = (questionId: number, answerId: number) => {
    const isAnswerCorrect =
      questions[activeQuestion].answerOptions.find(
        (option) => option.id === answerId
      )?.isCorrect ?? false;
    setAnswers((prevAnswers) => {
      const updatedAnswers = prevAnswers.filter(
        (answer) => answer.id !== questionId
      );
      return [
        ...updatedAnswers,
        {
          id: questionId,
          selectedAnswerId: answerId,
          isCorrect: isAnswerCorrect,
        },
      ];
    });
  };

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
            isAnswerCorrect={currentAnswer?.isCorrect}
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
