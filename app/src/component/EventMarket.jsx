import React from "react";
import styles from "../styles.module.scss";
import { useDispatch } from "react-redux";
import { selectionAdded } from "../features/selectionSlice";

function EventMarket({ market }) {
  const dispatch = useDispatch();
  return (
    <div>
      {market.map((items) => (
        <>
          <h2>{items.name}</h2>

          <div className={styles.selection}>
            {items.selections.map((items) => (
              <button
                onClick={(e) =>
                  dispatch(
                    selectionAdded({
                      id: items.id,
                      value: items.price,
                      name: items.name,
                    })
                  )
                }
              >
                {items.name} {items.price}
              </button>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}

export default EventMarket;
