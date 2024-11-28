import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QUESTIONS } from "constants/constants";
import Wrapper from "components/Wrapper/Wrapper";

const HomePage = () => {
  const navigate = useNavigate();

  const [questionsAmount, setQuestionsAmount] = useState(1);
  const [error, setError] = useState(false);

  const fullQuestionsLength = QUESTIONS.length;

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (questionsAmount > 0 && questionsAmount <= fullQuestionsLength) {
      navigate("/test", { state: { questionCount: questionsAmount } });
    }
    setError(true);
  };

  return (
    <Wrapper>
      <h1>Test page</h1>
      <form onSubmit={handleSubmit}>
        <label>How many questions do you want answer?</label>
        <input
          type="number"
          value={questionsAmount}
          onChange={(e) => {
            setQuestionsAmount(Number(e.target.value));
          }}
        />
        {error && (
          <div className="error">
            You can set a number from 1 to {fullQuestionsLength}
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </Wrapper>
  );
};

export default HomePage;
