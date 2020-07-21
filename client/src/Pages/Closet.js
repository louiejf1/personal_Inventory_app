import React, {useEffect, useState} from 'react';
import Footer from "../Components//Footer";
import Button from "../Components/Button";
import TableCloset from "../Components/TableCloset"
import API from "../Utils/API.js"

export default function Closet() {
  const [item, setItem] = useState({});
  useEffect(()=>{API.getClosets().then (item=>{setItem(item.data)} )})
  
  return (
    <div className="MainClosetDiv">
      <div className="container-fluid">
        <div>
          <Button />
        </div>
        <div>
         <TableCloset  
         items={item}
         />
        </div>
      </div>
      <Footer />
    </div>
  );
}

