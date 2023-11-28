import React from "react";
import styles from "../styles.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectionAdded } from "../features/selectionSlice";

function Content() {
  const data = useSelector((store) => store.selection);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(selectionAdded(e.target.value));
  };

  return (
    <div>
      {data &&
        data.map((item) => (
          <>
            <div>
              <h1>{item.name}</h1>
              {item.markets.map((item) => (
                <>
                  <div>
                    <h2>{item.name}</h2>
                    <div className={styles.selection}>
                      {item.selections.map((item) => (
                        <>
                          <button
                            value={`${item.price} ${item.name}`}
                            onClick={(e) => handleClick(e)}
                          >
                            {item.name} {item.price}
                          </button>
                        </>
                      ))}
                    </div>
                  </div>
                </>
              ))}
            </div>
          </>
        ))}
    </div>
  );
}

export default Content;
