// import React, { useContext } from "react";
import TableBody from './TableBody'
import "../../styles/table.css";
import React from "react";


export function TableCloset(props) {
    // console.log(items);

    return (
        <table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Item Name</th>
                    <th>Color</th>
                    <th>Item Description</th>
                    <th>Favorite</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
              <TableBody items={props.items} category={props.category} />
                    
               
            </tbody>
        </table>
    )
}
