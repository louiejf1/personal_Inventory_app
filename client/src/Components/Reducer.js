import React, { useState, useReducer, useContext } from "react";
import Button from "./Button";
import API from "../Utils/API"


// use reducer for switch states statements
// actions and displays


function Form() {
  const [itemData, setItemData] = useState({})
  const [value, setValue] = useContext(FormContext)

  const handleChangeValue = (event) => {

  }

  //   dispatch and state handler via reducer
  const [state, dispatch] = useReducer(reducer, {
    item: {
      category: "",
      name: "",
      description: "",
      image: "",
      important: "",
    },

    closet: {
      category: "",
      name: "",
      color: "",
      description: "",
      image: "",
      important: "",
    },
  })

  const reducer = (state, action) => {
    switch (action.type) {
      case "Cancel":
        return {};
      case "set":
        return { ...state, [action.name]: action.value };
      case "setCloset":
        return { ...state, closet: action.value }
      case "setDonations":
        return { ...state, closet: action.value }
      case "setPaperwork":
        return { ...state, closet: action.value }
      case "setCollectibles":
        return { ...state, closet: action.value }
      default:
        return state;
    }
  }


  //   context create use values from form to create context
  const FormContext = React.createContext({});


  //   on submit takes values and sends them to state
  const handleFormSave = (event) => {
    event.preventDefault();
    console.log(state)
  }

  const handleActions = (name, value) => {
    //   dispatch for switch handles via type with var value & name
    dispatch({ type: "set", name, value })
  }


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
                    <select onChange={handleChangeValue} name="invCategory">
                      <option value=" ">None</option>
                      <option value="saveCloset">Closet</option>
                      <option value="saveCollectibles">Collectibles</option>
                      <option value="savePaperwork">Paperwork</option>
                      <option value="saveDonation">Donations</option>
                    </select>
                    <input onChange={handleChangeValue} name="invItemName" />
                    <textarea onChange={handleChangeValue} name="invItemDescription" />
                    <input type="checkbox" onChange={handleChangeValue} name="important" />
                  </div>
                  <div>
                    <Button type="submit" buttonName={"Save"} />


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