import React from 'react'
import Footer from "../Components//Footer";
import Update from "../Components/update"


export default function additem() {

    return (
        <div className="MainCollectablesDiv">
        <div className="container-fluid">
          <div>
            <Update />
          </div>
        </div>
        <Footer />
      </div>
    )
}