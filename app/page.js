import Image from "next/image";

import styles from "./styles.module.css";

import heroImage from "../public/homeHero.png";
import homeAchieve from "../public/homeAchieve.png";
import streamline from "../public/streamlineGold.png";
import growth from "../public/growthGold.png";
import cashFlow from "../public/cashFlowGold.png";
import reapCheck from "../public/reapCheckGold.png";

import ScheduleButton from "./components/ScheduleButton";
import Carousel from "./components/Carousel";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import DynamicImage from "./components/DynamicImage";

export default function Home() {
  return (
    <div className={styles.homeCont}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroCont}>
          <div className={styles.heroTextCont}>
            <div className={styles.heroTextLeft}>
              <h1>Master Your Business, Not Your Paperwork</h1>
              <h3>
                Expert operational and accounting support to optimize your cash
                flow and eliminate back office administrative burden, so you can
                focus on what matters most.
              </h3>
              <div className={styles.heroItemCont}>
                <div className={styles.heroItem}>
                  <div className={styles.heroItemImg}>
                    <Image
                      src={streamline}
                      alt="Gears"
                      priority
                      unoptimized
                      objectFit="cover"
                      layout="fill"
                      // placeholder="blur"
                    />
                  </div>
                  <p>Streamline Operations</p>
                </div>
                <div className={styles.heroItem}>
                  <div className={styles.heroItemImg}>
                    <Image
                      src={growth}
                      alt="upward trending graph"
                      priority
                      unoptimized
                      objectFit="cover"
                      layout="fill"
                      //placeholder="blur"
                    />
                  </div>
                  <p>Focus on Growth</p>
                </div>
                <div className={styles.heroItem}>
                  <div className={styles.heroItemImg}>
                    <Image
                      src={cashFlow}
                      alt="money sign with arrows around it"
                      priority
                      unoptimized
                      objectFit="cover"
                      layout="fill"
                      // placeholder="blur"
                    />
                  </div>
                  <p>Optimize Cash Flow</p>
                </div>
              </div>
              <ScheduleButton isCenter={true} />
            </div>
          </div>
          <div className={styles.heroImage}>
            {/*<DynamicImage*/}
            {/*  url="https://utfs.io/f/6GG2Rpnzy0n2AwHHK3ITiHFGpNSCkMcWuolefEXY5I310B27"*/}
            {/*  alt="eagle flying over forest"*/}
            {/*/>*/}
            {/*<Image*/}
            {/*  src="https://utfs.io/f/6GG2Rpnzy0n2AwHHK3ITiHFGpNSCkMcWuolefEXY5I310B27"*/}
            {/*  alt="eagle flying over forest"*/}
            {/*  unoptimized*/}
            {/*  priority*/}
            {/*  objectFit="cover"*/}
            {/*  layout="fill"*/}
            {/*/>*/}
            <Image
              src={heroImage}
              alt="eagle flying over forest"
              unoptimized
              priority
              objectFit="cover"
              layout="fill"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      {/* Multi */}
      <div className={styles.multiCont}>
        <div className={styles.multiContHead}>
          <h2 className={styles.multiConth2}>
            Break Free From Administrative Overwhelm
          </h2>
          <p className={styles.multiContP}>
            Managing a small business means juggling numerous responsibilities,
            and back office management often becomes your heaviest burden. When
            accounts payable, receivable, and compliance tasks consume your day,
            it becomes nearly impossible to focus on strategic growth or
            maintain work-life balance.
          </p>
        </div>
        <div className={styles.multiItemCont}>
          <div className={styles.multiItem}>
            <div className={styles.multiHead}>
              <h3>Achieve clarity and control</h3>
            </div>
            <div className={styles.multiP}>
              <p>
                With Envision Administrative Services as your trusted partner,
                you gain both operational efficiency and optimized cash flow.
                Our expert team manages your back office tasks with precision
                and professionalism, allowing you to focus on what truly
                matters: growing your business.
              </p>
            </div>
            <div className={styles.multiBtnCont}>
              <ScheduleButton isCenter={true} />
            </div>
          </div>
          <div className={styles.multiItem}>
            <div className={styles.multiHead}>
              <h3>Your dedicated support team</h3>
            </div>
            <div className={styles.multiP}>
              <p>
                We specialize in transforming operational complexity into
                streamlined success for small businesses. Our comprehensive
                support eliminates the need for part-time hires while ensuring
                your sensitive information is managed securely and efficiently.
                From paying bills to managing collections, we optimize every
                aspect of your operations.{" "}
                <b className={styles.multiPBold}>
                  Plus we&apos;ve helped businesses reduce administration time
                  by up to 40% and improve cash flow by 25% on average.
                </b>
              </p>
            </div>
            <div className={styles.multiBtnCont}>
              <ScheduleButton isCenter={true} />
            </div>
          </div>
          <div className={styles.multiItem}>
            <div className={styles.multiHead}>
              <h3>Your partner in business success</h3>
            </div>
            <div className={styles.multiP}>
              <p>
                We understand the unique challenges you face as a small business
                owner. That&apos;s why Envision Administrative Services is
                committed to shouldering your administrative burden. Our
                professional approach ensures your operations run smoothly while
                strengthening your cash flow, giving you the freedom to lead
                with confidence.
              </p>
            </div>
            <div className={styles.multiBtnCont}>
              <ScheduleButton isCenter={true} />
            </div>
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
      {/* Flow Small */}
      <div className={styles.flowContSmall}>
        <div className={styles.pathTitleCont}>
          <h2>A simple path to better cash flow management</h2>
        </div>
        <div className={styles.flowStepCont}>
          <div className={styles.flowStepTop}>
            <h1>01</h1>
            <h3 className={styles.flowStepText}>
              <b>Schedule a consultation:</b>
            </h3>
          </div>
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
          <div className={styles.reapListCont}>
            <div className={styles.reapListItem}>
              <div className={styles.reapListItemCirc}>
                <svg height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                  <circle r="15" cx="15" cy="15" fill="#13315C" />
                </svg>
              </div>
              <div className={styles.reapListItemImg}>
                <Image
                  src={reapCheck}
                  alt="check mark"
                  unoptimized
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <div className={styles.reapListItemText}>
                <p>Free up time to concentrate on core business strategies</p>
              </div>
            </div>
            <div className={styles.reapListItem}>
              <div className={styles.reapListItemCirc}>
                <svg height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                  <circle r="15" cx="15" cy="15" fill="#13315C" />
                </svg>
              </div>
              <div className={styles.reapListItemImg}>
                <Image
                  src={reapCheck}
                  alt="check mark"
                  unoptimized
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <div className={styles.reapListItemText}>
                <p>
                  Ensure that your back office tasks are managed securely and
                  accurately
                </p>
              </div>
            </div>
            <div className={styles.reapListItem}>
              <div className={styles.reapListItemCirc}>
                <svg height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                  <circle r="15" cx="15" cy="15" fill="#13315C" />
                </svg>
              </div>
              <div className={styles.reapListItemImg}>
                <Image
                  src={reapCheck}
                  alt="check mark"
                  unoptimized
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <div className={styles.reapListItemText}>
                <p>Improve operational efficiency and reduce errors</p>
              </div>
            </div>
            <div className={styles.reapListItem}>
              <div className={styles.reapListItemCirc}>
                <svg height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                  <circle r="15" cx="15" cy="15" fill="#13315C" />
                </svg>
              </div>
              <div className={styles.reapListItemImg}>
                <Image
                  src={reapCheck}
                  alt="check mark"
                  unoptimized
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <div className={styles.reapListItemText}>
                <p>
                  Enjoy peace of mind knowing your cash flow isn’t lost in the
                  invoicing process
                </p>
              </div>
            </div>
            <div className={styles.reapListItem}>
              <div className={styles.reapListItemCirc}>
                <svg height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                  <circle r="15" cx="15" cy="15" fill="#13315C" />
                </svg>
              </div>
              <div className={styles.reapListItemImg}>
                <Image
                  src={reapCheck}
                  alt="check mark"
                  unoptimized
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <div className={styles.reapListItemText}>
                <p>
                  Delegate complex office management tasks and save valuable
                  time
                </p>
              </div>
            </div>
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
        <ContactForm isStandard={true} />
      </div>
      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
