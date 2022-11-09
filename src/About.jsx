import React from "react";
import Comman from "./Comman";
import Footer from "./Footer";
import img2 from "../src/Images/6974855_4380.jpg"


const About = () => {
  return (
    <>
    <Comman title="Welcome to"
      discraption="Create a Unique Brand Identity
through our digital marketing company"
                images={img2}
    />
    <Footer/>
    </>
  );
};
export default About;