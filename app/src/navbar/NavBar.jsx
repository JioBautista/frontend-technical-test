import React from "react";
import styles from "./navbar.module.scss";
import { useSelector } from "react-redux";

function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const selections = useSelector((state) => state.selection);

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
          {selections.map(items => (
            <p>{items}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default NavBar;
