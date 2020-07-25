import React, { useEffect, useState } from 'react';
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import Items from "../Components/ItemInfo";
import Weather from "../Components/Weather";
import { TableCloset } from "../Components/Table";
import API from "../Utils/API.js"


export default function Closet() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadCloset()
  }, [])

  const loadCloset = () => {
    API.getinventoryItems()
      .then(res => { return setItems(res.data) })
    // need to filter either the API call or the data res to only display closet items
  }





  return (

    <div className="MainClosetDiv">
      <div className="container-fluid">
        <div class="row">
          <div class="col-sm dashboard-col">
            <Weather />
          </div>
          <div class="col-sm dashboard-col">
            <Weather />
          </div>
          <div class="col-sm dashboard-col">
            <Weather />
          </div>
        </div>
        <div>
          <Button />
        </div>
        <TableCloset items={items} category={"closet"} />
        {/* {generateTable(items)} */}

      </div>
    </div>


  );
}
