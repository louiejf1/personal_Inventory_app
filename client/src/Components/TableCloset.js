import React from "react";
import "../styles/table.css";

function Table(props){
    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th>Item Cost</th>
                    <th># of Times Worn</th>
                    <th>Favorite</th>
                </tr>
            </thead>
            <tbody>
                {props.items.map(item=>{
                    return(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td><img src={item.image} alt="item"/></td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>{item.worn}</td>
                            <td>{item.favorite}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default TableCloset;