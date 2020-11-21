/* eslint-disable react/destructuring-assignment */
/* eslint react/prop-types: 0 */
import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Modal } from "semantic-ui-react";
import actionCreators from "../../reducers";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

const LoginSignup = (props) => {
  const [flip, setFlip] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const submit = async () => {
    let res;
    try {
      if (flip) {
        if (!(password === passwordAgain))
          throw new Error("Passwords do not match");
        res = await props.signup({ username, password });
      } else {
        res = await props.login({ username, password });
      }
      if (res.message) throw new Error(res.message);
      setPassword("");
      setUsername("");
      setPasswordAgain("");
      props.handleResponse(true, `logged in as ${res.user.username}`);
    } catch (err) {
      props.handleResponse(false, err.message);
    }
  };

  return (
    <div>
      <Modal.Header>{flip ? "Create an account" : "Login"}</Modal.Header>
      <Modal.Content>
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
      </Modal.Content>
      <Modal.Content>
        {flip
          ? "Already have an account? Log in!"
          : "Don't have an account? Sign up!"}
        <Button onClick={() => setFlip((prev) => !prev)}>
          {flip ? "Login" : "Create account"}
        </Button>
      </Modal.Content>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  login: actionCreators.login,
  signup: actionCreators.signup,
  postNotification: actionCreators.postNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginSignup);
