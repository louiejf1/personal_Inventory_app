import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/auth";

const Navigation = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <nav className="navbar navbar-expand-lg">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/dashboard">
              Dashboard <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/closet">
              Closet
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/collectables">
              Collectables
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/paperwork">
              Paperwork
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={logout} href="#!">
              {/* <i className="fas fa-sign-out alt"></i>{' '}
          <span className="hide-sm">Logout</span> */}
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );

  const guestLinks = (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/register">
            Register
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">
            Login
          </a>
        </li>
      </ul>
    </div>
  );

  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/">
        PIA
      </a>

      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navigation.prototype = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navigation);
