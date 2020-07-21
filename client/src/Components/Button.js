import React from "react";

export default function Button(props) {
  return (
    <div>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type={props.type} onClick={props.onClick} className="btn btn-secondary">
          {props.buttonName}
        </button>
      </div>
    </div>
  );
}
