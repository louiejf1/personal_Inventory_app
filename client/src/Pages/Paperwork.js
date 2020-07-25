import React, { useEffect, useState } from 'react';
import Footer from "../Components//Footer";
import Button from "../Components/Button";
import Form from "../Components/Form";
import TableDocuments from "../Components/TableDocuments";
import GoogleEventBtn from "../Components/GoogleEventBtn";
import ReactCalendar from "../Components/ReactCalendar";
import FileUpload from "../Components/FileUpload";
import FormBackup from "../Components/FormBackup";
import { TableCloset } from "../Components/Table";
import API from "../Utils/API.js"


export default function Paperwork() {
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

    <div className="MainPaperworkDiv">
      <div className="container-fluid">


        <div>
          {/* <FormBackup /> */}
          <Form />
        </div>
        <div style={{ justifyItems: "center" }}>
          <div style={{ float: "left", paddingTop: "110px", margin: "50px" }}>
            <ReactCalendar />
          </div>
          <div style={{ float: "left", margin: "50px", paddingBottom: "30px" }}>
            <GoogleEventBtn />
          </div>

        </div>



        <div>
          <TableCloset items={items} category={"Paperwork"} />
        </div>
      </div>
    </div>


  );
}
