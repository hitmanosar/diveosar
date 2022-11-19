import React from "react";
import m3 from "../photo/m3.png";
import z5 from "../photo/z5.png";
import m4 from "../photo/m4.png";
import Footer from "./footer";
import Nav from "./nav";
import team from "../photo/team.png";
import { Link } from "react-router-dom";
import worker from "../photo/worker.png";
import Fade from "react-reveal/Fade";
import RubberBand from "react-reveal/RubberBand";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./loading";

function Ourteam() {
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
      <React.Fragment>
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
          <span className="fs-3 fw-bold text-warning mt-4">Team</span>
        </div>

        <div className="instructor mt-5 bg-info p-5" id="our_team">
          <div className="row">
            <div className="col text-center">
              <RubberBand>
                {" "}
                <img src={team} width="20%" className="text-center" alt="" />
              </RubberBand>
            </div>
          </div>

          <div className="row mt-5 d-flex flex-column flex-md-row justify-content-center flex-lg-row  ">
            <Fade right>
              <div className="col-12 col-lg-3 col-md-6 col-sm-12 mt-2">
                <div class="card text-center p-2" style={{ width: "auto" }}>
                  <img src={worker} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Peter</h5>
                    <p class="card-text  opacity-75">
                      Peter is a Course Director and our company’s Founder
                    </p>{" "}
                    <hr />
                    <div className="d-flex flex-row justify-content-around mt-5">
                      <i class="fa-brands ss fa-facebook fa-2xl"></i>
                      <i class="fa-brands ss fa-twitter fa-2xl text-primary"></i>
                      <i class="fa-brands ss fa-instagram fa-2xl"></i>
                      <i class="fa-brands ss fa-google text-danger fa-2xl"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>

            <Fade right>
              <div className="col-12 col-lg-3 col-md-6 col-sm-12 mt-2">
                <div class="card text-center p-2" style={{ width: "auto" }}>
                  <img src={z5} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Kenneth </h5>
                    <p class="card-text  opacity-75">
                      Kenneth has been working with us since day one as
                      Divemaster.
                    </p>{" "}
                    <hr />
                    <div className="d-flex yy flex-row justify-content-around mt-5">
                      <i class="fa-brands ss fa-facebook fa-2xl"></i>
                      <i class="fa-brands ss fa-twitter fa-2xl text-primary"></i>
                      <i class="fa-brands ss fa-instagram fa-2xl"></i>
                      <i class="fa-brands ss fa-google text-danger fa-2xl"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>

            <Fade left>
              <div className="col-12 col-lg-3 col-md-6 col-sm-12 mt-2">
                <div class="card text-center  p-2" style={{ width: "auto" }}>
                  <img src={m3} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Grace</h5>
                    <p class="card-text opacity-75">
                      Grace is Divers’s PADI Open Water Scuba Instructor.
                    </p>{" "}
                    <hr />
                    <div className="d-flex flex-row justify-content-around mt-5">
                      <i class="fa-brands ss fa-facebook fa-2xl"></i>
                      <i class="fa-brands ss fa-twitter fa-2xl text-primary"></i>
                      <i class="fa-brands ss fa-instagram fa-2xl"></i>
                      <i class="fa-brands ss fa-google text-danger fa-2xl"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade left>
              <div className="col-12 col-lg-3 col-md-6 col-sm-12 mt-2">
                <div class="card text-center  p-2" style={{ width: "auto" }}>
                  <img src={m4} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Gary</h5>
                    <p class="card-text  opacity-75">
                      Gary is Divers’s Specialty Instructor Trainer who joined
                      us in 2010.
                    </p>{" "}
                    <hr />
                    <div className="d-flex flex-row justify-content-around mt-5">
                      <i class="fa-brands ss fa-facebook fa-2xl"></i>
                      <i class="fa-brands ss fa-twitter fa-2xl text-primary"></i>
                      <i class="fa-brands ss fa-instagram fa-2xl"></i>
                      <i class="fa-brands ss fa-google text-danger fa-2xl"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Ourteam;
