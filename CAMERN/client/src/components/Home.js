import React, { useState, useEffect } from "react";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);

  const userHomePage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      // console.log(data);
      setUserName(data.name);
      setShow(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userHomePage();
  }, []);
  return (
    <>
      <header className="page-header header container-fluid">
        <div className="home-page">
          <div className="home-cont">
            <p
              className="pt-5"
              style={{
                color: "darkviolet",
                fontFamily: "sans-serif",
                fontWeight: "700",
                letterSpacing: "2.2px",
              }}
            >
              WELCOME
            </p>
            <h1 style={{ color: "#484be9" }}>{userName}</h1>
            <h2>
              {show ? "Happy, To See You Back" : "We Are The MERN Developer."}
            </h2>
          </div>
        </div>
      </header>
    </>
  );
};

export default Home;
