import React from "react";
import Logo from "../img/logo.svg";
import styles from "classnames";

function Navbar() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <a className={styles.logoLink} href="/">
            <img src={Logo} style={{ width: "20px", height: "20px" }} />
          </a>
          <nav className={styles.nav}>
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
                <a href="/expertise" className={styles.navLink}>
                  Expertise
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
    </div>
  );
}

export default Navbar;
