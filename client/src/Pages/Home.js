import React from "react";
import Jumbotron from "../Components/Jumbotron";
import Footer from "../Components//Footer";
import Button from "../Components/Card";
import Card from "../Components/Card";

export default function Home() {
  return (
    <div className="MainHomeDiv">
      <Jumbotron />
      <div className="container-fluid register">
        <div className="row col-sm-12">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <Card />
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
