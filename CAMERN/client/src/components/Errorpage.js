import React from "react";
import Error from "../images/404.jpg";
import { NavLink } from "react-router-dom";

const Errorpage = () => {
  return (
    <>
      <div className="container error-page">
        <div className="row text-center">
          <div className="col-lg-6 offset-lg-3 col-sm-6 offset-sm-3 col-12 p-3 error-main">
            <div className="row">
              <div className="col-lg-8 col-12 col-sm-10 offset-lg-2 offset-sm-1">
                <img src={Error} alt="Error-page" />
                <h6>Page Not Found</h6>
                <p>
                  Sorry, We couldn't find
                  <span className="text-info"> the page</span> you are
                  <span className="text-info"> looking</span> for
                  <span className="text-info"> :(</span>
                </p>
                <NavLink to="/">
                  <button className="error-btn edit-btn">Go To Home</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Errorpage;
