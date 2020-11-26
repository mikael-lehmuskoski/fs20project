/* eslint react/prop-types: 0 */
import React from "react";
import { Input, Button, Label } from "semantic-ui-react";

// DODO: check if username is taken through onChange -> add <Label>
const SignupForm = ({
  submit,
  username,
  setUsername,
  password,
  setPassword,
  passwordAgain,
  setPasswordAgain,
}) => {
  return (
    <form id="cardContent">
      <div>
        <Input
          type="text"
          placeholder="username"
          value={username}
          required
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        <Input
          type="password"
          placeholder="password"
          value={password}
          required
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <div style={{ position: "relative" }}>
        <Input
          type="password"
          placeholder="password again"
          value={passwordAgain}
          required
          name="PasswordAgain"
          onChange={({ target }) => setPasswordAgain(target.value)}
          error={password !== passwordAgain}
        />
        {password !== passwordAgain ? (
          <Label
            pointing="left"
            floating
            horizontal
            style={{ position: "absolute" }}
          >
            Passwords do not match
          </Label>
        ) : (
          ""
        )}
      </div>
      <Button
        type="button"
        value="Signup"
        onClick={() => {
          submit();
        }}
        disabled={!username || !password || password !== passwordAgain}
      >
        Create account
      </Button>
    </form>
  );
};

export default SignupForm;
