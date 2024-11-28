import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TestFormPage from "./pages/TestFormPage/TestFormPage";
import TestPage from "./pages/TestPage/TestPage";
import ResultPage from "./pages/ResultPage/ResultPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

import "./App.css";
import RegistrationPage from "pages/RegistrationPage/RegistrationPage";
import HomePage from "./pages/HomePage/HomePage";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import LoginPage from "pages/LoginPage/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/registration",
    element: <RegistrationPage />,
  },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <HomePage />
      </PrivateRoute>
    ),
  },
  {
    path: "/test-form",
    element: (
      <PrivateRoute>
        <TestFormPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/test",
    element: (
      <PrivateRoute>
        <TestPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/results",
    element: (
      <PrivateRoute>
        <ResultPage />
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
