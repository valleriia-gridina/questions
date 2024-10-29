import cx from "classnames";
import { TAnswer, TQuestion } from "../../types/types";

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
        className={"nextBtn"}
        onClick={onClickBack}
        style={{ margin: "20px" }}
        disabled={activeQuestionIndex === 0}
      >
        back
      </button>

      {activeQuestionIndex !== questions.length - 1 ? (
        <button
          className={"nextBtn"}
          onClick={onClickNext}
          style={{ margin: "10px" }}
        >
          next
        </button>
      ) : (
        <button
          className={"nextBtn"}
          onClick={onFinish}
          style={{ margin: "10px" }}
        >
          finish test
        </button>
      )}

      <ul className={"pagination"}>
        {questions.map((question, index) => {
          const el = answers.find((answer) => answer.id === question.id);

          return (
            <li
              key={question.id}
              className={cx(`paginationItem`, {
                isCorrect: el?.isCorrect,
                isWrong: el && !el?.isCorrect,
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
