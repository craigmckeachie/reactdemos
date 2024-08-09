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
    <form className="card p-4" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label" htmlFor="department">
          Department
        </label>
        <select
          className="form-select"
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
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="message">
          Message
        </label>
        <textarea
          className="form-control"
          name="message"
          id="message"
          rows="6"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>
      </div>
      <div className="mb-4 form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="agreedToTerms"
          id="agreedToTerms"
          checked={agreedToTerms}
          onChange={(event) => setAgreedToTerms(event.target.checked)}
        />
        <label className="form-check-label" htmlFor="agreedToTerms">
          I agree to the terms and conditions
        </label>
      </div>
      <hr />
      <div className="d-flex gap-2 mt-2 justify-content-end">
        <button className="btn btn-primary">Send</button>
        <button className="btn btn-outline-primary">Cancel</button>
      </div>
    </form>
  );
}

function App() {
  return (
    <div className="container mt-4">
      <ContactUsForm />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
