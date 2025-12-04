import React from "react";
import useInput from "../hooks/useInput";

const ControlledForm = () => {
  const name = useInput("");
  const email = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.value || !email.value) return;

    alert(`Name: ${name.value}\nEmail: ${email.value}`);
    name.reset();
    email.reset();
  };

  return (
    <div className="form-container card">
      <h2>Controlled Form Example</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name.value}
          onChange={name.onChange}
          className="input-field"
        />
        {name.error && <p className="error">{name.error}</p>}

        <input
          type="email"
          placeholder="Enter Email"
          value={email.value}
          onChange={email.onChange}
          className="input-field"
        />
        {email.error && <p className="error">{email.error}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ControlledForm;
