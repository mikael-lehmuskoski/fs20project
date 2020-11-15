/* eslint react/prop-types: 0 */
import React from "react";

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
    <div className="signupForm">
      <form>
        <div>
          <input
            type="text"
            placeholder="username"
            value={username}
            required
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            value={password}
            required
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password again"
            value={passwordAgain}
            required
            name="PasswordAgain"
            onChange={({ target }) => setPasswordAgain(target.value)}
          />
        </div>
        <input
          type="button"
          value="Create account"
          onClick={() => {
            submit();
          }}
        />
      </form>
    </div>
  );
};

export default SignupForm;
