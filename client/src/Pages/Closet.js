import React, { useEffect, useState } from 'react';
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import Items from "../Components/ItemInfo";
import Weather from "../Components/Weather";
import { TableCloset } from "../Components/Table";
import API from "../Utils/API.js";
import Search from "../Components/Search";


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

  const handleSearch = (data) => {
    // console.log(data)
    return (
      searchVariable = data
    )
  }

  let searchVariable = "closet"
  console.log(searchVariable)

  return (

    <div className="MainClosetDiv">
      <div className="container-fluid">
        <div className="row">
          <Search onChange={handleSearch} />
          <div className="col-sm dashboard-col">
            <h3>Weather data card(s)</h3>
            <Weather />
          </div>
        </div>
        <div>
          <Button />
        </div>
        <TableCloset items={items} category={searchVariable} />
        {/* {generateTable(items)} */}

      </div>
    </div>


  );
}
