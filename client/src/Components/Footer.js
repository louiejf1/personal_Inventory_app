import React from "react";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <div className="card bg-secondary">
        <div className="card-body">
          {/* <h5 className="card-title">Copyright 2020</h5> */}
          <div className="card-text">
            <Link style={linkStyle} to="about">About Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  textAlign: 'center',
}