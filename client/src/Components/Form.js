import React, { useState } from "react";
import Button from "./Button";
import API from "../Utils/API"
import FileUpload from "./FileUpload";


// use reducer for switch states statements
// actions and displays



// use reducer for switch states statements
// actions and displays


function Form() {
  const [formObject, setFormObject] = useState({
    invCategory: " ",
    invItemName: " ",
    invItemDescription: " ",
    important: false,
  })
<<<<<<< HEAD
  console.log(API)
  const [saveCategory, setSaveCategory] = useState("")
=======
console.log(API)
const [saveCategory, setSaveCategory]=useState("")
>>>>>>> cc1cfb21cc33a0d51efed4ced838e1efa537cfe2
  // don't need when using checkboxes
  const handleChangeCategory = (event) => {
    event.preventDefault();
    const invCategory = event.target.options[event.target.selectedIndex].text;
<<<<<<< HEAD
    setFormObject({ ...formObject, invCategory: invCategory })
    console.log(`this is my data ${event.target.value}`)
=======
    setFormObject({...formObject, invCategory: invCategory})
    console.log(`this is my data ${event.target.value}` )
>>>>>>> cc1cfb21cc33a0d51efed4ced838e1efa537cfe2
    setSaveCategory(event.target.value)
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

  const handleFormSave = (event) => {
    event.preventDefault();
    // const categoryData = event.target.value
    console.log("Item has been saved!")
    console.log(formObject)
    // console.log(" This is " + categoryData)
<<<<<<< HEAD
    API[saveCategory]({ formObject })
=======
    API[saveCategory]({formObject})
>>>>>>> cc1cfb21cc33a0d51efed4ced838e1efa537cfe2
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
  const testButton = () => console.log("testclick")

  return (
    <div>
      <div>
        <div className="row">
          <div>
            <div className="card">
              <div className="card-body">
                <form onSubmit={(event) => handleFormSave(event)}>
                  <div>
                    {/* use checkboxes (use for ref) */}
                    <select onChange={handleChangeCategory} value={saveCategory} name="invCategory">
                      <option value=" ">None</option>
                      <option value="saveCloset">Closet</option>
                      <option value="saveCollectibles">Collectibles</option>
                      <option value="savePaperwork">Paperwork</option>
                      <option value="saveDonation">Donations</option>
                    </select>
                    <input onChange={handleChangeItem} name="invItemName" />
                    <textarea onChange={handleChangeDescription} name="invItemDescription" />
                    <input type="checkbox" onChange={handleChangeImportant} name="important" />
                  </div>
                  <div>
                    <Button type="submit" buttonName={"Save"} />
                    <button type="submit" onClick={testButton}>Test</button>

                  </div>
                  <div>
                    <Button buttonName={"Cancel"} />

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;