import React from 'react'
import Footer from "../Components//Footer";
import Button from "../Components/Button";
import TableCloset from "../Components/TableCloset"

export default function Closet() {
  return (
    <div className="MainClosetDiv">
      <div className="container-fluid">
        <div>
          <Button />
        </div>
        <div>
         <TableCloset />
        </div>
      </div>
      <Footer />
    </div>
  );
}

