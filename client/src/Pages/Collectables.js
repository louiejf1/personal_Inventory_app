import React from "react";
import Footer from "../Components//Footer";
import Button from "../Components/Button";
import TableCollectibles from "../Components/TableCollectibles"

export default function Collectables() {
  return (
    <div className="MainCollectablesDiv">
      <div className="container-fluid">
        <div>
          <Button />
        </div>
        <div>
         <TableCollectibles />
        </div>
      </div>
      <Footer />
    </div>
  );
}
