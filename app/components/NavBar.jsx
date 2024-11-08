"use client";

import styles from "./NavBar.module.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../../public/logoHero.png";
import Image from "next/image";

const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [navIcon, setNavIcon] = useState(`${styles.navicon4}`);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
    if (showNavbar) {
      return setNavIcon(`${styles.navicon4}`);
    } else {
      return setNavIcon(`${styles.navicon4open}`);
    }
  };

  const [header, setHeader] = useState(`${styles.header}`);

  const listenScrollEvent = () => {
    if (window.scrollY < 73) {
      return setHeader(`${styles.header}`);
    } else if (window.scrollY > 70) {
      return setHeader(`${styles.header2}`);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <header>
      <nav>
        <div className={header}>
          <div className="container mx-auto px-3 h-full w-full">
            <div className="flex justify-between items-center h-full w-full">
              <div className="flex flex-row items-center gap-1">
                <div className={styles.navLogoCont}>
                  <Link href="/">
                    <Image
                      src={Logo}
                      alt="logo for navagation bar"
                      layout="fill"
                      objectFit="contain"
                      unoptimized
                    ></Image>
                  </Link>
                </div>
              </div>
              {/* <div className={styles.headerLinkContainer}>
                                <a href="tel:+7207223357">720-722-3357</a>
                            </div> */}

              <ul className="hidden sm:flex text-black text-center items-center">
                <li className="mx-3 text-center items-center justify-center">
                  <Link href="/">
                    <p className="text-xl">Home</p>
                  </Link>
                </li>
                <li className="mx-3 text-center items-center justify-center">
                  <Link href="/about">
                    <p>About</p>
                  </Link>
                </li>
                <li className="mx-3 text-center items-center justify-center">
                  <Link href="/services">
                    <p>Services</p>
                  </Link>
                </li>
                <li className="mx-3 text-center items-center justify-center">
                  <Link href="/blog">
                    <p>Blog</p>
                  </Link>
                </li>
                <li className="mx-3 text-center items-center justify-center">
                  <Link href="/contact">
                    <p>Contact</p>
                  </Link>
                </li>
              </ul>

              <div
                className="flex sm:hidden white w-[100px]"
                onClick={handleShowNavbar}
              >
                <div className={navIcon}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div
                className={
                  showNavbar ? styles.navelementsactive : styles.navelements
                }
              >
                <nav>
                  <ul>
                    <li>
                      <Link
                        href="/"
                        className={styles.navMenuLink}
                        onClick={handleShowNavbar}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        className={styles.navMenuLink}
                        onClick={handleShowNavbar}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services"
                        className={styles.navMenuLink}
                        onClick={handleShowNavbar}
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        className={styles.navMenuLink}
                        onClick={handleShowNavbar}
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className={styles.navMenuLink}
                        onClick={handleShowNavbar}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
