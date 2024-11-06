import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage.tsx";
import QuestionsPage from "./pages/Questions.tsx";
import ResultsPage from "./pages/Results.tsx";
import NotFound from "./pages/NotFound.tsx";
import "./App.css";
import "./index.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <NotFound />,
    },
    {
      path: "/questions",
      element: <QuestionsPage />,
      errorElement: <NotFound />,
    },
    {
      path: "/results",
      element: <ResultsPage />,
      errorElement: <NotFound />,
    },
  ]);
  <RouterProvider router={router} />;
}

export default App;
