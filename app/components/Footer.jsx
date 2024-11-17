"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { client } from "../../sanity/lib/client";

import Logo from "../../public/envisionLogoTall.png";

import styles from "./Footer.module.css";

const Footer = () => {
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const INFO_DATA_QUERY = `*[_type == "info"]{Phone_number, Email}`;

  useEffect(() => {
    const fetchInfo = async () => {
      setLoading(true);
      const fetchedInfo = await client.fetch(INFO_DATA_QUERY);
      setInfo(fetchedInfo[0]);
      setLoading(false);
    };

    fetchInfo();
  }, [INFO_DATA_QUERY]);
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
            <p>{info.Phone_number}</p>
            <p>{info.Email}</p>
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
