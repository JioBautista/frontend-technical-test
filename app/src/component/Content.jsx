import React from "react";
import styles from "../styles.module.scss";
import EventMarket from "./EventMarket";
import { useSelector, useDispatch } from "react-redux";
import { selectionAdded } from "../features/selectionSlice";

function Content() {
  const { data } = useSelector((store) => store.selection);

  console.log(data);
  return (
    <div>
      {data &&
        data.map((item) => (
          <>
            <div>
              <h1>{item.name}</h1>
              <EventMarket market={item.markets} />
            </div>
          </>
        ))}
    </div>
  );
}

export default Content;
