import React, { useEffect, useState } from 'react';
import Footer from "../Components//Footer";
import Button from "../Components/Button";
import TableDocuments from "../Components/TableDocuments";
import { TableCloset} from "../Components/Table";
import API from "../Utils/API.js"


export default function Paperwork() {
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

    <div className="MainPaperworkDiv">
      <div className="container-fluid">
       <div className="row col-sm-12">
        <TableCloset items={items} category={"paperwork"}/>
       </div>
      </div>
    </div>


  );
}
