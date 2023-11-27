import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectionAdded } from "../features/selectionSlice";

function Content() {
  const data = useSelector((store) => store.selection);
  const dispatch = useDispatch();

  const handleClick = (name, price) => {
    dispatch(selectionAdded({ name, price }));
  };

  const renderEvent = data.map((item) => (
    <div key={item.id}>
      <h1>{item.name}</h1>
      {item.markets.map((item) => (
        <>
          <div key={item.id}>
            <h2>{item.name}</h2>
            {item.selections.map((item) => (
              <>
                <div>
                  <button>
                    {item.name} {item.price}
                  </button>
                </div>
              </>
            ))}
          </div>
        </>
      ))}
    </div>
  ));

  console.log(data);
  return <div>{renderEvent}</div>;
}

export default Content;
