import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FcHome, FcInvite, FcCallback } from "react-icons/fc";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const userContact = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userContact();
  }, []);

  // we are storing data in states

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };

  //  send the data to backend

  const contactForm = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = userData;

    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });

    const data = await res.json();

    if (!data) {
      console.log("message not send ");
    } else {
      alert("Message Send");
      setUserData({ ...userData, message: "" });
    }
  };

  return (
    <>
      <div className="container mt-5 mb-3">
        <div className=" section-gap"></div>
        <div className="wrapper">
          <h3 className="global-title text-center">Get In Touch</h3>
          <div className="d-grid contact-view">
            <div className="cont-details">
              <div className="cont-top">
                <div className="cont-left text-center">
                  <span className="fa fa-phone text-primary"></span>
                </div>

                <div className="cont-right">
                  <h6>
                    <span className="cont-logo">
                      <FcCallback />
                    </span>
                    Call Us
                  </h6>
                  <p>
                    <NavLink to="#">+91 8668690126</NavLink>
                  </p>
                </div>
              </div>

              <div className="cont-top margin-up">
                <div className="cont-left text-center">
                  <span className="fa fa-envelope-o text-primary"></span>
                </div>
                <div className="cont-right">
                  <h6>
                    <span className="cont-logo">
                      <FcInvite />
                    </span>
                    Email Us
                  </h6>
                  <p>
                    <NavLink to="mailto:example@mail.com" className="mail">
                      chetanatrawalkar1@gmail.com
                    </NavLink>
                  </p>
                </div>
              </div>

              <div className="cont-top margin-up">
                <div className="cont-left text-center">
                  <span className="fa fa-map-marker text-primary"></span>
                </div>
                <div className="cont-right">
                  <h6>
                    <span className="cont-logo">
                      <FcHome />
                    </span>
                    Address
                  </h6>
                  <p>Navi Sangavi, Pune, Maharastra, India.</p>
                </div>
              </div>
            </div>

            <div className="map-content">
              <form method="POST" id="contact-form">
                <div className="twice-two">
                  <input
                    type="text"
                    className="form-control"
                    id="contact-name"
                    placeholder="Name"
                    name="name"
                    value={userData.name}
                    onChange={handleInputs}
                    required={true}
                  />
                  <input
                    type="number"
                    className="form-control"
                    id="contact-phone"
                    placeholder="Phone"
                    name="phone"
                    value={userData.phone}
                    onChange={handleInputs}
                    required={true}
                  />
                </div>

                <div className="twice">
                  <input
                    type="email"
                    className="form-control"
                    id="contact-email"
                    placeholder="Email"
                    name="email"
                    value={userData.email}
                    onChange={handleInputs}
                    required={true}
                  />
                </div>

                <textarea
                  className="form-control"
                  id="w3lMessage"
                  placeholder="Message"
                  name="message"
                  value={userData.message}
                  onChange={handleInputs}
                  required={true}
                ></textarea>
                <button
                  type="submit"
                  className="btn btn-contact"
                  onClick={contactForm}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
