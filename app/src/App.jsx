import React from "react";
import styles from "./styles.module.scss"
import NavBar from "./navbar/NavBar";
import Event from "./Event";

function App() {
  return (
    <div className={styles.wrapper}>
      <NavBar />
      <Event />
    </div>
  );
}

export default App;
