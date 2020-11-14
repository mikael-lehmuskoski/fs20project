import React, { useState } from "react";
// TODO: signup service

/**
 * [INCOMPLETE] Renders a form for signup
 */
const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  // lähettää tiedot palvelimelle
  /* const submit = (event) => {
    event.preventDefault();

    if (password !== passwordAgain) window.alert("password dont match!")
    else {
      signup({ username, password })
        .then((res) => {
          // TODO: notification, save res.config.data to local
          console.log(res);
          if (!res || res.status !== 200) throw new Error(res);
          window.alert("tilin luominen onnistui!");
        })
        .catch((err) => window.alert(err)); // TODO: notification
      setPassword("");
      setUsername("");
    }
  }; */

  return (
    <div className="signupForm">
      <form onSubmit={null}>
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
        <button type="submit">signup</button>
      </form>
    </div>
  );
};

export default SignupForm;
