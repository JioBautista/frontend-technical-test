import React from "react";
import data from "./data/data.json";
import styles from "./styles.module.scss";
import NavBar from "./navbar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { selectionAdded } from "./features/selectionSlice";

function App() {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(selectionAdded(e.target.value));
  };
  return (
    <div className={styles.wrapper}>
      <NavBar />
      {data.map((items) => {
        return (
          // PARENT CONTAINER EVENT NAME
          <div className={styles.event}>
            <div className={styles.title}>
              <h1>{items.name}</h1>
            </div>

            {items.markets.map((items) => {
              return (
                <>
                  {/* CHILD CONTAINER MARKET NAME */}
                  <div className={styles.market}>
                    <h2>{items.name}</h2>

                    {/* SELECTION DIV */}
                    <div className={styles.selection}>
                      {items.selections.map((items) => {
                        return (
                          <>
                            <button
                              value={`${items.price} ${items.name}`}
                              onClick={(e) => handleClick(e)}
                            >
                              {items.name} {items.price}
                            </button>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default App;
