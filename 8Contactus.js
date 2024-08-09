const { useState } = React;

function ContactUsForm() {
  //data
  const [department, setDepartment] = useState("");
  let [message, setMessage] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  //functions
  function handleSubmit(event) {
    event.preventDefault();
    const data = { department, message, agreedToTerms };
    console.log(data);
  }

  //html

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="department">Department</label>
      <select
        name="department"
        id="department"
        value={department}
        onChange={(event) => setDepartment(event.target.value)}
      >
        <option value="">Select...</option>
        <option value="HR">Human Resources</option>
        <option value="PR">Public Relations</option>
        <option value="SUPPORT">Support</option>
      </select>
      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        id="message"
        rows="6"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      ></textarea>

      <div>
        <input
          type="checkbox"
          name="agreedToTerms"
          id="agreedToTerms"
          checked={agreedToTerms}
          onChange={(event) => setAgreedToTerms(event.target.checked)}
        />
        <label htmlFor="agreedToTerms">
          I agree to the terms and conditions
        </label>
      </div>
      <button>Send</button>
      <pre>{JSON.stringify({ department, message, agreedToTerms })}</pre>
    </form>
  );
}

function App() {
  return (
    <div className="container">
      <ContactUsForm />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
