import React from "react";
import Footer from "../Components/Footer";
import Button from "../Components/Button";

export default function Form() {
  return (
    <div>
      <div className="container-fluid mainFormDiv">
        <div>Save New Item</div>
        <div>
          <form>
            <div>
              <label>Item Information</label>
              <input type="email" class="form-control" placeholder="Enter email"></input>
            </div>
            <div>
              <label></label>
              <input type="email" class="form-control" placeholder="Enter email"></input>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
