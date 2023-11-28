import React from "react";
import EventSelection from "./EventSelection";

function EventMarket({ market }) {
  return (
    <div>
      {market.map((items) => (
        <>
          <h2>{items.name}</h2>
          <EventSelection selection={items.selections} />
        </>
      ))}
    </div>
  );
}

export default EventMarket;
