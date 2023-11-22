import React from "react";
import data from "./data/data.json";
import styles from "./styles.module.scss";
import NavBar from "./navbar/NavBar";

function App() {
  return (
    <div className={styles.wrapper}>
      <NavBar />
      {data.map((items) => {
        return (
          // PARENT CONTAINER EVENT NAME
          <div>
            <div>
              <h1>{items.name}</h1>
            </div>

            {items.markets.map((items) => {
              return (
                <>
                {/* CHILD CONTAINER MARKET NAME */}
                  <div>
                    <h2>{items.name}</h2>

                    {items.selections.map((items) => {
                      return (
                        <>
                        {/* GRANDCHILD CONTAINER SELECTION COMPONENT */}
                          <div>
                            <button>
                              {items.name} {items.price}
                            </button>
                          </div>
                        </>
                      );
                    })}
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
