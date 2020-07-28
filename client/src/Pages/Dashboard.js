import React from "react";
import PropTypes from "prop-types";
import Card from "../Components/Card";
import Search from "../Components/Search";
import Weather from "../Components/Weather";
import Form from "../Components/Form"
import Footer from "../Components/Footer";
// import Reducer from "../Components/Reducer"
const Dashboard = (props) => {
  return (
    <div className="dashboardDiv">
      <div className="container-fluid dashboard">
        <div className="col">
          <div className="row">
            <div className="col-sm dashboard-col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Go to Closet</h5>
                  <a href="closet" className="btn btn-primary">
                    Click Here!
                                    </a>
                </div>
              </div>
            </div>
            <div className="col-sm dashboard-col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Go to Collectables</h5>
                  <a href="collectables" className="btn btn-primary">
                    Click Here!
                                    </a>
                </div>
              </div>
            </div>
            <div className="col-sm dashboard-col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">View your Paperwork</h5>
                  <a href="paperwork" className="btn btn-primary">
                    Click Here!
                                    </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row"><div className="col-sm dashboard-col">
              <h3>Add</h3>
              <Form />
            </div></div> */}
          <div className="row"><div className="col-sm dashboard-col">
            <Form />
          </div></div>
        </div>
        <div className="row"></div>
      </div>
      <Footer />
    </div >
  );
};
Dashboard.propTypes = {};
export default Dashboard;