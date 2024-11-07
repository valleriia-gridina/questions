import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import TestPage from "./pages/TestPage/TestPage";
import ResultPage from "./pages/ResultPage/ResultPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
  {
    path: "/results",
    element: <ResultPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

{
  /* <Router>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/" element={} />
    <Route path="/" element={< />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
</Router> */
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
