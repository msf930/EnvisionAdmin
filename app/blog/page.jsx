import Image from "next/image";

import styles from "./styles.module.css";

import heroImage from "../../public/homeHero.png";

import ScheduleButton from "../components/ScheduleButton";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Blog() {
  return (
    <div>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroCont}>
          <div className={styles.heroBlogCont}>
            <div className={styles.heroText}>
              <h3>Latest Post</h3>
              <p>01/01/2000</p>
              <h1>
                Payroll Fraud: How to Identify Fraud & Safeguard Your Company
              </h1>
              <p className={styles.heroTextTextCont}>
                There are various threats to the security of your business, one
                of which is payroll fraud.
              </p>
              <button className={styles.heroPostBtn}>View post</button>
            </div>
            <div className={styles.heroImgCont}>
              <Image
                src={heroImage}
                alt="placeholder"
                unoptimized
                objectFit="cover"
                // layout="fill"
                placeholder="blur"
                className={styles.heroBlogImg}
              />
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src={heroImage}
              alt="placeholder"
              unoptimized
              objectFit="cover"
              layout="fill"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      <div className={styles.blogItemsCont}>
        <div className={styles.blogItem}>
          <div className={styles.blogItemImgCont}>
            <Image
              src={heroImage}
              alt="placeholder"
              unoptimized
              objectFit="cover"
              //   layout="fill"
              placeholder="blur"
              className={styles.blogItemImg}
            />
          </div>
          <div className={styles.blogItemText}>
            <h3>01/01/2000</h3>
            <h1>
              Payroll Fraud: How to Identify Fraud & Safeguard Your Company
            </h1>
            <p>
              There are various threats to the security of your business, one of
              which is payroll fraud.
            </p>
          </div>
          <div className={styles.blogItemBtnCont}>
            <button className={styles.blogItemBtn}>View post</button>
          </div>
        </div>
      </div>
    </div>
  );
}
