import Image from "next/image";

import Logo from "../../public/envisionLogoWide.png";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footerCont}>
        <div className={styles.footerTopCont}>
          <div className={styles.footerLogoCont}>
            <Image
              src={Logo}
              alt="logo"
              layout="fill"
              objectFit="contain"
              unoptimized
            ></Image>
          </div>
          <div className={styles.footerContactCont}>
            <p>111-111-1111</p>
            <p>email@gmail.com</p>
          </div>
        </div>
        <div className={styles.footerBottomCont}>
          <p>
            &copy; {new Date().getFullYear()} Envision Administrative Services
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
