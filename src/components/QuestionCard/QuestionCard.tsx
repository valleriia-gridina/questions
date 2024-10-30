import { useState, useEffect } from "react";
import { TQuestion } from "../types";

// answers item types:
interface TProps extends TQuestion {
  handleAnswer: (
    questionId: number,
    answerId: number,
    isCorrect: boolean
  ) => void;
  selectedAnswerId: number | null;
}

// Current answer props
const QuestionCard = ({
  id,
  title,
  answerOptions,
  explanation,
  handleAnswer,
  selectedAnswerId,
}: TProps) => {
  const [isCorrect, setIsCorrect] = useState<undefined | boolean>(undefined);

  useEffect(() => {
    setIsCorrect(undefined);
  }, [id]);

  return (
    <li>
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
                }}
              />
              {item.title}
            </label>
          </div>
        );
      })}
      {/* show explanation if answer is incorrect */}
      {!isCorrect && isCorrect !== undefined && <p>{explanation}</p>}
    </li>
  );
};

export default QuestionCard;
