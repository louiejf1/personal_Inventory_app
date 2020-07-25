// import React, { useContext } from "react";
import TableBody from './TableBody'
import "../../styles/table.css";
import React from "react";


export function TableCloset(props) {
    // console.log(items);

    return (
        <table className="table table-striped">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Category</th>
                    <th scope="col">Item Name</th>
                    <th scope="col">Item Description</th>
                    <th scope="col">Favorite</th>
                    <th scope="col">Date</th>
                </tr>
            </thead>
            <tbody>
              <TableBody items={props.items} category={props.category} />
                    
               
            </tbody>
        </table>
    )
}
