import React, { SyntheticEvent, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "services/firebase";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const [successMessage, setSuccessMessage] = useState<null | string>(null);

  const handleRegister = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccessMessage("Your registration is complete!");
      setErrorMessage("");
    } catch {
      setErrorMessage("Registration is failed");
      setSuccessMessage("");
    }
  };

  return (
    <>
      <h1>Registration</h1>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign up</button>
      </form>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      {successMessage && (
        <>
          <p style={{ color: "green" }}>{successMessage}</p>{" "}
          <Link to="/">Proceed to the login page</Link>
        </>
      )}

      {(!successMessage || errorMessage) && (
        <Link to="/">Already have an account?</Link>
      )}
    </>
  );
};

export default Register;
