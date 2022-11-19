import React from "react";
import Footer from "./footer";
import Nav from "./nav";
import e1 from "../photo/e1.png";
import e2 from "../photo/e2.png";
import e3 from "../photo/e3.png";
import e4 from "../photo/e4.png";
import { Link } from "react-router-dom";
import RubberBand from "react-reveal/RubberBand";
import { Slide } from "react-reveal";
import Typed from "react-typed";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./loading";

function Offer() {
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
          <span className="fs-3 fw-bold text-warning mt-4">Offer</span>
        </div>

        <div
          className="rounded container bgg text-white  mt-5  p-5"
          id="what_we"
        >
          <div className="row d-flex   flex-column dd text-center">
            <div className="col">
              <RubberBand>
                {" "}
                <img src={e1} width="15%" className="text-primary" alt="" />
              </RubberBand>
              <Slide right>
                <h1>
                  <Typed
                    strings={["Best Equipment "]}
                    typeSpeed={80}
                    backSpeed={50}
                    loop
                  />
                </h1>

                <p className="fs-4">
                  Our agency provides first-class equipment for all our clients,
                  regardless of their level.
                </p>
              </Slide>
            </div>{" "}
            <p></p> <hr />
            <div className="col mt-4">
              <RubberBand>
                {" "}
                <img src={e2} width="15%" className="text-primary" alt="" />
              </RubberBand>
              <Slide left>
                <h1>
                  <Typed
                    strings={["Exciting Places"]}
                    typeSpeed={80}
                    backSpeed={50}
                    loop
                  />
                </h1>
                <p className="fs-4">
                  We offer a variety of destinations including the most exotic
                  ones located all over the world.
                </p>
              </Slide>
            </div>{" "}
            <p></p> <hr />
            <div className="col mt-4">
              <RubberBand>
                {" "}
                <img src={e3} width="15%" className="text-primary" alt="" />
              </RubberBand>
              <Slide right>
                <h1>
                  {" "}
                  <Typed
                    strings={["100% Safety"]}
                    typeSpeed={80}
                    backSpeed={50}
                    loop
                  />
                </h1>
                <p className="fs-4">
                  We pay a lot of attention to divers’ safety at all times, as
                  there’s always some risk involved in it.
                </p>
              </Slide>
            </div>{" "}
            <p></p> <hr />
            <div className="col mt-4">
              <RubberBand>
                {" "}
                <img src={e4} width="15%" className="text-primary" alt="" />
              </RubberBand>
              <Slide left>
                <h1>
                  {" "}
                  <Typed
                    strings={["Instructors"]}
                    typeSpeed={80}
                    backSpeed={50}
                    loop
                  />
                </h1>
                <p className="fs-4">
                  We are a team of talented and experienced diving instructors
                  always ready to help you.
                </p>
              </Slide>
            </div>
          </div>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Offer;
