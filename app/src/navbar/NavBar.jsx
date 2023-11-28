import React from "react";
import styles from "./navbar.module.scss";
import { useSelector, useDispatch } from "react-redux";

function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { amount } = useSelector((store) => store.selection);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.wrapper}>
      <h2>Sports Bet App</h2>
      <img src="/assets/icons8-menu-50.png" onClick={() => toggleMenu()} />

      {isOpen && (
        <div className={styles.selection}>
          <img
            src="public/assets/icons8-close-30.png"
            onClick={() => toggleMenu()}
          />
          <h2>Your Selections</h2>
          {amount.map((item) => (
            <p>{item}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default NavBar;
