import React from "react";
import moment from "moment"

 function TableBody({items, category}){
    
    return(

           
              items.filter(items=>items.invCategory=== category).map(item=>{
        
            return (
        <tr>
          <td>{item.invCategory}</td>
          <td>{item.invItemName}</td>
          {/* <td>{item.invItemImgUrl}</td> */}
          <td>{item.invItemDescription}</td>
          <td>{item.important}</td>
          <td>{moment(item.date).format("MM-DD-YYYY")}</td>
        </tr>)
        
      })
            
      
    )
}

export default TableBody