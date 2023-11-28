import React from "react";
import styles from "../styles.module.scss";
import { useDispatch } from "react-redux";
import { selectionAdded } from "../features/selectionSlice";

function EventSelection({ selection }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.selection}>
      {selection.map((items) => (
        <button
          value={`${items.name} ${items.price}`}
          onClick={(e) => dispatch(selectionAdded(e.target.value))}
        >
          {items.name} {items.price}
        </button>
      ))}
    </div>
  );
}

export default EventSelection;
