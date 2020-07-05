import React from "react";
import Footer from "../Components/Footer";
import Button from "../Components/Button";

export default function Form() {
  return (
    <div>
      <div className="container-fluid mainFormDiv">
        <div>form</div>
        <div>
          <Button />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
