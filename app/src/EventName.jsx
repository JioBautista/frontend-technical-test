import React from "react";

function EventName({ children }) {
  return (
    <div style={{ border: "1px solid black", padding: "1rem 3rem" }}>
      {children}
    </div>
  );
}

export default EventName;
