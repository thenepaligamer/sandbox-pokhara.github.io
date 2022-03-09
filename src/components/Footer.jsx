import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <footer className={styles.container}>
        <div className={styles.footerMain}>
          <p className={styles.footerText}>© 2021 Sandbox Software Pvt. Ltd. All Rights Reserved.</p>
        </div>
        {/* <ul className={styles.socialList}>
          <li className={styles.socialItem}>
            <a href="/" className={styles.socialLink}>
              <i className="fab fa-facebook fa-sm"></i>
            </a>
          </li>
          <li className={styles.socialItem}>
            <a href="/" className={styles.socialLink}>
              <i className="fab fa-instagram fa-sm"></i>
            </a>
          </li>
          <li className={styles.socialItem}>
            <a href="/" className={styles.socialLink}>
              <i className="fab fa-twitter fa-sm"></i>
            </a>
          </li>
        </ul> */}
      </footer>
    </div>
  );
}

export default Footer;
