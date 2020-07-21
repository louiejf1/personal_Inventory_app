import React from 'react'
import Footer from "../Components//Footer";
import Button from "../Components/Button";
import Items from "../Components/ItemInfo"
import FileUpload from "../Components/FileUpload";

export default function Closet() {
  return (
    <div className="MainClosetDiv">
      <div className="container-fluid">
        <p className='text-center mb-4'>Upload file Test</p>

        <FileUpload />
        <div>
          <Button />
        </div>
        <div>
          <Items />
        </div>
      </div>

    </div>
  );
}