import React from "react";
import "../style/error.css";
import error from "../photo/error.png";
import Footer from "./footer";
import { Link } from "react-router-dom";
import Wobble from "react-reveal/Wobble";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./loading";
import Nav from "./nav";

function Error404() {
  const [loads, setloads] = useState(true);

  useEffect(() => {
    console.log("loading finished");

    setTimeout(() => {
      setloads(false);
    }, 1000);
  }, []);

  if (loads == true) {
    return (
      <React.Fragment>
        <Nav />
        <div className="container d-flex align-items-center justify-content-center text-center mt-5 p-5 rounded">
          <Loading />
        </div>
        <Footer className="mt-5" />
      </React.Fragment>
    );
  } else {
    return (
      <div className="err">
        <div className="container p-5">
          <div className="row d-flex flex-column justify-content-center text-center">
            <div className="col">
              <h1 className="text-center text-danger">
                Error 404 Page Not Found!
              </h1>
            </div>

            <div className="col">
              <Wobble>
                <img src={error} alt="" className="img-fluid" />
              </Wobble>
            </div>

            <div className="col mt-3">
              <Link className="fs-2 text-warning" to="/">
                Go Back
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Error404;
