import AOS from "aos";
import "aos/dist/aos.css";
import cx from "classnames";
import React from "react";
import AWS from "../img/awsv2.png";
import Django from "../img/djangov2.png";
import Docker from "../img/dockerv2.png";
import MongoDB from "../img/mongodbv2.png";
import Postgre from "../img/postgrev2.png";
import Python from "../img/pythonv2.png";
import ReactNative from "../img/reactnativev2.png";
import ReactLogo from "../img/reactv2.png";
import Tensorflow from "../img/tensorflowv2.png";
import styles from "./Home.module.css";
AOS.init();

function Home() {
  return (
    <div>
      <div className={styles.mainContainer}>
        <main
          className={cx(styles.container)}
          data-aos="fade-in"
          data-aos-offset="300"
          data-aos-delay="50"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
        >
          <section className={styles.hero}>
            <h1 className={styles.heroTitle}>We are Sandbox</h1>
            <p className={styles.subtitle}>We build our softwares over time, with a plan.</p>
          </section>
          <section className={styles.info}>
            <div>
              <h1 className={styles.infoTitle}>What we do</h1>
            </div>
            <div className={styles.serviceContainer}>
              <div className={styles.serviceDuelist}>
                <div className={styles.serviceItems}>
                  <div
                    className={styles.serviceIcons}
                    style={{
                      background: "linear-gradient(45deg, #84E4B1, #D7F6B4)",
                    }}
                  >
                    <i class="fas fa-mobile-alt fa-2x"></i>
                  </div>
                  <div className={styles.serviceDescription}>App Development</div>
                </div>
                <div className={styles.serviceItems}>
                  <div
                    className={styles.serviceIcons}
                    style={{
                      background: "linear-gradient(45deg, #a39cf4, #D9C6FD)",
                    }}
                  >
                    <i class="fas fa-blog fa-2x"></i>
                  </div>
                  <div className={styles.serviceDescription}>Web Development</div>
                </div>
              </div>
              <div className={styles.serviceDuelist}>
                <div className={styles.serviceItems}>
                  <div
                    className={styles.serviceIcons}
                    style={{
                      background: "linear-gradient(45deg, #FFB5E8, #FFD6E6)",
                    }}
                  >
                    <i class="fab fa-figma fa-2x"></i>
                  </div>
                  <div className={styles.serviceDescription}>UI/UX</div>
                </div>
                <div className={styles.serviceItems}>
                  <div
                    className={styles.serviceIcons}
                    style={{
                      background: "linear-gradient(45deg, #ff9d97, #FFCDBA)",
                    }}
                  >
                    <i class="fas fa-digital-tachograph fa-2x"></i>
                  </div>
                  <div className={styles.serviceDescription}>Digital Marketing/SEO</div>
                </div>
              </div>
              <div className={styles.serviceDuelist}>
                <div className={styles.serviceItems}>
                  <div
                    className={styles.serviceIcons}
                    style={{
                      background: "linear-gradient(45deg, #ffc48a, #FFE9B4)",
                    }}
                  >
                    <i class="fas fa-desktop fa-2x"></i>
                  </div>
                  <div className={styles.serviceDescription}>Computer Vision/RPA</div>
                </div>
                <div className={styles.serviceItems}>
                  <div
                    className={styles.serviceIcons}
                    style={{
                      background: "linear-gradient(45deg, #9EBBFC, #A8DFF2)",
                    }}
                  >
                    <i class="fas fa-robot fa-2x"></i>
                  </div>
                  <div className={styles.serviceDescription}>Artificial Intelligence</div>
                </div>
              </div>
            </div>
          </section>
          <section
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-delay="50"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
          >
            <div className={styles.expertiseDescription}>
              <h1 className={styles.expertiseTitle}>Expertise</h1>
              <p className={styles.expertiseDetails}>
                We have expertise in all essential technology and can adapt product to meet users'
                needs.
              </p>
            </div>
            <div className={styles.expertise}>
              <div>
                <div className={styles.expertiseReact}>
                  <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                    <img src={ReactLogo} alt="react" title="react" />
                  </a>
                </div>
              </div>
              <div>
                <div className={styles.expertiseDjango}>
                  <a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer">
                    <img
                      src={Django}
                      alt="django"
                      title="django"
                      className={styles.expertiseIcon}
                    />
                  </a>
                </div>
                <div className={styles.expertisePython}>
                  <a href="https://www.python.org/" target="_blank" rel="noreferrer">
                    <img
                      src={Python}
                      alt="python"
                      title="python"
                      className={styles.expertiseIcon}
                    />
                  </a>
                </div>
              </div>
              <div>
                <div className={styles.expertiseDocker}>
                  <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
                    <img
                      src={Docker}
                      alt="docker"
                      title="docker"
                      className={styles.expertiseIcon}
                    />
                  </a>
                </div>
                <div className={styles.expertiseAws}>
                  <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer">
                    <img src={AWS} alt="aws" title="aws" />
                  </a>
                </div>
                <div className={styles.expertisePostgres}>
                  <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">
                    <img
                      src={Postgre}
                      alt="postgresql"
                      title="postgresql"
                      className={styles.expertiseIcon}
                    />
                  </a>
                </div>
              </div>
              <div>
                <div className={styles.expertiseTensorflow}>
                  <a href="https://www.tensorflow.org/" target="_blank" rel="noreferrer">
                    <img
                      src={Tensorflow}
                      alt="tensorflow"
                      title="tensorflow"
                      className={styles.expertiseIcon}
                    />
                  </a>
                </div>
                <div className={styles.expertiseMongodb}>
                  <a href="https://www.mongodb.org/" target="_blank" rel="noreferrer">
                    <img
                      src={MongoDB}
                      alt="mongoDB"
                      title="mongoDB"
                      className={styles.expertiseIcon}
                    />
                  </a>
                </div>
              </div>
              <div>
                <div className={styles.expertiseReactnative}>
                  <a href="https://reactnative.dev/" target="_blank" rel="noreferrer">
                    <img
                      src={ReactNative}
                      alt="react-native"
                      title="react-native"
                      className={styles.expertiseIcon}
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Home;
