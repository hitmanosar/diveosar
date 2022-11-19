import React from "react";
import Footer from "./footer";
import Nav from "./nav";
import c1 from "../photo/c1.jpg";
import c2 from "../photo/c2.jpg";
import c3 from "../photo/c3.jpg";
import c4 from "../photo/c4.jpg";
import c5 from "../photo/c5.jpg";
import c6 from "../photo/c6.jpg";
import c7 from "../photo/c7.jpg";
import c8 from "../photo/c8.jpg";
import "../style/home.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import "swiper/css/autoplay";
import g1 from "../photo/g1.png";
import { Link } from "react-router-dom";
import next from "../photo/next.jpg";
import b1 from "../photo/b1.jpg";
import b1g from "../photo/b1g.jpg";
import blog from "../photo/blog.jpg";
import "../style/home.css";
import RubberBand from "react-reveal/RubberBand";
import { Slide } from "react-reveal";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./loading";

function Gallery() {
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
          <span className="fs-3 fw-bold text-warning mt-4">Gallery</span>
        </div>

        <div className="gallery  mt-5 p-5" id="gallery">
          <div className="row">
            <div className="col text-center">
              <RubberBand>
                {" "}
                <img src={g1} width="20%" className="text-center" alt="" />{" "}
              </RubberBand>
            </div>
          </div>
          <div className="row gg d-flex flex-row justify-content-center">
            <div className="col-12 col-lg-5 col-md-5 col-sm-12 mt-3">
              <Slide right>
                {" "}
                <img src={blog} className="img-fluid" width="100%" alt="" />
              </Slide>
            </div>

            <div className="col-12 col-lg-5 col-md-5 col-sm-12 mt-3">
              <Slide left>
                {" "}
                <img src={c5} className="img-fluid" width="100%" alt="" />{" "}
              </Slide>
            </div>

            <div className="col-12 col-lg-5 col-md-5 col-sm-12 mt-3">
              <Slide right>
                {" "}
                <img src={c6} className="img-fluid" width="100%" alt="" />
              </Slide>
            </div>

            <div className="col-12 col-lg-5 col-md-5 col-sm-12 mt-3">
              <Slide left>
                {" "}
                <img src={c7} className="img-fluid" width="100%" alt="" />
              </Slide>
            </div>

            <div className="col-12 col-lg-5 col-md-5 col-sm-12 mt-3">
              <Slide right>
                {" "}
                <img src={c8} className="img-fluid" width="100%" alt="" />
              </Slide>
            </div>

            <div className="col-12 col-lg-5 col-md-5 col-sm-12 mt-3">
              <Slide left>
                <img src={c1} className="img-fluid" width="100%" alt="" />
              </Slide>
            </div>

            <div className="col-12 col-lg-5 col-md-5 col-sm-12 mt-3">
              <Slide right>
                {" "}
                <img src={c2} className="img-fluid" width="100%" alt="" />
              </Slide>
            </div>

            <div className="col-12 col-lg-5 col-md-5 col-sm-12 mt-3">
              <Slide left>
                {" "}
                <img src={c3} className="img-fluid" width="100%" alt="" />
              </Slide>
            </div>

            <div className="col-12 col-lg-5 col-md-5 col-sm-12 mt-3">
              <Slide right>
                {" "}
                <img src={next} className="img-fluid" width="100%" alt="" />
              </Slide>
            </div>

            <div className="col-12 col-lg-5 col-md-5 col-sm-12 mt-3">
              <Slide left>
                {" "}
                <img src={c4} className="img-fluid" width="100%" alt="" />
              </Slide>
            </div>

            <div className="col-12 col-lg-5 col-md-5 col-sm-12 mt-3">
              <Slide right>
                {" "}
                <img src={b1} className="img-fluid" width="100%" alt="" />
              </Slide>
            </div>

            <div className="col-12 col-lg-5 col-md-5 col-sm-12 mt-3">
              <Slide left>
                {" "}
                <img src={b1g} className="img-fluid" width="100%" alt="" />
              </Slide>
            </div>
          </div>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Gallery;
