"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import styles from "./styles.module.css";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

import hero from "../../public/homeHero.png";
import aboutOne from "../../public/homeAchieve.png";
import aboutTwo from "../../public/about2.png";
import aboutThree from "../../public/about3.png";
import whoOne from "../../public/whoOne.png";

import ScheduleButton from "../components/ScheduleButton";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Contact() {
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
  return (
    <div>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroCont}>
          <div className={styles.heroLogo}>
            <div className={styles.heroGoodbyeCont}>
              <h3>Get in Touch with Us</h3>
              <p>
                We value your feedback and inquiries. If you have any questions,
                comments, or need assistance, please don&apos;t hesitate to reach out
                to us. Our dedicated team is here to help and ensure you have
                the best experience possible. You can contact us via email,
                phone, or through our online contact form. We look forward to
                hearing from you and will respond as promptly as possible.
              </p>
              <ScheduleButton isCenter={false} />
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src={hero}
              alt="eagle flying over forest"
              unoptimized
              objectFit="cover"
              layout="fill"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      <div className={styles.contactContWhite}>
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
                    <label className={styles.inputItemLabel}>
                      Business Name
                    </label>
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
                <button
                  className={styles.submitBtn}
                  type="submit"
                  value="Submit"
                >
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

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
