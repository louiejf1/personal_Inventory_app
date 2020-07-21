import React from "react";
import Footer from "../Components//Footer";
import Button from "../Components/Button";
import TableDocuments from "../Components/TableDocuments";

export default function Paperwork() {
  return (

    <div className="MainPaperworkDiv">
      <div className="container-fluid">
        <div>
          <Button />
        </div>
        <div>
          <TableDocuments />
        </div>
      </div>
    </div>


  );
}
