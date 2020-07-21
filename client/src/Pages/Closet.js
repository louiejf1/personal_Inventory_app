import React from "react";
import Footer from "../Components//Footer";
import Button from "../Components/Button";
import Items from "../Components/ItemInfo";
import Weather from "../Components/Weather";

export default function Closet() {
  return (

    <div className="MainClosetDiv">
      <div className="container-fluid">
        <div class="row">
          <div class="col-sm dashboard-col">
            <h3>Weather data card(s)</h3>
            <Weather />
          </div>
        </div>
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
