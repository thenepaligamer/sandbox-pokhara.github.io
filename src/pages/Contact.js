import React, { useState } from "react";
import styles from "./Contact.module.css";
import gif from "../img/computer.gif";
import cx from "classnames";
import { useHistory } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
AOS.init();
// import "./ButtonCustom.css";

function Contact() {
  // const handleAnimation = (e) => {
  //   const buttons = document.getElementById("btn");

  //   let x = e.clientX - e.target.offsetLeft;
  //   let y = e.clientY - e.target.offsetTop;

  //   let ripples = document.createElement("span");
  //   ripples.style.left = x + "px";
  //   ripples.style.top = y + "px";
  //   buttons.appendChild(ripples);

  //   setTimeout(() => {
  //     ripples.remove();
  //   }, 1000);
  // };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({});
  const history = useHistory();
  const handleSubmit = (e) => {
    setError({});
    e.preventDefault();
    var err = {};
    if (name === "") {
      err["name"] = true;
    }
    if (email === "") {
      err["email"] = true;
    }
    if (phone === "") {
      err["phone"] = true;
    }
    if (message === "") {
      err["message"] = true;
    }
    setError(err);
    if (name && email && phone && message) {
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      toast.success("Data submitted", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
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
          <div className={styles.gifContainer}>
            <div className={styles.titleContainer}>
              <div className={styles.title}>Contact Us</div>
              <div className={styles.subtitle}>
                Please provide some information on yourself or your goals and
                we’ll move the conversation on from there.
              </div>
            </div>
          </div>
          <div className={styles.formContainer}>
            <div className={styles.formTitle}>
              Have an inquiry or some feedback for us? Fill out the form below
              to contact our team.
            </div>
            <form
              className={styles.forms}
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <div className={styles.formGroup}>
                <input
                  className={cx(
                    styles.inputs,
                    error.name ? styles.error : null
                  )}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
                <label for="name" className={styles.labels}>
                  Name
                </label>
              </div>

              <div className={styles.formWrapper}></div>
              <div className={styles.formGroup}>
                <input
                  className={cx(
                    styles.inputs,
                    error.email ? styles.error : null
                  )}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <label for="email" className={styles.labels}>
                  Email
                </label>
              </div>
              <div className={styles.formGroup}>
                <input
                  className={cx(
                    styles.inputs,
                    error.phone ? styles.error : null
                  )}
                  type="number"
                  id="phone"
                  name="phone"
                  placeholder="Phone no."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                ></input>
                <label for="phone" className={styles.labels}>
                  Phone number
                </label>
              </div>
              <div className={styles.formGroup}>
                <input
                  className={cx(
                    styles.inputs,
                    error.message ? styles.error : null
                  )}
                  type="text"
                  id="message"
                  name="messgae"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></input>
                <label for="message" className={styles.labels}>
                  Message
                </label>
              </div>
              <button id="btn" className={styles.btn}>
                Submit
              </button>
            </form>
          </div>
        </section>
        <section className={styles.locationSection}>
          <div className={styles.location}>
            <div className={styles.locationTitle}>Swing By</div>
            <div className={styles.locationCompanyName}>
              Sandbox Software Pvt Ltd.
            </div>
            <div className={styles.locationStreet}>Bhairab-tole, Pokhara-2</div>
          </div>
          <div className={styles.mail}>
            <div className={styles.mailTitle}>Reach Out</div>
            <div className={styles.mailAddress}>info@sandbox.com.np</div>
          </div>
          <div></div>
        </section>
      </main>
    </div>
  );
}

export default Contact;
