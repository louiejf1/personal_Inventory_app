import React, { useState } from "react";
import Button from "./Button";
import API from "../Utils/API"
import Fragment from "./FileUpload"



// use reducer for switch states statements
// actions and displays


function Form() {
  const [formObject, setFormObject] = useState({
    invCategory: " ",
    invItemName: " ",
    invItemDescription: " ",
    invItemImgUrl: " ",
    important: false,
  })
  console.log(API)

  // don't need when using checkboxes
  const handleChangeCategory = (event) => {
    event.preventDefault();
    const invCategory = event.target.options[event.target.selectedIndex].text;

    setFormObject({ ...formObject, invCategory: invCategory })

  }

  const handleChangeItem = (event) => {
    event.preventDefault();
    const itemName = event.target.value;
    console.log(itemName)
    setFormObject({ ...formObject, invItemName: itemName })
  }

  const handleChangeDescription = (event) => {
    event.preventDefault();
    const invItemDescription = event.target.value;
    console.log(invItemDescription)
    setFormObject({ ...formObject, invItemDescription: invItemDescription })
  }

  const handleChangeImportant = (event) => {
    event.preventDefault();
    const target = event.target;
    const important = target.name === 'important' ? target.checked : target.value
    console.log(important)
    setFormObject({ ...formObject, important: important })
  }


  const fileSave = (event) => {
    event.preventDefault();
    const invItemImgUrl = event.target.value;
    setFormObject({ ...formObject, invItemImgUrl: invItemImgUrl })
  }

  const handleFormSave = (event) => {

    event.preventDefault();
    console.log("Item has been saved!")
    console.log(formObject)

    API.saveinventoryItem({ formObject })
  }



  const cancelItem = () => {

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
      <h5 className="card-header">Add An Item</h5>

      {/* <div className="card-body"> */}

      <form className="inputArea" onSubmit={(event) => handleFormSave(event)}>
        <div>
          {/* use checkboxes (use for ref) */}
          <div className="col-sm dashboard-col">
            <select onChange={handleChangeCategory} name="invCategory">
              <option value=" ">None</option>
              <option value="saveCloset">Closet</option>
              <option value="saveCollectibles">Collectibles</option>
              <option value="savePaperwork">Paperwork</option>
              <option value="saveDonation">Donations</option>
            </select>
          </div>
          <div className="col-sm dashboard-col">
            <input onChange={handleChangeItem} placeholder="Item Name" name="invItemName" />
          </div>
          <div className="col-sm dashboard-col">
            <textarea onChange={handleChangeDescription} placeholder="Item Description" name="invItemDescription" />
          </div>
          <p className="card-text">Is this an important item?</p>
          <input type="checkbox" onChange={handleChangeImportant} name="important" />
          <Fragment onChange={fileSave} />
        </div>
        <div className="formBtn">
          <div className="col-sm dashboard-col">
            <Button type="submit" href="./dashboard" buttonName={"Save"} />
          </div>
          <div className="col-sm dashboard-col">
            <Button onClick={cancelItem} buttonName={"Cancel"} />
          </div>
        </div>
      </form>
      {/* </div> */}
    </div>

  );
}

export default Form;