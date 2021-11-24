import React, { useRef, useState, useEffect } from "react";
import Logo from "../img/logov2.svg";
import cx from "classnames";
import styles from "./Navbar.module.css";
import useWindowDimensions from "../custom_hooks/useWindowDimensions";
import "./Custom.css";

function Navbar() {
  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowDimensions();

  const toggleNav = () => {
    if (isOpen) {
      buttonRef.current.classList.remove("open");
    } else {
      buttonRef.current.classList.add("open");
    }
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (width > 935) {
      buttonRef.current.classList.remove("open");
      // buttonRef.current.classList.add("notransition");
      setIsOpen(false);
    }
  }, [width]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logoContainer}>
            <a className={styles.logoLink} href="/">
              <img src={Logo} style={{ width: "100px", height: "30px" }} />
            </a>
          </div>
          <div
            className="menuBtn"
            ref={buttonRef}
            onClick={toggleNav}
            style={width > 935 ? { opacity: 0, visibility: "hidden" } : null}
          >
            <div className="menuBtnBurger"></div>
          </div>

          <nav
            className={cx(styles.nav, isOpen ? styles.fadeIn : styles.fadeOut)}
          >
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <a href="/" className={styles.navLink}>
                  Home
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="/work" className={styles.navLink}>
                  Work
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="/about" className={styles.navLink}>
                  About
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="/contact" className={styles.navLink}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <script></script>
    </div>
  );
}

export default Navbar;
