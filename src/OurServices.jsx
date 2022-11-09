import React from "react";
import { NavLink } from "react-router-dom";

const OurServices = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto cards gy-4">
        <div className="card service_card w-100 h-100 mx-auto">
          <img src={props.imgsrc} className="card-img-top w-50 h-50 mx-auto d-block" alt="our__service"/>
          <div className="card-body w-100 h-100 mx-auto">
            <h5 className="card-title text-center fw-bold" ><NavLink to="/">{props.cardTitle}</NavLink></h5>
            <p className="card-text text-center">
              {props.cardDesc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default OurServices;
