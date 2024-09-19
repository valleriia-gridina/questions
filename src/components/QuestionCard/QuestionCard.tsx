import { useState } from "react";
import { TQuestion } from "../types";

interface TProps extends TQuestion {
  handleAnswer: (id: number, isCorrect: boolean) => void;
}

const QuestionCard = ({
  id,
  title,
  answerOptions,
  explanation,
  handleAnswer,
}: TProps) => {
  const [isCorrect, setIsCorrect] = useState<undefined | boolean>(undefined);

  return (
    <li>
      <h3>{title}</h3>

      {answerOptions.map((item) => {
        return (
          <div key={item.id}>
            <label>
              <input
                type="radio"
                name={`q${id}`}
                onChange={() => {
                  handleAnswer(id, item.isCorrect);
                  setIsCorrect(item.isCorrect);
                }}
              />
              {item.title}
            </label>
          </div>
        );
      })}

      {!isCorrect && isCorrect !== undefined && <p>{explanation}</p>}
    </li>
  );
};

export default QuestionCard;
