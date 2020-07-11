import React from 'react'
import Footer from "../Components//Footer";
import Button from "../Components/Button";
import Items from "../Components/ItemInfo"

export default function Closet() {
  return (
    <div className="MainClosetDiv">
      <div className="container-fluid">
        <div>
          <Button />
        </div>
        <div>
         <Items/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

