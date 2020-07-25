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
import { TableCloset} from "../Components/Table";
import API from "../Utils/API.js"
import Footer from "../Components/Footer"


export default function Collectables() {

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
        <p className='text-center mb-4'>Upload file Test</p>
        <div>
          <Form />
        </div>
        <Provider>
          <div className="wishlist">
            <WishlistHeader />
            <WishlistAdd />
            <Wishlist />


            {/* //API place holder
          <ul>
            {
              data.map(todo => (
                <li key={todo.id}>
                  {todo.title}
                </li>
              ))
            }
          </ul> */}
          </div>
        </Provider>
        <div className="row col-sm-12">
        <TableCloset items={items} category={"collectables"}/>
       </div>
      </div>

    </div>
    <Footer/>
    </div>
  );
}