import React from "react";
import styles from "./navbar.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  selectionRemoved,
  addValue,
  minusValue,
} from "../features/selectionSlice";

function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [betAmount, setBetAmount] = React.useState("");
  const { amount } = useSelector((store) => store.selection);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    setBetAmount(e.target.value);
  };

  console.log(betAmount);
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
                <h3>
                  {item.name} {item.value}
                </h3>
                <div className={styles.options}>
                  <button onClick={() => dispatch(selectionRemoved(item.id))}>
                    Remove
                  </button>
                  <button onClick={() => dispatch(addValue(item.id))}>
                    Add
                  </button>
                  <button onClick={() => dispatch(minusValue(item.id))}>
                    Sub
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
}

export default NavBar;
