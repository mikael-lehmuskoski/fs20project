/* eslint react/prop-types: 0 */
import React from "react";
import { Input, Button } from "semantic-ui-react";

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
