import React from 'react'
import Footer from "../Components//Footer";
import Button from "../Components/Button";
import Items from "../Components/ItemInfo"
import FileUpload from "../Components/FileUpload";
import Form from "../Components/Form";
import TableCollectibles from '../Components/TableCollectibles';

export default function Collectables() {
  return (
    <div className="MainClosetDiv">
      <div className="container-fluid">
        <p className='text-center mb-4'>Upload file Test</p>

        <FileUpload />
        <div>
          <Form />
        </div>
        <div>
          <h5>WishList</h5>
        </div>
        <div>
          <TableCollectibles />
        </div>
      </div>

    </div>
  );
}