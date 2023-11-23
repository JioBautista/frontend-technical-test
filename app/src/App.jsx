import React from "react";
import data from "./data/data.json";
import styles from "./styles.module.scss";
import NavBar from "./navbar/NavBar";

function App() {
  const [selectValue, setSelectValue] = React.useState("");

  const handleClick = (e) => setSelectValue(e.target.value);

  console.log(selectValue);
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
                              value={items.price}
                              onClick={() => handleClick()}
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
      <button className={styles.submitbtn}>Submit</button>
      <div>
        <h1>Your selection</h1>
      </div>
    </div>
  );
}

export default App;
