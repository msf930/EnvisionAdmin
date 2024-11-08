import Image from "next/image";

import styles from "./styles.module.css";

import hero from "../../public/aboutHero.jpg";
import aboutOne from "../../public/homeAchieve.png";
import aboutTwo from "../../public/about2.png";
import aboutThree from "../../public/about3.png";
import whoOne from "../../public/whoOne.png";

import ScheduleButton from "../components/ScheduleButton";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroCont}>
          <div className={styles.heroLogo}>
            <div className={styles.heroGoodbyeCont}>
              <h3>Say Goodbye to Back Office Overwhelm</h3>
              <p>
                Running a small business is no easy feat. Between managing daily
                operations and striving for growth, handling your company&apos;s
                finances can feel like a never-ending battle. At Envision
                Administrative Services, we transform these administrative
                burdens into streamlined processes, freeing you to focus on what
                truly matters: growing your business.
              </p>
              <ScheduleButton isCenter={false} />
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src={hero}
              alt="placeholder"
              unoptimized
              objectFit="cover"
              layout="fill"
            />
          </div>
        </div>
      </div>
      {/* Section One and Two */}
      <div className={styles.aboutOneCont}>
        <div className={styles.achieve}>
          <div className={styles.achieveCont}>
            <h3>About Envision Administrative Services</h3>
            <p>
              Expert operational and accounting support to optimize your cash
              flow and eliminate back office administrative burden, so you can
              focus on what matters most.
            </p>
          </div>
        </div>
      </div>
      {/* Streamlined */}
      <div className={styles.streamlineCont}>
        <div className={styles.streamlineItemCont}>
          <h2>Achieving Work-Life Balance</h2>
          <p>
            Our mission is simple: optimize your cash flow and eliminate
            administrative burden so you can achieve a better work-life balance.
            By providing expert operational and accounting support tailored to
            small businesses, we help you master your business, not your
            paperwork. When you partner with us, you gain more than just
            support—you gain a committed ally dedicated to your success.
          </p>
        </div>
        <div className={styles.streamlineImgCont}>
          <Image
            src={aboutOne}
            alt="placeholder"
            unoptimized
            objectFit="cover"
            layout="fill"
            placeholder="blur"
            className={styles.streamlineImg}
          />
        </div>
      </div>
      <div className={styles.lineCont}>
        <hr className={styles.aboutLine}></hr>
      </div>
      {/* Streamlined */}
      <div className={styles.streamlineCont}>
        <div className={styles.streamlineItemCont}>
          <h2>Streamlined Operations, Optimized Cash Flow</h2>
          <p>
            We understand that every business is unique, which is why we offer
            customized solutions that fit your specific needs. Whether
            you&apos;re struggling with accounts payable, receivable, or
            collections, our reliable contract solutions eliminate the need for
            part-time hires while ensuring your sensitive financial information
            is managed with the utmost care and expertise.
          </p>
        </div>
        <div className={styles.streamlineImgCont}>
          <Image
            src={aboutTwo}
            alt="placeholder"
            unoptimized
            objectFit="cover"
            layout="fill"
            placeholder="blur"
            className={styles.streamlineImg}
          />
        </div>
      </div>
      <div className={styles.lineCont}>
        <hr className={styles.aboutLine}></hr>
      </div>
      {/* Streamlined */}
      <div className={styles.streamlineCont2}>
        <div className={styles.streamlineItemCont}>
          <h2>Your Success Is Our Priority</h2>
          <p>
            With 25 years of experience in back office operations and hundreds
            of satisfied customers across industries—from medical offices to
            real estate agencies, construction companies to professional
            services—we bring the expertise and reliability your business needs.
            Our deep understanding of operational challenges and proven
            solutions helps you overcome common hurdles like:
          </p>
          <div className={styles.streamlineListCont}>
            <ul className={styles.streamlineList}>
              <li>Time-consuming administrative tasks</li>
              <li>Complex cash flow management</li>
              <li>Inconsistent business processes</li>
              <li>Operational inefficiencies</li>
              <li>Growth-limiting paperwork</li>
            </ul>
          </div>
        </div>
        <div className={styles.streamlineImgCont}>
          <Image
            src={aboutThree}
            alt="placeholder"
            unoptimized
            objectFit="cover"
            layout="fill"
            placeholder="blur"
            className={styles.streamlineImg}
          />
        </div>
      </div>
      {/* Success */}
      {/* <div className={styles.successCont}>
        <h2>Your Success Is Our Priority</h2>
        <div className={styles.successInfoCont}>
          <p>
            With 25 years of experience in back office operations and hundreds
            of satisfied customers across industries—from medical offices to
            real estate agencies, construction companies to professional
            services—we bring the expertise and reliability your business needs.
            Our deep understanding of operational challenges and proven
            solutions helps you overcome common hurdles like:
          </p>
          <div className={styles.successListCont}>
            <ul className={styles.successList}>
              <li>Time-consuming administrative tasks</li>
              <li>Complex cash flow management</li>
              <li>Inconsistent business processes</li>
              <li>Operational inefficiencies</li>
              <li>Growth-limiting paperwork</li>
            </ul>
          </div>
        </div>
      </div> */}
      {/* Discover */}
      <div className={styles.discoverCont}>
        <div className={styles.discoverItemCont}>
          <h2>Discover the Difference Today</h2>
          <p>
            Take the first step toward transforming your operations and
            optimizing your cash flow by scheduling a free consultation. Let
            Envision Administrative Services show you how to master your
            business while we handle the details. Focus on what you love and
            watch your business thrive.
          </p>
          <ScheduleButton isCenter={true} />
        </div>
      </div>
      {/* Who */}
      <div className={styles.whoCont}>
        <h2>Who We Are</h2>
        <div className={styles.whoInfoCont}>
          <div className={styles.whoImgCont}>
            <Image
              src={whoOne}
              alt="placeholder"
              unoptimized
              className={styles.whoOneImg}
            />
          </div>
          <div className={styles.whoInfoTextCont}>
            <h3>Kristina Kefalas</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
              velit sed nisl ullamcorper lobortis. Nulla arcu sem, tempor eu
              ornare non, scelerisque eget turpis. Nulla vitae pulvinar orci.
              Etiam lorem odio, aliquet id purus quis, dictum blandit nisi. Nunc
              odio dolor, scelerisque et scelerisque a, aliquet et ante. Nullam
              consectetur ipsum non tempor venenatis. Nulla ut ex massa.
              Praesent venenatis bibendum erat vel blandit. Mauris interdum ante
              lacus, vitae luctus nunc pellentesque quis.
            </p>
          </div>
        </div>
      </div>
      {/* Contact */}
      <div>
        <ContactForm isStandard={true} />
      </div>
      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
