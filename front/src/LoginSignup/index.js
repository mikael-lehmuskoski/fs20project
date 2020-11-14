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
    props.login({ username, password });
    setPassword("");
    setUsername("");
  };

  return (
    <div className="loginSignup">
      <input
        type="button"
        value={flip ? "login" : "signup"}
        onClick={() => setFlip((prev) => !prev)}
      />
      {flip ? (
        <SignupForm
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
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginSignup);
