import React from "react";
import "../styles/table.css";

<<<<<<< HEAD
function TableDocuments(props){
    return(
=======
function TableDocuments(props) {
    return (
>>>>>>> b5c38ef0e88eec9000379516c09f95f802fd4809
        <table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Item Name</th>
                    <th>Item Description</th>
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
                            <td>{item.invItemDescription}</td>
                            <td>{item.date}</td>
                        </tr>
                    )
<<<<<<< HEAD
                }): <tr>
                <td>No items to display.</td>
            </tr>}
=======
                }) : <tr>
                        <td>No items to display.</td>
                    </tr>}
>>>>>>> b5c38ef0e88eec9000379516c09f95f802fd4809
            </tbody>
        </table>
    )
}

export default TableDocuments;