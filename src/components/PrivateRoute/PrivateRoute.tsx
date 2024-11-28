import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "services/firebase";

type TProps = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: TProps) => {
  if (!auth.currentUser) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PrivateRoute;
