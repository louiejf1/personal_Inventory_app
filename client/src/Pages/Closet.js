import React, { useEffect, useState } from 'react';
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import Items from "../Components/ItemInfo";
import Weather from "../Components/Weather";
import TableCloset from "../Components/TableCloset";
import API from "../Utils/API.js";
import Search from "../Components/Search";

export default function Closet() {
  const [item, setItem] = useState({});
  useEffect(() => { API.getClosets().then(item => { setItem(item.data) }) })

  const closetSearch = (data) => {
    console.log(data)

  }

  return (

    <div className="MainClosetDiv">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm dashboard-col">
            <Search onChange={closetSearch} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm dashboard-col">
            <h3>Weather data card(s)</h3>
            <Weather />
          </div>
        </div>
        <div>
          <Button />
        </div>
        <TableCloset
          items={item}
        />
      </div>
    </div>


  );
}
