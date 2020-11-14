/* eslint react/prop-types: 0 */
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useMutation } from "@apollo/client";
import { setUser } from "../reducers";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import LOGIN from "../mutations";

const LoginSignup = (props) => {
  const [login, result] = useMutation(LOGIN);

  useEffect(() => {
    if (result.data) {
      props.setUser(result);
    }
  }, [result.data]); // eslint-disable-line

  const [flip, setFlip] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const submit = (event) => {
    event.preventDefault();
    login({
      variables: { username, password },
    });
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
        <LoginForm
          submit={submit}
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      ) : (
        <SignupForm
          passwordAgain={passwordAgain}
          setPasswordAgain={setPasswordAgain}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = {
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginSignup);
