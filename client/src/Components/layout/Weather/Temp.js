import React from "react";

export default function Temp(props) {
  return (
    <div>
      <h3 className="temp">
        Temp:
        {props.temp} °F
      </h3>
    </div>
  );
}
