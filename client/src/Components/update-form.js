import React, { useEffect, useState } from "react";
import Button from "../Components/Button";


function Form() {

  cosnt [categoryObject,setCategoryObject] = useState({})


// load item data and place into the form
// useEffect(()=>{
//     // based on what page the user is on 
//     API.get{value}(params.id)
//     .then(res => {function handler}({type: , post: require.data}))
//     .catch(err=> console.log(err))
// },[])

  // don't need when using checkboxes
  const handleChangeCategory = (event) =>{
    event.preventDefault();
    const categoryData = event.target.value;
    setCategoryObject(categoryData)
  }

  const handleFormSave = (event)=>{
    event.preventDefault();
    const itemData = event.target.value;
  API.event.target.value(itemData)
  }

    // add to update form
    const deleteItem =(id)=>{
        switch(id){
          case "Closet":
            API.deleteCloset(itemData);
            case "Collectibles":
              API.deleteCollectibles(itemData);
            case "Paperwork":
              API.deletePaperwork(itemData);
            case "Donations":
              API.deleteDonation(itemData);
        }
      }
    

  return (
    <div>
      <div className="container-fluid mainFormDiv">
        <div>New Item Information</div>
        <div>
        <form onSubmit={handleFormSave}>
          <div>
            {/* use checkboxes (use for ref) */}
            <select onChange={handleChangeCategory} value={selectedValue} required ref={invCategory} name="invCategory">
              <option value="updateCloset">Closet</option>
              <option value="updateCollectibles">Collectibles</option>
              <option value="updatePaperwork">Paperwork</option>
              <option value="updateDonation">Donations</option>
            </select>
            <Input type="text" name="Name"/>
            <TextArea name="Description"/>
            <Checkbox name="important" />
          </div>
          <div>
          </div>
          <Button type="submit">
            Save
            </Button>
        </form>
        </div>
      </div>
      <Button onClick={deleteItem}>
        Delete
      </Button>
    </div>
  );
}

export default Form;