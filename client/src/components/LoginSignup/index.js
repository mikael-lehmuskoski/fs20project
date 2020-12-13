/* eslint-disable react/destructuring-assignment */
/* eslint react/prop-types: 0 */
import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Modal } from "semantic-ui-react";
import actionCreators from "../../reducers";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

/**
 *    LoginSignup
 *
 * Renders content for a Semantic UI modal. Flips between login form and sign up form.
 *
 * @param {Object} props
 * @param {Function} props.SIGNUP Action creator that signs you up
 * @param {Function} props.LOGIN Action creator that logs you in
 * @param {Function} props.handleResponse Callback function for closing the modal and showing a notification
 *
 * @returns JSX element
 *
 * @author Mikael
 */
const LoginSignup = (props) => {
  const [flip, setFlip] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  /**
   *    submit
   *
   * Event handler that checks whether the user is on the signup form or the login form and calls the appropriate action creator.
   * Also sends a thingy for the callback function in the parent element.
   *
   * @function
   *
   * @author Mikael
   */
  const submit = async () => {
    let res;
    try {
      if (flip) {
        if (!(password === passwordAgain))
          throw new Error("Passwords do not match");
        res = await props.SIGNUP({ username, password });
      } else {
        res = await props.LOGIN({ username, password });
      }
      if (res.message || res[0]?.message)
        throw new Error(res.message || res[0]?.message);
      setPassword("");
      setUsername("");
      setPasswordAgain("");
      props.handleResponse(true, `logged in as ${res.user.username}`);
    } catch (err) {
      props.handleResponse(false, err.message);
    }
  };

  return (
    <div id="card">
      <Modal.Content id="cardContent">
        {flip ? "Create an account" : "Login"}
      </Modal.Content>
      <Modal.Content id="cardContent">
        {flip ? (
          <SignupForm
            id="cardContent"
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
            id="cardContent"
            submit={submit}
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        )}
      </Modal.Content>
      <Modal.Content id="cardContent">
        <div id="cardContent">
          {flip ? (
            <p id="cardContent">Already have an account? Log in!</p>
          ) : (
            <p id="cardContent">Don&apos;t have an account? Sign up!</p>
          )}
          <Button onClick={() => setFlip((prev) => !prev)} id="cardContent">
            {flip ? "Login" : "Create account"}
          </Button>
        </div>
      </Modal.Content>
    </div>
  );
};

const mapDispatchToProps = {
  LOGIN: actionCreators.LOGIN,
  SIGNUP: actionCreators.SIGNUP,
};

export default connect(null, mapDispatchToProps)(LoginSignup);
