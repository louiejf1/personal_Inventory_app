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


export default function Collectables() {

  const [data, getData] = useState([]);


  // useEffect(() => (
  //   Axios.get('https://jsonplaceholder.typicode.com/todos')
  // )
  //   .then(result => getData(result.data))

  //   , [])



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



          </Provider>
          <div>
            <TableCollectibles />
          </div>
        </div>

      </div>
    </div >
  );
}