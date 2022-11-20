import React from "react";
import Nav from "./nav";
import "../style/home.css";
import Footer from "./footer";
import m3 from "../photo/m3.png";
import z5 from "../photo/z5.png";
import m2 from "../photo/m2.png";
import m4 from "../photo/m4.png";
import ab from "../photo/ab.png";
import { Link } from "react-router-dom";
import "../style/about.css";
import c3 from "../photo/c3.jpg";
import c4 from "../photo/c4.jpg";
import l1 from "../photo/l1.jpeg";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Flash from "react-reveal/Flash";
import RubberBand from "react-reveal/RubberBand";
import Typed from "react-typed";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./loading";

function About() {
  const [loads, setloads] = useState(true);

  useEffect(() => {
   
      console.log("loading finished");

      setTimeout(() => {
        setloads(false);
      }, 1000);
  
  },[]);


  

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
  }
   
   else { return (

   
   
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
          <span className="fs-3 fw-bold text-warning mt-4">About</span>
        </div>

        <div className="container bg-danger abs rounded mt-5 text-white p-5">
          <div className="row">
            <div className="col text-center">
              <Zoom>
                <img src={ab} width="20%" className="text-center" alt="" />
              </Zoom>
            </div>
          </div>
          <div className="row mt-5 d-flex flex-row justify-content-around">
            <div className="mt-5 col-12 col-lg-5 col-md-12">
              <Fade right>
                <h1 className="text-center text-white">
                  {" "}
                  <Typed
                    strings={[" About Diving", "About Roba Scuba", "About Us"]}
                    typeSpeed={80}
                    backSpeed={50}
                    loop
                  />
                </h1>{" "}
                <br />
                <p className="text-white abc">
                  Our agency provides first-class equipment for all our clients,
                  regardless of their level. We offer a variety of destinations
                  including the most exotic ones located all over the world. We
                  pay a lot of attention to divers’ safety at all times, as
                  there’s always some risk involved in it. We are a team of
                  talented and experienced diving instructors always ready to
                  help you.
                </p>
                <br />
                <div class="se">
                  <div class="cubes">
                    <span class="sides tops"> Our Mission</span>
                    <span class="sides fronts">View</span>
                  </div>
                </div>
              </Fade>
            </div>

            <Fade left>
              <div className="mt-5 col-12  col-lg-5 col-md-12">
                <h3>Postivie reviews</h3>
                <div class="progress">
                  <div
                    class="progress-bar progress-bar-striped bg-primary progress-bar-animated"
                    role="progressbar"
                    style={{ width: 80 + "%" }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    80%
                  </div>
                </div>{" "}
                <br /> <br />
                <h3>Order Completed on Time</h3>
                <div class="progress">
                  <div
                    class="progress-bar progress-bar-striped bg-primary progress-bar-animated"
                    role="progressbar"
                    style={{ width: 100 + "%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    100%
                  </div>
                </div>{" "}
                <br /> <br />
                <h3>Regular Customers</h3>
                <div class="progress">
                  <div
                    class="progress-bar progress-bar-striped bg-primary progress-bar-animated"
                    role="progressbar"
                    style={{ width: 50 + "%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    50%
                  </div>
                </div>{" "}
                <br /> <br />
              </div>
            </Fade>
          </div>
        </div>

        <img
          src={l1}
          width="100%"
          height="300px"
          className="img img-fluid mt-5"
          alt=""
        />

        <div className="container-fluid mt-5 bg-white p-5">
          <div className="row d-flex flex-column flex-lg-row flex-md-column justify-content-evenly align-items-center">
            <div className="col-12 col-lg-4 col-md-12">
              <Slide left>
                <img src={c3} className="img-fluid rounded" alt="" /> <br />{" "}
                <br />
              </Slide>
              <Slide right>
                <img src={c4} className="img-fluid rounded" alt="" />
              </Slide>
            </div>

            <div className="col-12 col-lg-8 col-md-12 text-center mt-3">
              <Flash>
                <h1>
                  {" "}
                  <Typed
                    strings={[" Our History"]}
                    typeSpeed={80}
                    backSpeed={50}
                    loop
                  />
                </h1>{" "}
                <br />
                <h4> 1980</h4>
                <p>
                  We gained additional support from government in California,
                  Nevada, Florida, and other US States.
                </p>{" "}
                <br />
                <h4> 1985</h4>
                <p>
                  With development of technology, demand on our products
                  increased.
                </p>{" "}
                <br />
                <h4>1990</h4>
                <p>
                  We purchased the biggest industrial plant of Northwest - the
                  Smith and Anderson Plant located in Seattle, WA.
                </p>{" "}
                <br />
                <h4>2001</h4>
                <p>
                  Due to the growing population in the Eastern part of the USA,
                  we decided to construct our fourth plant in Georgia.
                </p>{" "}
                <br />
                <h4> 2016</h4>
                <p>
                  Today we have ambituous plans concerning our further
                  development in the US as well as opening plant in Europe.
                </p>
              </Flash>
            </div>
          </div>
        </div>

        {/* need our team !!!!!! */}

        <div className="instructor mt-5 bg-info p-5" id="our_team">
          <RubberBand>
            {" "}
            <h1 className="text-center">
              {" "}
              <Typed
                strings={["Our Team"]}
                typeSpeed={80}
                backSpeed={50}
                loop
              />
            </h1>
          </RubberBand>

          <div className="row mt-4 d-flex flex-column flex-md-row justify-content-center flex-lg-row  ">
            <Fade right>
              <div className="col-12 col-lg-3 col-md-6 col-sm-12 mt-2">
                <div class="card text-center p-2" style={{ width: "auto" }}>
                  <img src={m2} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">James</h5>
                    <p class="card-text  opacity-50">CEO </p>
                    <p class="card-text opacity-75">
                      James brings to Diving more than 30 years’ experience - 20
                      as the company employee, and 10 as vice-president,
                      president, and owner.
                    </p>{" "}
                    <hr />
                  </div>
                </div>
              </div>
            </Fade>

            <Fade right>
              <div className="col-12 col-lg-3 col-md-6 col-sm-12 mt-2">
                <div class="card text-center p-2" style={{ width: "auto" }}>
                  <img src={z5} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title ">Robert </h5>
                    <p class="card-text opacity-50">
                      Head of Innovation Department
                    </p>
                    <p class="card-text opacity-75">
                      Robert and his team of researchers, engineers, and
                      scientists prove that even in tough market conditions,
                      there is always a place for industrial innovations.
                    </p>{" "}
                    <hr />
                  </div>
                </div>
              </div>
            </Fade>

            <Fade left>
              <div className="col-12 col-lg-3 col-md-6 col-sm-12 mt-2">
                <div class="card text-center p-2" style={{ width: "auto" }}>
                  <img src={m3} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title"> Freya</h5>
                    <p class="card-text opacity-50">Office Manager</p>
                    <p class="card-text opacity-75">
                      Freya has spent 10 years ensuring the Diving office runs
                      smoothly and efficiently as it is an essential part of our
                      company’s success.
                    </p>{" "}
                    <hr />
                  </div>
                </div>
              </div>
            </Fade>

            <Fade left>
              <div className="col-12 col-lg-3 col-md-6 col-sm-12 mt-2">
                <div class="card text-center p-2" style={{ width: "auto" }}>
                  <img src={m4} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title"> William</h5>
                    <p class="card-text opacity-50">Head of Purchasing </p>
                    <p class="card-text opacity-75">
                      Our purchasing representative and later, oversaw shipping
                      and receiving. He trained internally, bringing to the
                      company experience and knowledge.
                    </p>{" "}
                    <hr />
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

export default About;
