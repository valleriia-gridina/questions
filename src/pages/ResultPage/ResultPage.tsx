import { useLocation, useNavigate } from "react-router-dom";

const ResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isFailed = location.state?.isFailed;
  const mistakesNumber = location.state?.mistakesNumber;

  const onRetry = () => navigate("/");

  return isFailed ? (
    <div className="failed">
      <p>Ooops... you failed, you did more than {mistakesNumber} mistake(s)</p>
      <button onClick={onRetry}>pass the test again</button>
    </div>
  ) : (
    <div className="result">
      <p>Great news! You passed the test!</p>
      <button onClick={onRetry}>pass the test again</button>
    </div>
  );
};

export default ResultPage;
