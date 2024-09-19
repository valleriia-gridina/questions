import { useState } from "react";
import { questions } from "../constants";
import QuestionCard from "../QuestionCard/QuestionCard";
import cx from "classnames";

type TAnswers = {
  id: number;
  isCorrect: boolean;
};

const QuestionsForm = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState<TAnswers[]>([]);

  const handleShowNext = () => {
    setActiveQuestion(activeQuestion + 1);
  };

  return (
    <>
      <ul>
        <QuestionCard
          {...questions[activeQuestion]}
          handleAnswer={(id: number, isCorrect: boolean) => {
            setAnswers([...answers, { id, isCorrect }]);
          }}
        />
      </ul>
      <button onClick={handleShowNext}>next</button>
      <ul className={"questionList"}>
        {questions.map((question, index) => {
          const el = answers.find((answer) => answer.id === question.id);
          return (
            <li
              key={question.id}
              className={cx(`question`, {
                isCorrect: el?.isCorrect,
                isWrong: !el?.isCorrect && el !== undefined,
              })}
            >
              {index + 1}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default QuestionsForm;
