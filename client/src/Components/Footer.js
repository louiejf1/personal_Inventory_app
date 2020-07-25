import React from "react";

export default function Footer() {
  return (
    <div style={style}>
      <div className="card footer">
        <div className="card-header">© 2020</div>
        <div className="card-body">
          <p className="card-text">Find your stuff !!!</p>
        </div>
      </div>
    </div>
  );
}

const style = {
  width: "100%",
  borderTop: "5px solid orange",
  position: "relative",
  left: "0",
  bottom: "0",
  color: "black",
  clear: "both",
}