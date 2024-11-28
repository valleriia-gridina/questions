import Wrapper from "components/Wrapper/Wrapper";
import { auth } from "services/firebase";

const HomePage = () => {
  return (
    <Wrapper>
      <h1>Home page</h1>
      <p>Hi, {auth.currentUser?.email}!</p>
    </Wrapper>
  );
};

export default HomePage;
