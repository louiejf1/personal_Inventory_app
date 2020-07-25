import React from "react";
import Footer from "../Components/Footer";
import Button from "../Components/Button";


function handleclick(){

}


export default function Form() {
  return (
    <div>
      <div className="container-fluid mainFormDiv">
        <div>Edit Information</div>
        <div>
        <form>
          <div>
            <label>Title</label>
            <input type="email" class="form-control"  value={}></input>
          </div>
          <div>
            <label></label>
            <input type="email" class="form-control"  placeholder="Enter email"></input>
          </div>
          <button type="submit" class="btn btn-primary">Save</button>
        </form>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}