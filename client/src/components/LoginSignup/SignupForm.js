/* eslint react/prop-types: 0 */
import React from "react";
import { Input, Button, Label } from "semantic-ui-react";

/**
 *    SignupForm
 *
 * Renders a whole entire login form. Login button is disabled if there is are no values in the form.
 *
 * @function
 *
 * @param {Function} submit event handler function in the parent
 * @param {String} username the value from the parents username state
 * @param {Function} setUsername updates the username state in the parent
 * @param {String} password the value from the parents password state
 * @param {Function} setPassword updates the password state in the parent
 * @param {String} passwordAgain the value from the parents password state, must match password or the event handler will cancel and the button probably gets disabled also
 * @param {Function} setPasswordAgain updates the password state in the parent
 *
 * @returns JSX element
 *
 * @author Mikael
 */
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
