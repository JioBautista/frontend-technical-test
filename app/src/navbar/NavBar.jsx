import React from "react";
import styles from "./navbar.module.scss";

function NavBar() {
  return (
    <div className={styles.wrapper}>
      <h2>Sports Bet App</h2>
      <img src="/assets/icons8-menu-50.png" />
    </div>
  );
}

export default NavBar;
