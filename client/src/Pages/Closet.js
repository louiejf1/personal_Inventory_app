import React, { useEffect, useState } from 'react';
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import Items from "../Components/ItemInfo";
import Weather from "../Components/Weather";
import TableCloset from "../Components/TableCloset";
import API from "../Utils/API.js"
import axios from "axios"

export default function Closet() {
  // const [item, setItem] = useState({});
  // useEffect(() => { API.getClosets().then(item => { setItem(item.data) }) })
const [data, setData] = useState({items:[]});
useEffect(()=>{
  const res = async function () {
    return await axios.get('https://cors-anywhere.herokuapp.com/https://localhost:3001/inventoryItems', { headers: {'Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept'} });

  setData(res.data)
  })
 /* axios.get(URL, { headers: { Authorization: AuthStr } })
  .then(response => {
      // If request is good...
      console.log(response.data);
   })
  .catch((error) => {
      console.log('error ' + error);
   });*/

.then( console.log(data=>data,"STRING"));
 /* fetch("http://cors-anywhere.herokuapp.com/http://localhost:3001/inventoryItems")
  .then(res=>res.json)
  .then(data=>console.log('data', data))
*/
 // console.log(API.getInventoryItems());
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
        <TableCloset />
       </div>  
      </div>
    </div>


  );
}
