import React from "react";
import Jumbotron from "../Components/Jumbotron";
import LoginCard from "../Components/LoginCard";


export default function Home() {
  return (

    <div className="MainHomeDiv">
      <Jumbotron />
      <div className="container-fluid register">
        <div className="row col-sm-12">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <LoginCard />
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    </div>


  );
}
