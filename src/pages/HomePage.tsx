import { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [questionQuantity, setQuestionQuantity] = useState(1);
  const getNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestionQuantity(Number(e.target.value));
  };

  //   Check, if number of questions is Ok )
  const isDisabled = questionQuantity < 1 || questionQuantity > 40;

  return (
    <div>
      <h1>Welcome to drivers test</h1>
      <div className="questionsQty">
        <label>Enter the number of questions (1-40)</label>
        <div className="inputHolder">
          <input type="text" value={questionQuantity} onChange={getNumber} />
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
