import React, { useEffect, useState } from "react";
import Button from "./Button";


function Form(props) {

  const [formObject,setFormObject] = useState({
    invCategory: " ",
    invItemName: " ",
    invItemDescription: " ", 
    important: false,
  })

// ----------load item data and place into the form-----------
useEffect(()=>{
    loadItem();
},[])


const loadItem = () =>{
  // based on what page the user is on 
  // ex if on closet tab 
  // props into API.get 
  // other possible solution for get is to have pull for overall schema
  API.getClosetk()
  .then(res =>{
    setFormObject(res.data).catch(err => console.log(err))
  })
}

// ----------Handle Change functions-----------
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


// ----------Handle On Click functions------------
const handleFormSave = (event)=>{
  event.preventDefault();
  const categoryData = event.target.value
  console.log("Item has been saved!")
  console.log(formObject)
  console.log(categoryData)
  API.categoryData({formObject}).then(cancelItem())
}


    // delete item by id
    const deleteItem = (event) =>{
      event.preventDefault();
  const categoryData = event.target.value
  switch(categoryData){
          case "updateCloset":
            API.deleteCloset(id);
            case "updateCollectibles":
              API.deleteCollectibles(id);
            case "updatePaperwork":
              API.deletePaperwork(id);
            case "updateDonations":
              API.deleteDonation(id);
        }
      }
        
  const cancelItem = ()=>{
    // clears all input data and resets the option area and sends user back to 
    // the dashboard page
    setFormObject({
      invCategory: " ",
      invItemName: " ",
      invItemDescription: " ", 
      important: false,
      }).catch(err => console.log(err))
  }
    

  return (
    <div>
    <div>
      <div className="row">
        <div>
          <div className="card">
            <div className="card-body">
            <form>
              <div>
                {/* use checkboxes (use for ref) */}
                <select onChange= {handleChangeCategory} name="invCategory">
                  <option value=" ">None</option>
                  <option value="updateCloset">Closet</option>
                  <option value="updateCollectibles">Collectibles</option>
                  <option value="updatePaperwork">Paperwork</option>
                  <option value="updateDonation">Donations</option>
                </select>
                <input onChange= {handleChangeItem} value={formObject.invItemName} name="invItemName"/>
                <textarea onChange= {handleChangeDescription} value={formObject.invItemDescription}   name="invItemDescription"/>
                <input type="checkbox" onChange={handleChangeImportant} value={formObject.important}  name="important" />
              </div>
              <div>
                {/* <Button onClick={()=>handleFormSave}/> */}
                {/* have Save Button the biggest */}
                <Button type="submit" onClick={handleFormSave}>
                  Update
                  </Button>         
              </div>
              <div>
                <Button onClick={cancelItem}>Cancel</Button>
              </div>
              <div>
                <Button onClick={deleteItem}>Delete</Button>
                
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