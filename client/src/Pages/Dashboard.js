import React from "react";
import PropTypes from "prop-types";
import Footer from "../Components//Footer";
import Card from "../Components/Card";
import Search from "../Components/Search";
import Weather from "../Components/Weather";
// import Form from "../Components/Form"
import Reducer from "../Components/Reducer"

const Dashboard = (props) => {
  return (

    <>
      <div className="container-fluid dashboard">
        <div className="col">
          <div className="row">
            <div className="col-sm dashboard-col">
              <h3> Go To Closet</h3>
              <Card />
            </div>
            <div className="col-sm dashboard-col">
              <h3>Go To Collectables</h3>
              <Card />
            </div>
            <div className="col-sm dashboard-col">
              <h3>Go To Paperwork</h3>
              <Card />
            </div>
          </div>
          {/* <div className="row"><div className="col-sm dashboard-col">
              <h3>Add</h3>
              <Form />
            </div></div> */}
            <div className="row"><div className="col-sm dashboard-col">
              <h3>Add</h3>
              <Reducer />
            </div></div>
        </div>
        <div class="row"></div>
      </div>
    </div>


  );
};

Dashboard.propTypes = {};
export default Dashboard;
