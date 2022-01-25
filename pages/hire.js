import styles from "../styles/Form.module.css";
import { useState } from "react";

export default function Hire() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");

    let data = {
      name,
      email,
      message,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    });
  };

  if (submitted)
    return (
      <>
        <h1 className={styles.submitted}>
          Your mail has been sent to my inbox!
        </h1>
      </>
    );

  return (
    <div className="container">
      <div className={styles.formHand}>
        <div className={styles.title}>
          <h1>Send a mail to me</h1>
          <p>It's free</p>
        </div>
        <form className={styles.form}>
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            name="name"
            className={styles.inputField}
            placeholder="Name"
          />
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            className={styles.inputField}
            placeholder="Email"
          />
          <textarea
            type="text"
            name="message"
            rows="10"
            cols="25"
            placeholder="I want you on my team!"
            className={styles.textField}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button
            className={styles.inputButton}
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
