import styles from "./styles.module.css";

import Image from "next/image";

import ScheduleButton from "../components/ScheduleButton";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import WhoWeAre from "../components/WhoWeAre";
import DynamicImage from "../components/DynamicImage";
import AboutImageItem from "../components/AboutImageItem";

export default function About() {
  return (
    <div className={styles.aboutCont}>
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
            {/*<DynamicImage*/}
            {/*  url="https://utfs.io/f/6GG2Rpnzy0n2GJVUCaOTFSeOBTwnHLyzJcroMV7R3pNduAUk"*/}
            {/*  alt="office building"*/}
            {/*/>*/}
            <Image
              src="https://utfs.io/f/6GG2Rpnzy0n2GJVUCaOTFSeOBTwnHLyzJcroMV7R3pNduAUk"
              alt="office building"
              unoptimized
              priority
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
            <ScheduleButton isCenter={true} />
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
          <AboutImageItem imageNumber={"About_image_one"} />
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
          <AboutImageItem imageNumber={"About_image_two"} />
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
          <AboutImageItem imageNumber={"About_image_three"} />
        </div>
      </div>
      {/* Success */}

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
      <WhoWeAre />
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
