"use client";

import { useEffect, useState } from "react";
import styles from "./ContactPageForm.module.css";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";

export default function ContactPageForm() {
  const [submitted, setSubmitted] = useState(false);
  const [social, setSocial] = useState([]);
  const [info, setInfo] = useState({});

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
    _type in ["socials", "info"]]{
    _type,
    _id,
    _type == "socials" => {_id, isActive,  socialIcon, url},
    _type == "info" => {Phone_number, Email}
    }`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPost = await client.fetch(SOCIAL_QUERY);
        const socialFilter = fetchedPost.filter(
          (item) => item._type === "socials",
        );
        const infoFilter = fetchedPost.filter((item) => item._type === "info");
        const infoArrOne = infoFilter[0];
        setSocial(socialFilter);
        setInfo(infoArrOne);
      } catch (error) {
        console.error("Error fetching social and info data:", error);
      }
    };

    fetchData();
  }, [SOCIAL_QUERY]);
  return (
    <div className={styles.contactContWhite}>
      <div className={styles.contactLeft}>
        <div className={styles.contactLeftCont}>
          <h3>Let&apos;s Chat, Reach Out to Us</h3>
          <p>
            Have questions or feedback? We&apos;re here to help. Send us a
            message.
          </p>
          <p>Phone: {info.Phone_number} </p>
          <p>Email: {info.Email}</p>
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
                  className={styles.inputItemInputStandard}
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
                  className={styles.inputItemInputStandard}
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
                  className={styles.inputItemInputStandard}
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
                  className={styles.inputItemInputStandard}
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
                  className={styles.inputItemInputStandard2}
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
                className={styles.inputItemInputAreaStandard}
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
}
