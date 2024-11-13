import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { rightQuestionsPercentage } from "../components/constants";

// import quantity questions and correct answers with use location hook asn setup types

type LocationState = {
  importQuantityOfQuestions: number;
  importCorrectAnswersCount: number;
};

const Results = () => {
  const location = useLocation();
  const { importQuantityOfQuestions, importCorrectAnswersCount } =
    (location.state as LocationState) || {};

  return (
    <>
      <h1>Results</h1>
      <div className="results">
        <span>
          {(importCorrectAnswersCount * 100) / importQuantityOfQuestions >
          rightQuestionsPercentage
            ? `Супер! Вы прошли тест! Правильных ответов: ${importCorrectAnswersCount}`
            : `Вы провалили тест. Правильных ответов: ${importCorrectAnswersCount}`}
        </span>
        <div>
          <Link className="link" to="/">
            Start new test
          </Link>
        </div>
      </div>
    </>
  );
};

export default Results;
