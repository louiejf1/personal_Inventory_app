import React from "react";
import "./DeleteBtn.css";

function UpdateBtn(props) {
  return (
    <span className="update-btn" {...props} role="button" tabIndex="0">
      Update
    </span>
  );
}

export default UpdateBtn;