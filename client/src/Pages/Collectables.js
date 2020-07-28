import React, { useState, useEffect } from 'react'
import Button from "../Components/Button";
import Items from "../Components/ItemInfo"
import FileUpload from "../Components/FileUpload";
import Form from "../Components/Form";
import TableCollectibles from '../Components/TableCollectibles';
import Wishlist from "../Components/Wishlist";
import Axios from 'axios';
import { Provider } from "../Components/wishlistContext";
import WishlistAdd from '../Components/WishlistAdd';
import WishlistHeader from '../Components/WishlistHeader';
import API from '../Utils/API';
import TaskManager from '../Components/TaskManager/TaskManager';
import { TableCloset } from "../Components/Table";
import Footer from '../Components/Footer';




export default function Collectables() {

  const [data, getData] = useState([]);

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
      <div className="col-md-12" style={{ justifyItems: "center" }}>
        <div className="container-fluid">
          <Provider>

            <div classname="wishlist" style={{ paddingLeft: "20px" }}>
              <div style={{ float: "left", paddingTop: "35px", margin: "30px" }}>
                <Form />
              </div>
              <div style={{ float: "left", margin: "30px", paddingBottom: "30px" }}>
                <TaskManager />
              </div>

            </div>

            {/* <div>
              <TableCollectibles />
            </div> */}
          </Provider>
          <div>
            <TableCloset items={items} category={"Collectables"} />
          </div>

        </div>
      </div >
      <Footer />
    </div >


  );
}