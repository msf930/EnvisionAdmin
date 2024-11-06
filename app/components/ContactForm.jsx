"use client";

import React, { useState } from "react";

import styles from "./ContactForm.module.css";

const ContactForm = ({ isStandard }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch(`${process.env.NEXT_PUBLIC_HERO_TOFU_FORM_ACTION}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Form response was not ok");
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        console.log(err);
        form.submit();
      });
  };

  if (submitted) {
    return (
      <div
        className={
          isStandard
            ? `${styles.contactContWhite}`
            : `${styles.contactContBlue}`
        }
      >
        <h3>Thank you!</h3>
        <h3>We&apos;ll be in touch soon.</h3>
      </div>
    );
  }
  return (
    <div
      className={
        isStandard ? `${styles.contactContWhite}` : `${styles.contactContBlue}`
      }
    >
      <div className={styles.contactLeft}>
        <h3>Contact Us</h3>
        <p>Call our team or email us directly</p>
        <p>
          111-111-1111 
        </p>
        <p>email@email.com</p>
      </div>
      <div className={styles.contactRight}>
        <form
          action={process.env.NEXT_PUBLIC_HERO_TOFU_FORM_ACTION}
          onSubmit={handleSubmit}
          method="post"
          acceptCharset="UTF-8"
          className={styles.formCont}
        >
          <div className={styles.inputGroupCont}>
            <div className={styles.inputItem}>
              <div className={styles.inputLabelCont}>
                <label className={styles.inputItemLabel}>First Name</label>
              </div>
              <input
                name="NameFirst"
                type="text"
                title="First Name"
                required
                placeholder="Your name.."
                aria-label="First Name"
                className={
                  isStandard
                    ? styles.inputItemInputStandard
                    : styles.inputItemInputNonStandard
                }
              />
            </div>
            <div className={styles.inputItem}>
              <div className={styles.inputLabelCont}>
                <label className={styles.inputItemLabel}>Last Name</label>
              </div>
              <input
                name="NameLast"
                type="text"
                title="Last Name"
                required
                placeholder="Your last name.."
                aria-label="Last Name"
                className={
                  isStandard
                    ? styles.inputItemInputStandard
                    : styles.inputItemInputNonStandard
                }
              />
            </div>
          </div>
          <div className={styles.inputGroupCont}>
            <div className={styles.inputItem}>
              <div className={styles.inputLabelCont}>
                <label className={styles.inputItemLabel}>Phone</label>
              </div>
              <input
                name="PhoneNumber"
                type="text"
                title="Phone Number"
                placeholder="Phone number.."
                aria-label="Phone number"
                className={
                  isStandard
                    ? styles.inputItemInputStandard
                    : styles.inputItemInputNonStandard
                }
              />
            </div>
            <div className={styles.inputItem}>
              <div className={styles.inputLabelCont}>
                <label className={styles.inputItemLabel}>Email</label>
              </div>
              <input
                name="Email"
                id="email"
                type="email"
                required
                placeholder="Your email.."
                title="Email"
                aria-label="Email"
                className={
                  isStandard
                    ? styles.inputItemInputStandard
                    : styles.inputItemInputNonStandard
                }
              />
            </div>
          </div>
          <div className={styles.inputItem}>
            <div className={styles.inputLabelCont}>
              <label className={styles.inputItemLabel}>Message:</label>
            </div>
            <textarea
              placeholder="Your message.."
              name="message"
              title="message"
              aria-label="message"
              className={
                isStandard
                  ? styles.inputItemInputAreaStandard
                  : styles.inputItemInputAreaNonStandard
              }
              required
            />
          </div>
          <div className={styles.btnCont}>
            <button className={styles.submitBtn} type="submit" value="Submit">
              Submit
            </button>
          </div>
          <div className={styles.gotchaCont} aria-hidden="true">
            <input
              type="text"
              name="_gotcha"
              tabIndex="-1"
              autoComplete="off"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
