import React from "react";

import * as styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <form className={styles.contactForm}>
      <ContactFormEntry label="nom" name="name" type="text" />
      <ContactFormEntry
        label="téléphone ou e-mail"
        name="contact"
        type="text"
      />
      <ContactFormEntry label="message" name="message" type="textarea" />
    </form>
  );
}

function ContactFormEntry({ label, name, type }) {
  const inputId = `contact-form-${name}`;

  return (
    <div className={styles.contactForm__entry}>
      {type === "text" && (
        <input
          className={styles.contactForm__input}
          id={inputId}
          name={name}
          placeholder=" "
          required={true}
          title={label}
          type={type}
        />
      )}
      {type === "textarea" && (
        <textarea
          className={styles.contactForm__input}
          id={inputId}
          name={name}
          placeholder=" "
          required={true}
          rows="8"
          title={label}
        ></textarea>
      )}
      <label className={styles.contactForm__label} for={inputId}>
        {label}&thinsp;*
      </label>
    </div>
  );
}
