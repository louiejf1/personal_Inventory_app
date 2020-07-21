import React from "react";
import Footer from "../Components//Footer";
import Button from "../Components/Button";
import Items from "../Components/ItemInfo"

export default function Collectables() {
  return (
    <div className="MainCollectablesDiv">
      <div className="container-fluid">
        <div>
          <Button />
        </div>
        <div>
          <Items />
        </div>
      </div>

    </div>
  );
}
