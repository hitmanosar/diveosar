import React from "react";
import Nav from "./nav";
import Footer from "./footer";
import price from "../photo/price.png";
import { Link } from "react-router-dom";
import "../style/price.css";
import Shake from "react-reveal/Shake";
import RubberBand from "react-reveal/RubberBand";
import Typed from "react-typed";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./loading";

function Pricing() {
  const [loads, setloads] = useState(true);

  useEffect(() => {
    return () => {
      console.log("loading finished");

      setTimeout(() => {
        setloads(false);
      }, 1000);
    };
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
      <div>
        <Nav />
        <div className="ii text-center">
          <span>
            {" "}
            <Link
              className="fs-3 fw-bold text-white"
              style={{ textDecoration: "none" }}
              to="/"
            >
              Home
            </Link>{" "}
          </span>
          <span className="fs-3 fw-bold text-warning mt-4">Pricing</span>
        </div>

        <div className="container p-5">
          <div className="row">
            <div className="col text-center">
              <RubberBand>
                {" "}
                <img src={price} width="20%" className="text-center" alt="" />
              </RubberBand>
            </div>
          </div>
          <h1 className="text-center text-danger mt-4">
            {" "}
            <Typed strings={["Detailed"]} typeSpeed={80} backSpeed={50} loop />
          </h1>
          <div className="row d-flex flex-row justify-content-around text-primary text-center mt-3">
            <Shake>
              <div className="col-12 col-lg-3 col-md-12 border border-danger p-4 mt-3">
                <h3>PERSONAL</h3>
                <hr />
                <h1>$2474</h1>
                <hr />
                <p>
                  1 INSTALL <br />
                  25K VISITS/MO. <br />
                  10GB LOCAL STORAGE <br />
                  UNLIMITED DATA TRANSFER
                </p>{" "}
                <br />
                <button className="sd">
                  <span>Order Now</span>
                  <i></i>
                </button>
              </div>
            </Shake>

            <Shake>
              <div className="col-12 col-lg-3 col-md-12 border border-danger p-4 mt-3">
                <h3>PROFESSIONAL</h3>
                <hr />
                <h1>$99</h1>
                <hr />
                <p>
                  10 INSTALLS <br />
                  100K VISITS/MO. <br />
                  20GB LOCAL STORAGE <br />
                  UNLIMITED DATA TRANSFER
                </p>{" "}
                <br />
                <button className="sd">
                  <span>Order Now</span>
                  <i></i>
                </button>
              </div>
            </Shake>

            <Shake>
              <div className="col-12 col-lg-3 col-md-12  border border-danger p-4 mt-3">
                <h3>BUSINESS</h3>
                <hr />
                <h1>$249</h1>
                <hr />
                <p>
                  25 INSTALLS <br />
                  400K VISITS/MO. <br />
                  30GB LOCAL STORAGE <br />
                  UNLIMITED DATA TRANSFER
                </p>{" "}
                <br />
                <button className="sd">
                  <span>Order Now</span>
                  <i></i>
                </button>
              </div>
            </Shake>
          </div>

          <h1 className="text-center text-danger mt-5">
            {" "}
            <Typed strings={["Simple"]} typeSpeed={80} backSpeed={50} loop />
          </h1>

          <div className="row d-flex flex-row justify-content-around text-primary text-center mt-3">
            <Shake>
              <div className="col-12 col-lg-3 col-md-12 border border-danger p-4 mt-3">
                <h3>Personal</h3> <br />
                <h1>$60</h1> <br />
                <button className="sd">
                  <span>Order Now</span>
                  <i></i>
                </button>
              </div>
            </Shake>

            <Shake>
              <div className="col-12 col-lg-3 col-md-12 border border-danger p-4  mt-3">
                <h3>PROFESSIONAL</h3> <br />
                <h1>$99</h1> <br />
                <button className="sd">
                  <span>Order Now</span>
                  <i></i>
                </button>
              </div>
            </Shake>

            <Shake>
              <div className="col-12 col-lg-3 col-md-12 border border-danger p-4  mt-3">
                <h3>BUSINESS</h3> <br />
                <h1>$249</h1> <br />
                <button className="sd">
                  <span>Order Now</span>
                  <i></i>
                </button>
              </div>
            </Shake>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Pricing;
