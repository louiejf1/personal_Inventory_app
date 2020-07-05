import React from "react";
import Footer from "../Components/Footer";
import Button from "../Components/Button";

export default function Form() {
  return (
    <div>
      <div className="container-fluid mainFormDiv">
        <div>form</div>
        <div>
        <form>
          <div>
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
          </div>
          <div>
            <label for="exampleInputPassword1">Password</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
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
