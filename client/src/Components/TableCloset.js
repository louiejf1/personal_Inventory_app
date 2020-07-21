import React from "react";
import "../styles/table.css";

function TableCloset(props){
    console.log(props.items);
    
    return(
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
                {(props.items > 0) ? props.items.map(item=>{
                    
                    return(
                        <tr key={item.id}>
                            <td>{item.invCategory}</td>
                            <td>{item.invItemName}</td>
                            <td>{item.color}</td>
                            <td>{item.invItemDescription}</td>
                            <td>{item.important}</td>
                            <td>{item.date}</td>
                        </tr>
                    )
                }) : <tr>
                        <td>No items to display.</td>
                    </tr>}
            </tbody>
        </table>
    )
}

export default TableCloset;