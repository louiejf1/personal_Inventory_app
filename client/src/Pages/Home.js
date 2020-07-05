import React from "react";
import Jumbotron from "../Components/Jumbotron";
import Footer from "../Components//Footer";
import Button from "../Components/Button";

export default function Home() {
  return (
    <div className="MainHomeDiv">
        <Jumbotron />
      <div className="container-fluid">
        <div><Button /></div>
        <div>
            Contents section <br></br>
            Contents section <br></br>
            Contents section <br></br>
            Contents section <br></br>
            Contents section <br></br>
            Contents section <br></br>
            Contents section <br></br>
            Contents section <br></br>
            Contents section <br></br>
            Contents section <br></br>
            Contents section <br></br>
            Contents section <br></br>
            Contents section <br></br>
            Contents section <br></br>
        </div>
      </div>
      <Footer />
    </div>
  );
}
