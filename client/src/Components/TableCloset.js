import React from "react";
import "../styles/table.css";

function Table(props){
    return(
        <table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Item Name</th>
                    <th>Color</th>
                    <th>Item Description</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {props.items.map(item=>{
                    return(
                        <tr key={item.id}>
                            <td>{item.invCategory}</td>
                            <td>{item.invItemName}</td>
                            <td>{item.color}</td>
                            <td>{item.invItemDescription}</td>
                            <td>{item.date}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default TableCloset;