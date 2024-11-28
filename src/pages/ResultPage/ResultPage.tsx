import Wrapper from "components/Wrapper/Wrapper";
import { Link, useLocation } from "react-router-dom";

const ResultPage = () => {
  const location = useLocation();

  const isFailed = location.state?.isFailed;
  const mistakesNumber = location.state?.mistakesNumber;

  return (
    <Wrapper>
      {isFailed ? (
        <div className="failed">
          Ooops... you failed, you did more than {mistakesNumber} mistake(s)
        </div>
      ) : (
        <div className="result">Great news! You passed the test!</div>
      )}
      <Link to="/test-form">Pass the test again</Link>
    </Wrapper>
  );
};

export default ResultPage;
