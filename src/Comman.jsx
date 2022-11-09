import React from "react";

const Comman = (props) => {
  return (
    <>
    <section className="header d-flex align-items-center">
        <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row">
            <div className="col-md-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <>
                <h3 className="Header_heading">
                  {props.title}
                  <strong className="brand_name"> IT Solutions Pvt Lmt</strong>
                </h3>
              </>
              <p className="header_desc">{props.discraption}</p>
              <a href="/contact "  class="btn btn-primary w-25">
                Get Started
              </a>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <img src={props.images} alt="Business grow" className="image_header"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    </>
  );
};
export default Comman;
