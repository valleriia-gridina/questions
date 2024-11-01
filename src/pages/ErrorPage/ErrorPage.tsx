import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h3>Page is not found</h3>
      <Link to="/">Back to home page</Link>
    </>
  );
};

export default ErrorPage;
