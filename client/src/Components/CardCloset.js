import React from "react";


function CardCloset(props){
        return (
          <div className="card">
            <div className="img-container">
              <img
                alt=""
                src=""
              />
            </div>
            <div className="content">
              <ul>
                <li>
                  <strong>Category: </strong> 
                </li>
                <li>
                  <strong>Item Name: </strong> 
                </li>
                <li>
                  <strong>Color: </strong> 
                </li>
                <li>
                  <strong>Item Description: </strong> 
                </li>
                <li>
                  <strong>Date: </strong> 
                </li>
              </ul>
            </div>
          </div>
        );
      }
      

export default CardCloset;