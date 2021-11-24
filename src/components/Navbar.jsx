import React, { useRef, useState, useEffect } from "react";
import Logo from "../img/logov2.svg";
import cx from "classnames";
import styles from "./Navbar.module.css";
import useWindowDimensions from "../custom_hooks/useWindowDimensions";
import "./Custom.css";
import { Link, NavLink, useHistory } from "react-router-dom";

function Navbar() {
  const buttonRef = useRef(null);
  const logoRef = useRef(null);
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowDimensions();

  const toggleNav = () => {
    if (isOpen) {
      buttonRef.current.classList.remove("open");
      logoRef.current.style.visibility = "visible";
    } else {
      buttonRef.current.classList.add("open");
      logoRef.current.style.visibility = "hidden";
    }
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (width > 935) {
      buttonRef.current.classList.remove("open");
      logoRef.current.style.visibility = "visible";
      buttonRef.current.classList.add("notransition");
      setIsOpen(false);
    }
  }, [width]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logoContainer}>
            <Link className={styles.logoLink} to="/">
              <img
                src={Logo}
                style={{ width: "100px", height: "30px" }}
                ref={logoRef}
              />
            </Link>
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
                <Link to="/" className={styles.navLink}>
                  Home
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/work" className={styles.navLink}>
                  Work
                </Link>
              </li>
              <li className={styles.navItem}>
                <NavLink to="/about" className={styles.navLink}>
                  About
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <Link to="/contact" className={styles.navLink}>
                  Contact
                </Link>
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
