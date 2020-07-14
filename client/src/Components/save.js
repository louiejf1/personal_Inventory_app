import React from "react";
import Button from './Button'


function SaveBtn(props) {
    function handleClick(){
        addItem()
    }
    function addItem(id, value) {
        // add code here to remove a book using API
        
        API.addItem(id, value).then(res=>${}())
      }
  return (
    <Button onClick ={handleClick} buttonName="x"></Button>
  );
}

export default DeleteBtn;
