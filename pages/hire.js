import styles from "../styles/Form.module.css";
import { useState } from "react";

export default function Hire() {
  return (
    <div className="container">
      <div className={styles.formHand}>
        <div className={styles.title}>
          <h1>Send a mail to me</h1>
          <p>It's free</p>
        </div>
        <form
          name="contact"
          className={styles.form}
          method="POST"
          action="/success"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="text"
            name="name"
            className={styles.inputField}
            placeholder="Name"
          />
          <input
            type="email"
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
          />
          <button className={styles.inputButton} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
