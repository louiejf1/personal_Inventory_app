<<<<<<< HEAD
import React, {useEffect, useState} from 'react';
import Footer from "../Components//Footer";
import Button from "../Components/Button";
import TableCloset from "../Components/TableCloset"
=======
import React, { useEffect, useState } from 'react';
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import Items from "../Components/ItemInfo";
import Weather from "../Components/Weather";
import TableCloset from "../Components/TableCloset";
>>>>>>> b5c38ef0e88eec9000379516c09f95f802fd4809
import API from "../Utils/API.js"

export default function Closet() {
  const [item, setItem] = useState({});
<<<<<<< HEAD
  useEffect(()=>{API.getClosets().then (item=>{setItem(item.data)} )})
  
=======
  useEffect(() => { API.getClosets().then(item => { setItem(item.data) }) })
>>>>>>> b5c38ef0e88eec9000379516c09f95f802fd4809
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
<<<<<<< HEAD
         <TableCloset  
         items={item}
         />
=======
          <Button />
>>>>>>> b5c38ef0e88eec9000379516c09f95f802fd4809
        </div>
        <TableCloset
          items={item}
        />
      </div>
    </div>


  );
}
