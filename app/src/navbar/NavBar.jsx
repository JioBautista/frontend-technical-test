import React from "react";
import styles from "./navbar.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { decreaseSelection } from "../features/selectionSlice";

function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();

  const selections = useSelector((store) => store.selection);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (e) => {
    dispatch(decreaseSelection(e.target.value));
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
          {selections.map((items) => (
            <button>{items}</button>
          ))}
        </div>
      )}
    </div>
  );
}

export default NavBar;
