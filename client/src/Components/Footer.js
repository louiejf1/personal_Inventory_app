import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="card footer fixed-bottom">
        <div className="card-body">
          <h5 style={{ fontSize: "10px" }}>© 2020</h5>
          <h6 style={{ fontSize: "10px" }}>User Story | About Us | UCR Bootcamp</h6>
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