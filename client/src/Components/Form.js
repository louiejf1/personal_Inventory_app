import React, { useState} from "react";
import Button from "./Button";
import API from "../Utils/API"


// use reducer for switch states statements
// actions and displays


function Form() {
  const [formObject,setFormObject] = useState({
    invCategory: " ",
    invItemName: " ",
    invItemDescription: " ", 
    important: false,
  })
console.log(API)

  // don't need when using checkboxes
  const handleChangeCategory = (event) =>{
    event.preventDefault();
    const invCategory = event.target.options[event.target.selectedIndex].text;
    setFormObject({...formObject, invCategory: invCategory})
  }

  const handleChangeItem = (event) =>{
    event.preventDefault();
    const itemName = event.target.value;
    console.log(itemName)
    setFormObject({...formObject, invItemName: itemName})
  }

  const handleChangeDescription = (event) =>{
    event.preventDefault();
    const invItemDescription = event.target.value;
    console.log(invItemDescription)
    setFormObject({...formObject, invItemDescription: invItemDescription})
  }
   
  const handleChangeImportant = (event) =>{
    event.preventDefault();
    const target = event.target;
    const important = target.name === 'important' ? target.checked : target.value
    console.log(important)
    setFormObject({...formObject, important: important})
  }

  const handleFormSave = (event)=>{
    event.preventDefault();
    // const categoryData = event.target.value
    console.log("Item has been saved!")
    console.log(formObject)
    // console.log(" This is " + categoryData)
    API.saveinventoryItem({formObject})
  }
  
  const cancelItem = ()=>{
    // clears all input data and resets the option area and sends user back to 
    // the dashboard page
    console.log("Help me")
    setFormObject({
      invCategory: " ",
      invItemName: " ",
      invItemDescription: " ", 
      important: false,
      })
  }


  return (
            <div className="card">
              <h5 className="card-header">Add Item</h5>
              <div className="card-body">
              <form onSubmit={(event)=> handleFormSave(event)}>
                <div>
                  {/* use checkboxes (use for ref) */}
                  <p className="card-text">Select A Category</p>
                  <select onChange= {handleChangeCategory} name="invCategory">
                    <option>None</option>
                    <option>Closet</option>
                    <option>Collectibles</option>
                    <option>Paperwork</option>
                    <option>Donations</option>
                  </select>
                  <p className="card-text">Item Name</p>
                  <input onChange= {handleChangeItem}  name="invItemName"/>
                  <p className="card-text">Item Description</p>
                  <textarea onChange= {handleChangeDescription}  name="invItemDescription"/>
                  <p className="card-text">Is this an important item?</p>
                  <input type="checkbox" onChange={handleChangeImportant} name="important" />
                </div>
                <div>
                  <Button type="submit"  buttonName={"Save"}/>     
                </div>
                <div>
                  <Button href="/dashboard" onClick={cancelItem}buttonName={"Cancel"}/>            
                </div>
              </form>
              </div>
            </div>
  );
}

export default Form;