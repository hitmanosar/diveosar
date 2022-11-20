import React from "react";
import Footer from "./footer";
import Nav from "./nav";
import "../style/home.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { EffectCube, Autoplay, EffectCards } from "swiper";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cube";
import "swiper/css/autoplay";
import z1 from "../photo/z1.png";
import z2 from "../photo/z2.png";
import z4 from "../photo/z4.png";
import m1 from "../photo/m1.png";
import t1 from "../photo/t1.png";
import { Link } from "react-router-dom";
import RubberBand from "react-reveal/RubberBand";
import Tada from "react-reveal/Tada";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./loading";

function Test() {
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
          <span className="fs-3 fw-bold text-warning mt-4">Testimonial</span>
        </div>

        <div className="test  bg-info mt-5 p-5 text-center" id="testi">
          <div className="row">
            <div className="col text-center">
              <RubberBand>
                {" "}
                <img src={t1} width="20%" className="text-center" alt="" />
              </RubberBand>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <Swiper
                className="mt-4 "
                modules={[
                  Navigation,
                  Pagination,
                  Scrollbar,
                  A11y,
                  EffectCube,
                  Autoplay,
                ]}
                loop={true}
                speed={1300}
                autoplay={{ delay: 1500 }}
                spaceBetween={20}
                slidesPerView={2}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
              >
                <SwiperSlide>
                  <h5 style={{ fontSize: 2 + "vw" }}>
                    You made us feel very welcome and you all were amazing.
                    Thank you!
                  </h5>
                  <Tada>
                    {" "}
                    <img
                      src={z1}
                      className="img-fluid  sss"
                      width="60%"
                      alt=""
                    />
                  </Tada>
                  <p style={{ fontSize: 2 + "vw" }}>
                    Larry <br />
                    Client
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <h5 style={{ fontSize: 2 + "vw" }}>
                    What a fantastic weekend spent with the amazingly friendly
                    team at Divers!
                  </h5>
                  <Tada>
                    {" "}
                    <img
                      src={m1}
                      className="img-fluid sss"
                      width="60%"
                      alt=""
                    />
                  </Tada>
                  <p style={{ fontSize: 2 + "vw" }}>
                    JAME SMITH <br />
                    Client
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <h5 style={{ fontSize: 2 + "vw" }}>
                    You made us feel very welcome and you all were amazing.
                    Thank you!
                  </h5>
                  <Tada>
                    {" "}
                    <img
                      src={z2}
                      className="img-fluid  sss"
                      width="60%"
                      alt=""
                    />
                  </Tada>
                  <p style={{ fontSize: 2 + "vw" }}>
                    SUZAN <br />
                    Client
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <h5 style={{ fontSize: 2 + "vw" }}>
                    What a fantastic weekend spent with the amazingly friendly
                    team at Divers!{" "}
                  </h5>
                  <Tada>
                    {" "}
                    <img
                      src={z4}
                      className="img-fluid  sss"
                      width="60%"
                      alt=""
                    />
                  </Tada>
                  <p style={{ fontSize: 2 + "vw" }}>
                    MOE
                    <br />
                    Client
                  </p>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Test;
