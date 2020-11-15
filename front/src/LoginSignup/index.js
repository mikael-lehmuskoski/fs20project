/* eslint react/prop-types: 0 */
import React, { useState } from "react";
import { connect } from "react-redux";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import actionCreators from "../reducers";

const LoginSignup = (props) => {
  const [flip, setFlip] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const submit = () => {
    try {
      if (flip) {
        if (!(password === passwordAgain))
          throw new Error("Passwords do not match");
        props.signup({ username, password });
      } else {
        props.login({ username, password });
      }
      setPassword("");
      setUsername("");
      setPasswordAgain("");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="loginSignup">
      <input
        type="button"
        value={flip ? "Login" : "Create account"}
        onClick={() => setFlip((prev) => !prev)}
      />
      {flip ? (
        <SignupForm
          submit={submit}
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          passwordAgain={passwordAgain}
          setPasswordAgain={setPasswordAgain}
        />
      ) : (
        <LoginForm
          submit={submit}
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      )}
    </div>
  );
};

// DODO: map State To Props
const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = {
  login: actionCreators.login,
  signup: actionCreators.signup,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginSignup);
