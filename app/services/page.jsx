import Image from "next/image";

import styles from "./styles.module.css";

import hero from "../../public/servicesHero.jpg";

import ScheduleButton from "../components/ScheduleButton";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroCont}>
          <div className={styles.heroLogo}>
            <h1>Services</h1>
            <ScheduleButton isCenter={true} />
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
      {/* Streamline */}
      <div className={styles.streamlineCont}>
        <h3>Streamline Operations, Optimize Cash Flow</h3>
        <p>
          Small business owners often juggle countless daily back office
          operational and accounting tasks, draining time that should be spent
          on strategic growth. Envision Administrative Services transforms these
          administrative burdens into streamlined processes, helping you focus
          on what truly matters: growing your business and achieving work-life
          balance.
        </p>
        <ScheduleButton isCenter={true} />
      </div>
      {/* Services */}
      <div className={styles.servicesCont}>
        <div className={styles.serviceItem}>
          <h2>Accounts Payable Management</h2>
          <h3>Efficient Payments, Less Stress</h3>
          <p>
            Managing vendor payments shouldn&apos;t consume your valuable time.
            We handle all aspects of accounts payable, from contract review to
            payment processing, ensuring timely payments while maintaining
            accurate records. This comprehensive management gives you clarity on
            your cash position and frees your time for strategic business
            decisions.
          </p>
          <div className={styles.btnCont}>
            <ScheduleButton isCenter={true} />
          </div>
        </div>
        <div className={styles.serviceItem}>
          <h2>Accounts Receivable Management</h2>
          <h3>Strengthen Your Financial Foundation</h3>
          <p>
            Delayed payments and complex collection processes can strain your
            cash flow and operations. Our streamlined accounts receivable
            management ensures consistent payment collection and improved cash
            flow, giving you the financial stability needed to focus on growth
            opportunities rather than chasing payments.
          </p>
          <div className={styles.btnCont}>
            <ScheduleButton isCenter={true} />
          </div>
        </div>
        <div className={styles.serviceItem}>
          <h2>Consultation and Advisory</h2>
          <h3>Expert Guidance for Growth</h3>
          <p>
            Making informed back office and operational decisions is crucial for
            business success. Our consultation services provide expert guidance
            on process improvement and accounting planning, helping you navigate
            challenges and identify opportunities for sustainable growth.
          </p>
          <div className={styles.btnCont}>
            <ScheduleButton isCenter={true} />
          </div>
        </div>
        <div className={styles.serviceItem}>
          <h2>Special Projects</h2>
          <h3>Customized Solutions for Your Business</h3>
          <p>
            Need expert support for specific operational initiatives? We don&apos;t
            just execute tasks—we take full ownership of special projects from
            planning through completion. Our team ensures deadlines are met and
            resources are used effectively, giving you peace of mind and proven
            results.<br/> <br/> Schedule a free consultation to discover how we can
            transform your operations and optimize your cash flow.
          </p>
          <div className={styles.btnCont}>
            <ScheduleButton isCenter={true} />
          </div>
        </div>
      </div>
      {/* Contact */}
      <div>
        <ContactForm isStandard={true}/>
      </div>
      {/* Footer */}
      <div>
        <Footer/>
      </div>
    </div>
  );
}
