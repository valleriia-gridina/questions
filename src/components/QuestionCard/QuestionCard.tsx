import { TAnswer, TQuestion } from "../../types/types";

interface TProps extends TQuestion {
  onHandleAnswer: (answer: TAnswer) => void;
  activeQuestion?: TAnswer;
}

const QuestionCard = ({
  id,
  title,
  answerOptions,
  explanation,
  currentNumber,
  onHandleAnswer,
  activeQuestion,
}: TProps) => {
  return (
    <li>
      <h3>
        {currentNumber}. {title} <em>{id} - id number for test</em>
      </h3>

      {answerOptions.map((item) => {
        return (
          <div key={item.id}>
            <label>
              <input
                type="radio"
                name={`q${id}`}
                onChange={() => {
                  onHandleAnswer({
                    id,
                    isCorrect: item.isCorrect,
                    isDisabled: true,
                    value: item.title,
                  });
                }}
                checked={activeQuestion?.value === item.title}
                value={item.title}
                disabled={activeQuestion?.isDisabled}
              />
              {item.title} <em>{item.id} - id number for test</em>
            </label>
          </div>
        );
      })}
      {activeQuestion && !activeQuestion?.isCorrect && (
        <p className="explanation">{explanation}</p>
      )}
    </li>
  );
};

export default QuestionCard;
