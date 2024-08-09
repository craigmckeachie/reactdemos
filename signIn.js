const { useState } = React;
function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  function signIn(event) {
    event.preventDefault();
    console.log({ username, password, rememberMe });
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
        {/* <label htmlFor="status"></label>
        <select
          name="status"
          id="status"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        >
          <option value="">Select...</option>
          <option value="NEW">New</option>
          <option value="APPROVED">Approved</option>
          <option value="REJECTED">Rejected</option>
          <option value="REVIEW">Review</option>
        </select> */}
        <input
          type="checkbox"
          name="rememberMe"
          id="rememberMe"
          checked={rememberMe}
          onChange={(event) => setRememberMe(event.target.checked)}
        />
        <button type="submit">Sign In</button>
      </form>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<SignInForm />);
