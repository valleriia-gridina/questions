import { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { totalQuestions } from "../components/constants";

const HomePage = () => {
  const [questionQuantity, setQuestionQuantity] = useState(1);
  const getNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestionQuantity(Number(e.target.value));
  };
  const isDisabled = questionQuantity < 1 || questionQuantity > totalQuestions;

  return (
    <div>
      <h1>Welcome to drivers test</h1>
      <div className="questionsQty">
        <label>Enter the number of questions (1-{totalQuestions})</label>
        <div className="inputHolder">
          <input type="number" value={questionQuantity} onChange={getNumber} />
        </div>
        <Link
          to="/questions"
          className={isDisabled ? "disabled" : ""}
          state={{ key: questionQuantity }}
        >
          Start the test
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
