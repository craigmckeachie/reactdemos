const { useState } = React;
function SignInForm() {
  const [username, setUsername] = useState("cmckeachie");
  const [password, setPassword] = useState("abc123");
  const [rememberMe, setRememberMe] = useState(false);

  function signIn(event) {
    event.preventDefault();
    console.log({ username, password });
  }

  return (
    <>
      <form onSubmit={signIn}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="enter username"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="enter password"
        />
        {/* <select name="" id="" value={stateId}>
          <option value="1">Ohio</option>
          <option value="2">Nevada</option>
        </select> */}
        <input type="checkbox" name="" id="" checked={rememberMe} on />
        <button type="submit">Sign In</button>
      </form>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<SignInForm />);
