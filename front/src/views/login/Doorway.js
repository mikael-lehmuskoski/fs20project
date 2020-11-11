import React, { useState } from "react";
import LoginForm from "./loginForm";
import SignupForm from "./signupForm";

/**
 * Doorway renders a view for login and signup
 */
const Doorway = () => {
  const [flip, setFlip] = useState(false);

  return (
    <div className="Card">
      <input
        type="button"
        value={flip ? "login" : "signup"}
        onClick={() => setFlip((prev) => !prev)}
      />
      {flip ? <SignupForm /> : <LoginForm />}
    </div>
  );
};

export default Doorway;
