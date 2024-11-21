import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page404">
      <span className="notFound">404 Page not found</span>
      <Link className="link" to="/">
        Back to home
      </Link>
    </div>
  );
}
