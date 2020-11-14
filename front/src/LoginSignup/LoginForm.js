/* eslint react/prop-types: 0 */
import React from "react";

const LoginForm = ({
  submit,
  username,
  setUsername,
  password,
  setPassword,
}) => {
  return (
    <form onSubmit={() => submit}>
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
  );
};

export default LoginForm;
