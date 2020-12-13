/* eslint react/prop-types: 0 */
import React from "react";
import { Input, Button } from "semantic-ui-react";

/**
 * Renders a whole entire login form. Login button is disabled if there is are no values in the form.
 * @param {Function} submit event handler function in the parent
 * @param {String} username the value from the parents username state
 * @param {Function} setUsername updates the username state in the parent
 * @param {String} password the value from the parents password state
 * @param {Function} setPassword updates the password state in the parent
 */
const LoginForm = ({
  submit,
  username,
  setUsername,
  password,
  setPassword,
}) => {
  return (
    <form id="cardContent">
      <div>
        <Input
          type="text"
          placeholder="username"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        <Input
          type="password"
          placeholder="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <Button
        type="button"
        value="Login"
        onClick={() => {
          submit();
        }}
        disabled={!username || !password}
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
