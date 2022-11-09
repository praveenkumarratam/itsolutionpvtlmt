import React, { useState } from "react";
import Footer from "./Footer";
import img3 from "../src/Images/8690678_3969587.jpg"

const Contact = () => {
  const [inputs, setInputs] = useState("");
  const eventHandling = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const SubmitForm = (event) => {
    event.preventDefault();
    if (inputs.name == undefined) {
      alert("Please Enter Name!");
    } else if (inputs.email == undefined) {
      alert("Please Enter Email!");
    } else if (inputs.subject == undefined) {
      alert("Please Write An Subject!");
    } else if (inputs.message == undefined) {
      alert("Please Write An Message!");
    } else {
      alert("successfully Submit");
      
    }
  };

  return (
    <>
      <header className="container-fluid contact_container">
      <h1 className="text-center my-3">Contact Us</h1>
            <div className="row my-5">
              <div className="col-md-4 mx-auto">
                <form onSubmit={SubmitForm}>
                  <input
                    type="text"
                    name="name"
                    value={inputs.name || ""}
                    onChange={eventHandling}
                    placeholder="Enter Your Name"
                    className="form-control"
                  />
                  <br />
                  <input
                    type="text"
                    name="email"
                    value={inputs.email || ""}
                    onChange={eventHandling}
                    placeholder="Enter Your Email"
                    className="form-control"
                  />
                  <br />
                  <input
                    type="text"
                    name="subject"
                    value={inputs.subject || ""}
                    onChange={eventHandling}
                    placeholder="Enter Your Subject"
                    className="form-control"
                  />
                  <br />
                  <textarea
                    name="message"
                    value={inputs.message || ""}
                    onChange={eventHandling}
                    rows="4"
                    cols="50"
                    placeholder="Message"
                    className="form-control"
                  />
                  <br />
                  <input type="submit" className="btn btn-primary d-block mx-auto" />
                </form>
              </div>
        </div>
      </header>
      <Footer/>
    </>
  );
};
export default Contact;
