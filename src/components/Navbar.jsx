import cx from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useWindowDimensions from "../custom_hooks/useWindowDimensions";
import Logo from "../img/logov2.svg";
import "./Custom.css";
import styles from "./Navbar.module.css";

function Navbar() {
  const buttonRef = useRef(null);
  const logoRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowDimensions();

  const toggleNav = () => {
    if (width <= 935) {
      setIsOpen((prev) => !prev);
      if (isOpen) {
        document.body.classList.remove("lockScroll");
        buttonRef.current.classList.remove("open");
        logoRef.current.style.visibility = "visible";
      } else {
        buttonRef.current.classList.add("open");
        document.body.classList.add("lockScroll");
        logoRef.current.style.visibility = "hidden";
      }
    }
  };

  useEffect(() => {
    if (width > 935) {
      buttonRef.current.classList.remove("open");
      logoRef.current.style.visibility = "visible";
      buttonRef.current.classList.add("notransition");
      document.body.classList.remove("lockScroll");
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
                alt="sandbox-logo"
                src={Logo}
                ref={logoRef}
                style={{ width: "100px", height: "30px" }}
              />
            </Link>
          </div>
          <div
            className="menuBtn"
            ref={buttonRef}
            onClick={width < 935 ? toggleNav : null}
            style={width > 935 ? { opacity: 0, visibility: "hidden" } : null}
          >
            <div className="menuBtnBurger"></div>
          </div>

          <nav className={cx(styles.nav, isOpen ? styles.fadeIn : styles.fadeOut)}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <NavLink
                  exact
                  to="/"
                  className={styles.navLink}
                  activeClassName={width >= 935 ? "activeNav" : "passiveNav"}
                  onClick={toggleNav}
                >
                  Home
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink
                  to="/service"
                  className={styles.navLink}
                  onClick={toggleNav}
                  activeClassName={width >= 935 ? "activeNav" : "passiveNav"}
                >
                  Service
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink
                  to="/about"
                  className={styles.navLink}
                  onClick={toggleNav}
                  activeClassName={width >= 935 ? "activeNav" : "passiveNav"}
                >
                  About
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink
                  to="/contact"
                  className={styles.navLink}
                  onClick={toggleNav}
                  activeClassName={width >= 935 ? "activeNav" : "passiveNav"}
                >
                  Contact
                </NavLink>
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
