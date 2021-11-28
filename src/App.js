import Home from "./pages/Home";
import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Service from "./pages/Service";
import cx from "classnames";
import About from "./pages/About";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <div className={styles.loadWrapper}>
          <span class={styles.loader}>
            <span class={styles.loaderInner}></span>
          </span>
        </div>
      ) : (
        <div className={cx(styles.container)}>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/service">
              <Service />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
