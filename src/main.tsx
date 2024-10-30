import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage.tsx";
import QuestionsPage from "./pages/Questions.tsx";
import ResultsPage from "./pages/Results.tsx";
import "./App.css";
import "./index.css";
import NotFound from "./pages/NotFound.tsx";

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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
