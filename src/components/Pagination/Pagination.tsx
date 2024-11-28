import cx from "classnames";
import { TAnswer, TQuestion } from "types/types";

type TProps = {
  questions: TQuestion[];
  answers: TAnswer[];
  activeQuestionIndex: number;
  onChangePage: (index: number) => void;
  onFinish: () => void;
  onClickNext: () => void;
  onClickBack: () => void;
};

const Pagination = ({
  questions,
  answers,
  activeQuestionIndex,
  onChangePage,
  onFinish,
  onClickNext,
  onClickBack,
}: TProps) => {
  return (
    <>
      <button
        className={"btn"}
        onClick={onClickBack}
        style={{ marginRight: "20px" }}
        disabled={activeQuestionIndex === 0}
      >
        back
      </button>

      {activeQuestionIndex !== questions.length - 1 ? (
        <button
          className={"btn"}
          onClick={onClickNext}
          style={{ margin: "10px" }}
        >
          next
        </button>
      ) : (
        <button className={"btn"} onClick={onFinish} style={{ margin: "10px" }}>
          finish test
        </button>
      )}

      <ul className={"pagination"}>
        {questions.map((question, index) => {
          const answerOption = answers.find(
            (answer) => answer.id === question.id
          );

          return (
            <li
              key={question.id}
              className={cx(`paginationItem`, {
                isCorrect: answerOption?.isCorrect,
                isWrong: answerOption && !answerOption?.isCorrect,
                isActive: index === activeQuestionIndex,
              })}
            >
              <button className="btnNumber" onClick={() => onChangePage(index)}>
                {index + 1}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Pagination;
