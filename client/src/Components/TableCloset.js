import React from "react";
import "../styles/table.css";

<<<<<<< HEAD
function TableCloset(props){
    console.log(props.items);
    
    return(
=======
function TableCloset(props) {
    console.log(props.items);

    return (
>>>>>>> b5c38ef0e88eec9000379516c09f95f802fd4809
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
<<<<<<< HEAD
                {(props.items > 0) ? props.items.map(item=>{
                    
                    return(
=======
                {(props.items > 0) ? props.items.map(item => {

                    return (
>>>>>>> b5c38ef0e88eec9000379516c09f95f802fd4809
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