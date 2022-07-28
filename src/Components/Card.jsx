import React from "react";
import Button from "./Button";
import "./card.css";

const Card = (props) => {
  return (
    <div className="container">
      <div className="con">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <img className="logo" src={props.imgl} />
            </div>
            <div className="col-8">
            <h3 className="logo-name" >{props.name}</h3>
            </div>
          </div>
          <div className="row mar-top">
            <p className="text-1 mar-left">
              Last Valuation:
              <br />
              {props.ev}
              <br />
              <br />
              Top Investors:
              <br />
              {props.in}
            </p>
          </div>
          <div className="row but-mar-left but-mar-top">
            <Button name="sell/buy↗️" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
