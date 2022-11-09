import React from "react";
import Footer from "./Footer";
import OurServices from "./OurServices"
import Services from "./Services"
const Service = () =>{
    return (
      <>
      <div className="my-3">
         <h1 className="text-center">Our Services</h1>
        </div>
        <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
            {
              Services.map((val, index)=>{
                return <OurServices key={index} imgsrc={val.img} 
                cardTitle={val.title}
                  cardDesc={val.desc}
                />
              })
            }
              
            </div>
          </div>
        </div>
        </div>
    

        <Footer/>
      </>
    )
}
export default Service;