import React from "react";
import styles from "./Service.module.css";
import logoComputer from "../img/computer.gif";
import RpaImg from "../img/rap.jpg";
import MobileImg from "../img/Mobilev2.jpg";
import WebImg from "../img/web.jpg";
import cx from "classnames";

function Service() {
  const menuItems = [
    {
      img: RpaImg,
      title: "Computer Vision",
      description:
        "We focus on developing customized software using Robotic Process Automation(RPA). We provide services to create AI enabled bots as per users' requirements.",
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
          <section className={styles.hero}>
            <h1 className={styles.heroTitle}>Our Services</h1>
            <p className={styles.subtitle}>
              We have everything you need to take your business to the next
              level.
            </p>
          </section>
        </div>
        <section className={styles.cardContainer}>
          {menuItems.map((items) => (
            <div className={styles.card} key={items.title}>
              <div className={cx(styles.cardImgContainer)}>
                <img
                  src={items.img}
                  className={cx(
                    styles.cardImg,
                    items.title == "App Development"
                      ? styles.cardImgSecond
                      : null
                  )}
                ></img>
              </div>
              <div
                className={cx(
                  styles.cardContent,
                  items.title == "App Development" ? styles.cardOrder : null
                )}
              >
                <div className={styles.cardTitle}>{items.title}</div>
                <div className={styles.cardDescription}>
                  {items.description}
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Service;
