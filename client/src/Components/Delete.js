import React from "react";
import Button from './Button'


function DeleteBtn(props) {
    function handleClick(){
        deleteItem()
    }
    function deleteItem(id, value) {
        // add code here to remove a book using API
        
        API.deleteItem(id, value).then(res=>"somethingcall"())
      }
  return (
    <Button onClick ={handleClick} buttonName="x"></Button>
  );
}

export default DeleteBtn;


