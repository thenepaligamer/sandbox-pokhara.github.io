import React from "react";
import styles from "./About.module.css";
import Computer from "../img/pc.jpg";
import cx from "classnames";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function About() {
  return (
    <div
      className={styles.container}
      data-aos="fade-in"
      data-aos-offset="300"
      data-aos-delay="50"
      data-aos-duration="700"
      data-aos-easing="ease-in-out"
    >
      <main className={styles.mainContainer}>
        <section className={styles.hero}>
          <div className={styles.titleContainer}>
            <div className={styles.details}>Who we are!</div>
            <div className={styles.title}>About Us</div>
            <div className={styles.subtitle}>
              Sandbox is a software development firm comprising of the most
              talented, dedicated and ambitious pool of engineers with expertise
              in consulting services and application development for businesses
              to optimize efficiency and productivity using cutting-edge
              technologies.
            </div>
          </div>
          <div className={styles.imgContainer}>
            <img
              src={Computer}
              className={styles.img}
              data-aos="fade-in"
              data-aos-offset="300"
              data-aos-delay="50"
              data-aos-duration="700"
              data-aos-easing="ease-in-out"
            ></img>
          </div>
        </section>
        <section className={styles.info}>
          <div className={styles.infoTitle}>Why Us?</div>
          <div className={styles.cardContainer}>
            <div className={cx(styles.card, styles.cardOne)}>
              <div
                className={styles.icon}
                style={{ backgroundColor: "#ffbde8" }}
              >
                <i class="fas fa-bullseye fa-2x"></i>
              </div>
              <div className={styles.cardTitle}>Our Mission</div>
              <div className={styles.cardDescription}>
                To deliver innovative and reliable solutions to meet our clients
                needs with utmost quality and unwavering ethics with the help of
                our dedicated and talented engineers.
              </div>
            </div>
            <div className={cx(styles.card, styles.cardTwo)}>
              <div
                className={styles.icon}
                style={{ backgroundColor: "#B4A9F7" }}
              >
                <i class="fas fa-glasses fa-2x"></i>
              </div>
              <div className={styles.cardTitle}>Our Vision</div>
              <div className={styles.cardDescription}>
                Skilled and enthusiastic team of developers and engineers
                embrace a futuristic vision of growing into a trusted IT
                consultant and developers in Pokhara valley and beyond.
              </div>
            </div>

            <div className={cx(styles.card, styles.cardThree)}>
              <div
                className={styles.icon}
                style={{ backgroundColor: "#A1C5FA" }}
              >
                <i class="fas fa-mortar-pestle fa-2x"></i>
              </div>
              <div className={styles.cardTitle}>Our Culture</div>
              <div className={styles.cardDescription}>
                We love to build products. We are passionate about research and
                open to unorthodox strategies. We value building relationships
                with our clients and community.
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
