import React from "react";
import Footer from "./footer";
import Nav from "./nav";
import c6 from "../photo/c6.jpg";
import y1 from "../photo/y1.jpg";
import y3 from "../photo/y3.jpg";
import "../style/home.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import "swiper/css/autoplay";
import bb1 from "../photo/bb1.png";
import { Link } from "react-router-dom";
import RubberBand from "react-reveal/RubberBand";
import Swing from "react-reveal/Swing";
import Jump from "react-reveal/Jump";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./loading";

function Blog() {
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
          <span className="fs-3 fw-bold text-warning mt-4">Blog</span>
        </div>

        <div className="blog  mt-5  p-5" id="blog">
          <div className="row">
            <div className="col text-center">
              <RubberBand>
                {" "}
                <img src={bb1} width="20%" className="text-center" alt="" />
              </RubberBand>
            </div>
          </div>

          <div className="row  mt-4 d-flex flex-column flex-md-row justify-content-evenly flex-lg-row">
            <div className="col-12 col-lg-3 col-md-6 col-sm-12 mt-4">
              <div class="card border-0" style={{ width: "auto" }}>
                <Swing>
                  {" "}
                  <img src={y1} class="card-img-top" alt="..." />
                </Swing>
                <div class="card-body">
                  <Jump>
                    <p class="opacity-75">Jun 21, 2019</p> <p></p>
                    <h5 class="card-title">
                      New Caledonia: The Lagoon of All Hopes
                    </h5>{" "}
                    <br />
                    <p class="card-text opacity-75">
                      As we dived for the very first time in the lagoon of New
                      Caledonia, at Duck Island, with only our masks and fins...
                    </p>
                  </Jump>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-3 col-md-6 col-sm-12 mt-4">
              <div class="card border-0" style={{ width: "auto" }}>
                <Swing>
                  {" "}
                  <img src={y3} class="card-img-top" alt="..." />
                </Swing>
                <div class="card-body">
                  <Jump>
                    <p class="opacity-75">Apr 21, 2017</p> <p></p>
                    <h5 class="card-title">
                      Scuba Diving in Okinawa: A First-timer Guide
                    </h5>{" "}
                    <br />
                    <p class="card-text opacity-75">
                      It is one of these places where it is not so
                      straightforward to organize a scuba diving trip. There are
                      so many...
                    </p>
                  </Jump>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-3 col-md-6 col-sm-12 mt-4">
              <div class="card border-0" style={{ width: "auto" }}>
                <Swing>
                  {" "}
                  <img src={c6} class="card-img-top" alt="..." />
                </Swing>
                <div class="card-body">
                  <Jump>
                    <p class="opacity-75">May 10, 2020</p> <p></p>
                    <h5 class="card-title">
                      Shore Diving in Maui & Big Island
                    </h5>{" "}
                    <br />
                    <p class="card-text opacity-75">
                      The Hawaiian Archipelago is full of bucket list dives with
                      exciting adventures such as diving in the crater...
                    </p>{" "}
                  </Jump>
                  <p></p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Blog;
