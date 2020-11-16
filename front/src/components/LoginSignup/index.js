/* eslint-disable react/destructuring-assignment */
/* eslint react/prop-types: 0 */
import React, { useState } from "react";
import { connect } from "react-redux";
import actionCreators from "../../reducers";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

const LoginSignup = (props) => {
  const [flip, setFlip] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const user = props.user ? props.user.user : null;
  if (user) return <div> {`Logged in as ${user.username}`} </div>; // eslint-disable-line

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

const mapStateToProps = (state) => {
  return { user: state.user };
};

const mapDispatchToProps = {
  login: actionCreators.login,
  signup: actionCreators.signup,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginSignup);
