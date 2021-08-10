import React, { useEffect, useState } from "react";
import aboutpic from "../images/aboutpic.png";
import aboutpic1 from "../images/aboutpic1.png";

import { useHistory } from "react-router-dom";

const About = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({});

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "appllication/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      // console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      // console.log(err);
      history.push("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <>
      <div className="container em-profile mt-5">
        <form method="GET">
          <div className="row">
            <div className="col-md-4 mt-4 mb-3">
              <img
                src={
                  userData.name === "Chetan Atrawalkar" ? aboutpic1 : aboutpic
                }
                id="avatar"
                className="rounded mx-auto d-block"
                alt="profilepic"
              />
            </div>

            <div className="col-md-6">
              <div className="profile-head mt-3">
                <h5>{userData.name}</h5>
                <p style={{ color: "#6d7ae0" }}>{userData.work}</p>
                <p className="profile-rate mt-3 mb-5">
                  RANK: <span>1/10</span>
                </p>
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <input
                type="submit"
                className="edit-btn mt-3"
                name="AddSome"
                value="Edit Profile"
              />
            </div>
          </div>

          <div className="row">
            {/* left dide */}

            <div className="col-md-4">
              <div className="profile-work">
                <a
                  href="http://www.google.com"
                  target="_chetan"
                  style={{ textDecoration: "none" }}
                >
                  Youtube
                </a>
                <br />
                <a
                  href="http://www.google.com"
                  target="_chetan"
                  style={{ textDecoration: "none" }}
                >
                  Instagram
                </a>
                <br />
                <a
                  href="http://www.google.com"
                  target="_chetan"
                  style={{ textDecoration: "none" }}
                >
                  CA Frontend
                </a>
                <br />
                <a
                  href="http://www.google.com"
                  target="_chetan"
                  style={{ textDecoration: "none" }}
                >
                  Chetan_github
                </a>
                <br />
                <a
                  href="http://www.google.com"
                  target="_chetan"
                  style={{ textDecoration: "none" }}
                >
                  Web Developer
                </a>
                <br />
                <a
                  href="http://www.google.com"
                  target="_chetan"
                  style={{ textDecoration: "none" }}
                >
                  Figma
                </a>
                <br />
                <a
                  href="http://www.google.com"
                  target="_chetan"
                  style={{ textDecoration: "none" }}
                >
                  Software Developer
                </a>
                <br />
              </div>
            </div>

            {/* right side */}

            <div className="col-md-8 pl-5">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row ">
                    <div className="col-md-6">
                      <label>User ID</label>
                    </div>
                    <div className="col-md-6 ">
                      <p>012365455</p>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-md-6 ">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6 ">
                      <p>{userData.name}</p>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-md-6 ">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6 ">
                      <p>{userData.email}</p>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-md-6 ">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6 ">
                      <p>{userData.phone}</p>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-md-6 ">
                      <label>Profession</label>
                    </div>
                    <div className="col-md-6 ">
                      <p>{userData.work}</p>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row mt-1">
                    <div className="col-md-6">
                      <label>Experience</label>
                    </div>
                    <div className="col-md-6 ">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6 ">
                      <label>Hourly Rate</label>
                    </div>
                    <div className="col-md-6 ">
                      <p>10$/hr</p>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6 ">
                      <label>Total Project</label>
                    </div>
                    <div className="col-md-6 ">
                      <p>10</p>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6 ">
                      <label>English Level</label>
                    </div>
                    <div className="col-md-6 ">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6 ">
                      <label>Availability</label>
                    </div>
                    <div className="col-md-6 ">
                      <p>6 months</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
