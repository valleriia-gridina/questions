import { useState, useEffect } from "react";
import { TQuestion } from "../types";

interface TProps extends TQuestion {
  handleAnswer: (
    questionId: number,
    answerId: number,
    isCorrect: boolean
  ) => void;
  selectedAnswerId: number | null;
}

const QuestionCard = ({
  id,
  title,
  answerOptions,
  explanation,
  handleAnswer,
  selectedAnswerId,
}: TProps) => {
  const [isCorrect, setIsCorrect] = useState<undefined | boolean>(undefined);

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsCorrect(undefined);
    setIsChecked(false);
  }, [id]);

  return (
    <li>
      <span>Текущий вопрос: {id}</span>
      <h3>{title}</h3>

      {answerOptions.map((item) => {
        return (
          <div key={item.id}>
            <label>
              <input
                type="radio"
                checked={selectedAnswerId === item.id}
                name={`q${id}`}
                disabled={selectedAnswerId !== null}
                onChange={() => {
                  handleAnswer(id, item.id, item.isCorrect);
                  setIsCorrect(item.isCorrect);
                  setIsChecked(true);
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
