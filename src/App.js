import Home from "./pages/Home";
import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Service from "./pages/Service";

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
