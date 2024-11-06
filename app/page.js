import Image from "next/image";

import styles from "./styles.module.css";

import heroImage from "../public/homeHero.jpg";
import heroLogoImage from "../public/logoHero.png";
import homeAchieve from "../public/homeAchieve.png";

import ScheduleButton from "./components/ScheduleButton";
import Carousel from "./components/Carousel";
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroCont}>
          <div className={styles.heroLogo}>
            <Image
              className={styles.logoImage}
              src={heroLogoImage}
              alt="placeholderLogo"
              unoptimized
            />
            <ScheduleButton isCenter={true} />
          </div>
          <div className={styles.heroImage}>
            <Image
              src={heroImage}
              alt="placeholder"
              unoptimized
              objectFit="cover"
              layout="fill"
            />
          </div>
        </div>
      </div>
      {/* Master */}
      <div className={styles.masterCont}>
        <h1>Master Your Business, Not Your Paperwork</h1>
        <h3>
          Expert operational and accounting support to optimize your cash flow
          and eliminate back office administrative burden, so you can focus on
          what matters most.
        </h3>
        <ScheduleButton isCenter={true} />
        <h3>✓ Streamline Operations ✓ Focus on Growth  ✓ Optimize Cash Flow</h3>
      </div>
      {/* Break */}
      <div className={styles.breakCont}>
        <div className={styles.breakItemCont}>
          <h2>Break Free From Administrative Overwhelm</h2>
          <hr className={styles.breakLine}></hr>
          <p>
            Managing a small business means juggling numerous responsibilities,
            and back office management often becomes your heaviest burden. When
            accounts payable, receivable, and compliance tasks consume your day,
            it becomes nearly impossible to focus on strategic growth or
            maintain work-life balance.
          </p>
        </div>
      </div>
      {/* Achieve */}
      <div className={styles.achieveCont}>
        <div className={styles.achieveLeft}>
          <h2>Achieve clarity and control</h2>
          <p>
            With Envision Administrative Services as your trusted partner, you
            gain both operational efficiency and optimized cash flow. Our expert
            team manages your back office tasks with precision and
            professionalism, allowing you to focus on what truly matters:
            growing your business.
          </p>
          <ScheduleButton isCenter={false}/>
        </div>
        <div className={styles.achieveRight}>
          <div className={styles.achieveImageCont}>
            <Image
              src={homeAchieve}
              alt="placeholder"
              unoptimized
              objectFit="cover"
              layout="fill"
              className={styles.achieveImage}
            />
          </div>
        </div>
      </div>
      {/* Team */}
      <div className={styles.teamCont}>
        <div className={styles.teamLeft}>
          <div className={styles.teamStatCont}>
            <div className={styles.teamIconCont}>
              <div className={styles.teamIconText}>
                <h1>-40%</h1>
                <p>Admin Time</p>
              </div>
              <svg height="200" width="200" xmlns="http://www.w3.org/2000/svg">
                <circle r="100" cx="100" cy="100" fill="#13315C" />
              </svg>
            </div>
            <div className={styles.teamIconCont}>
              <div className={styles.teamIconText}>
                <h1>+25%</h1>
                <p>Cash Flow</p>
              </div>
              <svg height="200" width="200" xmlns="http://www.w3.org/2000/svg">
                <circle r="100" cx="100" cy="100" fill="#13315C" />
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.teamRight}>
          <h2>Your dedicated support team</h2>
          <p>
            We specialize in transforming operational complexity into
            streamlined success for small businesses. Our comprehensive support
            eliminates the need for part-time hires while ensuring your
            sensitive information is managed securely and efficiently. From
            paying bills to managing collections, we optimize every aspect of
            your operations. 
            <b>
              Plus we&apos;ve helped businesses reduce administration time by up
              to 40% and improve cash flow by 25% on average.
            </b>
          </p>
          <ScheduleButton isCenter={false} />
        </div>
      </div>
      {/* Partner */}
      <div className={styles.achieveCont}>
        <div className={styles.achieveLeft}>
          <h2>Your partner in business success</h2>
          <p>
            We understand the unique challenges you face as a small business
            owner. That&apos;s why Envision Administrative Services is committed to
            shouldering your administrative burden. Our professional approach
            ensures your operations run smoothly while strengthening your cash
            flow, giving you the freedom to lead with confidence.
          </p>
          <ScheduleButton position={"start"} />
        </div>
        <div className={styles.achieveRight}>
          <div className={styles.achieveImageCont}>
            <Image
              src={homeAchieve}
              alt="placeholder"
              unoptimized
              objectFit="cover"
              layout="fill"
              className={styles.achieveImage}
            />
          </div>
        </div>
      </div>
      {/* Flow */}
      <div className={styles.flowCont}>
        <div className={styles.pathTitleCont}>
          <h2>A simple path to better cash flow management</h2>
        </div>
        <div className={styles.flowStepCont}>
          <h1>01</h1>
          <h3 className={styles.flowStepText}>
            <b>Schedule a consultation:</b>
          </h3>
          <h3>
            Discuss your operational needs and challenges with a free
            consultation
          </h3>
        </div>
        <div className={styles.flowLineCont}>
          <hr className={styles.flowLine}></hr>
        </div>
        <div className={styles.flowStepCont}>
          <h1>02</h1>
          <h3 className={styles.flowStepText}>
            <b>Customize your solution:</b>
          </h3>
          <h3>
            Get a tailored plan that fits your business and back office needs
          </h3>
        </div>
        <div className={styles.flowLineCont}>
          <hr className={styles.flowLine}></hr>
        </div>
        <div className={styles.flowStepCont}>
          <h1>03</h1>
          <h3 className={styles.flowStepText}>
            <b>Focus on growth:</b>
          </h3>
          <h3>
            Let us handle the details while you drive success and enjoy peace of
            mind.
          </h3>
        </div>
      </div>
      {/* Testimanials */}
      <div className={styles.testCont}>
        <div className={styles.testItemCont}>
          <h3>What our clients say about us</h3>
          <div className={styles.carouselCont}>
            <Carousel />
          </div>
        </div>
      </div>
      {/* Reap */}
      <div className={styles.reapCont}>
        <div className={styles.reapTextCont}>
          <h2>Reap the rewards of expert back office management</h2>
          <h3>
            Transitioning to Envision Administrative Services offers numerous
            advantages:
          </h3>
          <div>
            <p>✓ Free up time to concentrate on core business strategies</p>
            <p>
              ✓ Ensure  that your back office tasks are managed securely and
              accurately
            </p>
            <p>✓ Improve operational efficiency and reduce errors</p>
            <p>
              ✓ Enjoy peace of mind knowing your cash flow isn’t lost in the
              invoicing process
            </p>
            <p>
              ✓ Delegate complex office management tasks and save valuable time
            </p>
          </div>
          <h3>
            Discover how a partnership with us can have a positive impact on
            your business.
          </h3>
          <div className={styles.reapBtnCont}>
            <ScheduleButton isCenter={true} />
          </div>
        </div>
      </div>
      {/* Contact */}
      <div>
        <ContactForm isStandard={false}/>
      </div>
      {/* Footer */}
      <div>
        <Footer/>
      </div>
    </div>
  );
}
