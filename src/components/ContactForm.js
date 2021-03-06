import React from "react";

import * as styles from "./ContactForm.module.css";

import { navigate } from "gatsby";

const contactEmail = "xaver.fleer+aux1000feuilles@gmail.com";

export default function ContactForm() {
  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <ContactFormEntry label="nom" name="name" type="text" />
      <ContactFormEntry
        label="téléphone ou e-mail"
        name="contact"
        type="text"
      />
      <ContactFormEntry label="message" name="message" type="textarea" />
      <button className={styles.contactForm__submit} name="submit">
        Envoyer
      </button>
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
      <label className={styles.contactForm__label} htmlFor={inputId}>
        {label}&thinsp;*
      </label>
    </div>
  );
}

function handleSubmit(event) {
  event.preventDefault();
  const formElem = event.currentTarget;
  const payload = getPayload(formElem);

  fetch(`/.netlify/functions/sendMessage`, {
    body: payload,
    headers: { "Content-type": "application/json" },
    method: "POST",
  }).then((response) =>
    response.ok ? handleSuccess(formElem) : handleError()
  );
}

function getPayload(formElem) {
  const formData = getFormData(formElem);
  return JSON.stringify({ formData, recipient: contactEmail });
}

function getFormData(formElem) {
  return [].slice
    .call(formElem)
    .map(({ name, value }) => ({ name, value }))
    .filter(({ name }) => name !== "submit")
    .reduce((acc, { name, value }) => ({ ...acc, [name]: value }), {});
}

function handleError() {
  alert(
    `Impossible d'envoyer le message.\nVeuillez réessayer plus tard ou me contacter à ${contactEmail}.`
  );
}

function handleSuccess(formElem) {
  formElem.reset();
  navigate("/message-envoye/");
}
