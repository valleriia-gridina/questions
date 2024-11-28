import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/home">home</Link>
        <Link to="/test-form">test</Link>
      </nav>
      <Link to="/">Log out</Link>
    </header>
  );
};

export default Header;
