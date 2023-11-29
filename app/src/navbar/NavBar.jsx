import React from "react";
import styles from "./navbar.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectionRemoved } from "../features/selectionSlice";

function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { amount } = useSelector((store) => store.selection);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  console.log(amount);
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
            <>
              <div className={styles.selected}>
                <p>
                  {item.name} {item.value}
                </p>
                <button onClick={() => dispatch(selectionRemoved(item.id))}>
                  Remove Selection
                </button>
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
}

export default NavBar;
