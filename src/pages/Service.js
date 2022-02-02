import AOS from "aos";
import "aos/dist/aos.css";
import cx from "classnames";
import React from "react";
import useWindowDimensions from "../custom_hooks/useWindowDimensions";
import MobileImg from "../img/Mobilev2.jpg";
import RpaImg from "../img/rap.jpg";
import WebImg from "../img/web.jpg";
import styles from "./Service.module.css";
AOS.init();

function Service() {
  const { width } = useWindowDimensions();
  const menuItems = [
    {
      img: RpaImg,
      title: "Computer Vision",
      description:
        "Computer vision projects translate digital visual content into explicit descriptions to gather multi-dimensional data. This data is then turned into computer-readable language to aid the decision-making process. We devleop easy-to-use applications by using computer vision.",
    },
    {
      img: MobileImg,
      title: "App Development",
      description:
        "We create mobile apps that offer personalization and efficiency, along with other exclusive features that's just right for your business!",
    },
    {
      img: WebImg,
      title: "Web Development",
      description:
        "We take your ideas and turn them into reality by building one of the finest websites and web apps for you.",
    },
  ];
  return (
    <div className={styles.container}>
      <main className={styles.mainContainer}>
        <div className={styles.gifFlexContainer}>
          <section
            className={styles.hero}
            data-aos="fade-in"
            data-aos-offset="300"
            data-aos-delay="50"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
          >
            <h1 className={styles.heroTitle}>Our Services</h1>
            <p className={styles.subtitle}>
              We have everything you need to take your business to the next level.
            </p>
          </section>
        </div>
        <section className={styles.cardContainer}>
          {menuItems.map((items, index) => (
            <div
              className={cx(styles.card)}
              key={items.title}
              data-aos={
                width < 875
                  ? "fade-up"
                  : width > 875 && index % 2 === 0
                  ? "fade-right"
                  : "fade-left"
              }
              data-aos-duration="1000"
              data-aos-offset="300"
              data-aos-easing="ease-in-out"
            >
              <div className={cx(styles.cardImgContainer)}>
                <img
                  alt={items.title}
                  src={items.img}
                  className={cx(
                    styles.cardImg,
                    items.title === "App Development" ? styles.cardImgSecond : null
                  )}
                ></img>
              </div>
              <div className={cx(styles.cardContent, index % 2 !== 0 ? styles.cardOrder : null)}>
                <div className={styles.cardTitle}>{items.title}</div>
                <div className={styles.cardDescription}>{items.description}</div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Service;
