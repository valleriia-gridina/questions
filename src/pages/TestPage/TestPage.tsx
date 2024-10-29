import { useMemo, useState } from "react";
import { QUESTIONS } from "../../components/constants";
import { shuffleArray } from "../../components/helpers";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import { TAnswer } from "../../components/types";
import Pagination from "../../components/Pagination/Pagination";
import { useLocation, useNavigate } from "react-router-dom";

const TestPage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const questionsNumber = location.state?.questionCount;
  const mistakesNumber = Math.floor(questionsNumber / 10);

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<TAnswer[]>([]);

  const questions = useMemo(
    () =>
      shuffleArray(QUESTIONS)
        .slice(0, questionsNumber)
        .map((question, index) => ({
          ...question,
          answerOptions: shuffleArray(question.answerOptions),
          currentNumber: index + 1,
        })),
    [questionsNumber]
  );

  const handleAnswer = (answer: TAnswer) => {
    setAnswers([...answers, { ...answer }]);
  };

  const handleShowBack = () => {
    if (activeQuestionIndex > 0)
      setActiveQuestionIndex(activeQuestionIndex - 1);
  };

  const handleShowNext = () => {
    setActiveQuestionIndex(activeQuestionIndex + 1);
  };

  const handleFinishTest = () => {
    const incorrectAnswers = answers.filter((el) => !el.isCorrect).length;

    const resultIsFailed =
      answers.length === questions.length
        ? incorrectAnswers > mistakesNumber
        : true;

    navigate("/results", {
      state: { isFailed: resultIsFailed, mistakesNumber },
    });
  };

  const handleChangePage = (index: number) => {
    setActiveQuestionIndex(index);
  };

  const activeQuestion = answers.find(
    (el) => el.id === questions[activeQuestionIndex].id
  );

  return (
    <>
      <h3>Test page</h3>
      <p>
        You have <strong>{questionsNumber} questions</strong>. You can make only{" "}
        <strong>{mistakesNumber} mistake(s)</strong>
      </p>

      <ul className="list questions">
        <QuestionCard
          {...questions[activeQuestionIndex]}
          onHandleAnswer={handleAnswer}
          activeQuestion={activeQuestion}
        />
      </ul>

      <Pagination
        questions={questions}
        answers={answers}
        activeQuestionIndex={activeQuestionIndex}
        onChangePage={handleChangePage}
        onFinish={handleFinishTest}
        onClickNext={handleShowNext}
        onClickBack={handleShowBack}
      />
    </>
  );
};

export default TestPage;
