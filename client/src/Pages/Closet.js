import React, { useEffect, useState } from 'react';
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import Items from "../Components/ItemInfo";
import Weather from "../Components/Weather";
import { TableCloset} from "../Components/Table";
import API from "../Utils/API.js"
import axios from "axios"


export default function Closet() {
  const[items,setItems]=useState([]);

useEffect(()=>{
  loadCloset()
},[])

const loadCloset = () =>{
  API.getinventoryItems()
  .then(res=>{ return setItems(res.data)})
  // need to filter either the API call or the data res to only display closet items
}


    
  

  return (
    <div>
    <div className="MainClosetDiv">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm dashboard-col">
            <h3>Weather data card(s)</h3>
            <Weather />
          </div>
        </div>
    <div className="row col-sm-12">
  <TableCloset items={items} category={"closet"}/>
        {/* {generateTable(items)} */}
</div>
      </div>
    </div>
    <Footer/>
</div>

  );
}
