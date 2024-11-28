import { TAnswer, TQuestion } from "types/types";

interface TProps extends TQuestion {
  onHandleAnswer: (answer: TAnswer) => void;
  answer?: TAnswer;
}

const QuestionCard = ({
  id,
  title,
  answerOptions,
  explanation,
  currentNumber,
  onHandleAnswer,
  answer,
}: TProps) => {
  return (
    <li>
      <h3>
        {currentNumber}. {title}
      </h3>

      {answerOptions.map((answ) => {
        return (
          <div key={answ.id}>
            <label>
              <input
                type="radio"
                name={`q${id}`}
                onChange={() => {
                  onHandleAnswer({
                    id,
                    isCorrect: answ.isCorrect,
                    isDisabled: true,
                    value: answ.title,
                  });
                }}
                checked={answer?.value === answ.title}
                value={answ.title}
                disabled={answer?.isDisabled}
              />
              {answ.title}
            </label>
          </div>
        );
      })}
      {answer && !answer?.isCorrect && (
        <p className="explanation">{explanation}</p>
      )}
    </li>
  );
};

export default QuestionCard;
