import React from "react";
import Comman from "./Comman";
import Footer from "./Footer";
import img1 from "../src/Images/10798281_19362653.jpg";



const Home = () => {
  return (
    <>
    <Comman title="Grow your business with"
      discraption="We have very intelligent web and digital team who have developed
                a lot of business with their skills till date."
                images={img1}
    />
    <Footer/>
    </>
  );
};
export default Home;
