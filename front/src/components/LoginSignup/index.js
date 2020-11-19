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

  const user = props.user ? props.user.user : null;
  if (user) props.setOpen(false);
  /* if (user) {
    props.setOpen(false);
    return <div> {`Logged in as ${user.username}`} </div>; // eslint-disable-line
  } */
  console.log("logged in inside loginsignup I WANNA RENDER YA BINCH", user);

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
      console.log(err.message); // DODO: notification
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
