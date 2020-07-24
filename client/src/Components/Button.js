import React from "react";

export default function Button(props) {
  return (
    <div>
      <div className="btn-group" role="group" aria-label="Basic example">

        <button type="submit" className="btn">

          {props.buttonName}
        </button>
      </div>
    </div>
  );
}
