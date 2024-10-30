import { useLocation } from "react-router-dom";
import Questions from "../components/QuestionsForm/QuestionsForm";

const QuestionsPage = () => {
  // send Questions quantity to the questions component through the useLocation router hook
  const location = useLocation();
  const { key } = location.state || {};
  return (
    <>
      <h1>Questions</h1>
      <p>Количество вопросов: {key}</p>
      <Questions quantityOfQuestions={key} />
    </>
  );
};

export default QuestionsPage;
