"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "./ContactForm.module.css";

import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";

import homeAchieve from "../../public/homeAchieve.png";

const ContactForm = ({ isStandard }) => {
  const [submitted, setSubmitted] = useState(false);
  const [social, setSocial] = useState([]);

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

  const SOCIAL_QUERY = `*[
    _type == "socials"
  ]{_id, isActive,  socialIcon, url}`;

  useEffect(() => {
    const fetchSocial = async () => {
      //setSocialLoading(true);
      const fetchedPost = await client.fetch(SOCIAL_QUERY);
      setSocial(fetchedPost);

      //setSocialLoading(false);
    };

    fetchSocial();
  }, [SOCIAL_QUERY]);

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
        <div className={styles.contactLeftCont}>
          <h3>Let&apos;s Chat, Reach Out to Us</h3>
          <p>
            Have questions or feedback? We&apos;re here to help. Send us a
            message.
          </p>
          <p>Phone: 111-111-1111 </p>
          <p>Email: kristina@envisionadminservices.com</p>
          <div className={styles.socialCont}>
            {social.map((item) => {
              return (
                item.isActive && (
                  <a
                    key={item._id}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={urlFor(item.socialIcon).url()}
                      alt={item.socialIcon.alt}
                      width={20}
                      height={20}
                    />
                  </a>
                )
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.contactCenter}>
        <div className={styles.contactCenterCont}>
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
            <div className={styles.inputGroupCont}>
              <div className={styles.inputItem}>
                <div className={styles.inputLabelCont}>
                  <label className={styles.inputItemLabel}>Business Name</label>
                </div>
                <input
                  name="BusinessName"
                  type="text"
                  title="Business Name"
                  placeholder="Business name.."
                  aria-label="Business name"
                  className={
                    isStandard
                      ? styles.inputItemInputStandard2
                      : styles.inputItemInputNonStandard2
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
    </div>
  );
};
export default ContactForm;
