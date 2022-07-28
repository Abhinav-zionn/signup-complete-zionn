import React from "react";
import Row from "./RowTop";
import "../Components/TableTop.css";

const TableTop = () => {
  return (
    <div>
      <div className="container-sm">
        <div className="row mb-1">
          <div className="col-3">
            <div className="cell-wide-t cell-t purple-b">
              <strong>buy side</strong>
            </div>
          </div>
          <div className="col-3">
            <div className="cell-mid-t cell-t purple-b">
              <strong>bid price</strong>
            </div>
          </div>
          <div className="col-3">
            <div className="cell-mid-t cell-t purple-b">
              <strong>ask price</strong>
            </div>
          </div>
          <div className="col-3">
            <div className="cell-last-t cell purple-b">
              <strong>sell side</strong>
            </div>
          </div>
        </div>
        <Row a="#value" b="#value" c="#value" d="#value" e="#value" />
        <Row a="#value" b="#value" c="#value" d="#value" e="#value" />
        <Row a="#value" b="#value" c="#value" d="#value" e="#value"/>
      </div>
    </div>
  );
};

export default TableTop;
