import { useState, useEffect } from "react";
import { TQuestion, AnswerOption } from "../types";

interface TProps extends TQuestion {
  handleAnswer: (questionId: number, answerId: number) => void;
  selectedAnswerId: number | null;
  isAnswerCorrect?: boolean;
}

const QuestionCard = ({
  id,
  title,
  answerOptions,
  explanation,
  handleAnswer,
  selectedAnswerId,
  isAnswerCorrect,
}: TProps) => {
  const [isCorrect, setIsCorrect] = useState<undefined | boolean>(undefined);

  useEffect(() => {
    setIsCorrect(undefined);
  }, [id]);

  const handleOptionChange = (optionId: number, isOptionCorrect: boolean) => {
    handleAnswer(id, optionId);
    setIsCorrect(isOptionCorrect);
  };

  const getClassName = (item: AnswerOption) => {
    if (selectedAnswerId === null) return "";
    return item.id === selectedAnswerId
      ? isAnswerCorrect
        ? "correct"
        : "wrong"
      : "";
  };

  return (
    <li>
      <h3>{title}</h3>
      {answerOptions.map((item) => {
        const className = getClassName(item);
        return (
          <div key={item.id}>
            <label>
              <input
                type="radio"
                checked={selectedAnswerId === item.id}
                name={`q${id}`}
                disabled={selectedAnswerId !== null}
                onChange={() => handleOptionChange(item.id, item.isCorrect)}
                className={className}
              />
              <span>{item.title}</span>
            </label>
          </div>
        );
      })}
      {!isCorrect && isCorrect !== undefined && <p>{explanation}</p>}
    </li>
  );
};

export default QuestionCard;
