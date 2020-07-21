import React from "react";
import PropTypes from "prop-types";
import Footer from "../Components//Footer";
import Card from "../Components/Card";
import Search from "../Components/Search";
import Weather from "../Components/Weather";

const Dashboard = (props) => {
  return (
    <>
      <div class="container-fluid dashboard">
        <div class="col">
          <div class="row">
            <div class="col-sm dashboard-col">
              <h3> Go To Closet</h3>
              <Card />
            </div>
            <div class="col-sm dashboard-col">
              <h3>Go To Collectables</h3>
              <Card />
            </div>
            <div class="col-sm dashboard-col">
              <h3>Go To Paperwork</h3>
              <Card />
            </div>
          </div>
          <div class="row"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

Dashboard.propTypes = {};
export default Dashboard;
