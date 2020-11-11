/* eslint react/prop-types: 0 */
import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../reducers/reducer";

/**
 * Renders a form for login and handles login
 */
const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = (event) => {
    event.preventDefault();
    props.login({ username, password });

    setPassword("");
    setUsername("");
  };

  return (
    <div className="loginForm">
      <form onSubmit={submit}>
        <div>
          <input
            type="text"
            placeholder="username"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { state };
};

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
