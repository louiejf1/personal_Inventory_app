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

export default function Collectables() {

  const [data, getData] = useState([]);
  const [todos, setTodos] = useState([])

  // useEffect(() => (
  //   Axios.get('https://jsonplaceholder.typicode.com/todos')
  // )
  //   .then(result => getData(result.data))

  //   , [])

  return (
    <div className="MainClosetDiv">
      <div className="container-fluid">
        <p className='text-center mb-4'>Upload file Test</p>

        <FileUpload />
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
        <div>
          <TableCollectibles />
        </div>
      </div>

    </div>
  );
}