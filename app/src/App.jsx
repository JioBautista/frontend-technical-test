import React from "react";
import styles from "./styles.module.scss";
import NavBar from "./navbar/NavBar";
import Content from "./component/Content";
import { useDispatch, useSelector } from "react-redux";

function App() {
  return (
    <div className={styles.wrapper}>
      <NavBar />
      <Content />
    </div>
  );
}

export default App;
