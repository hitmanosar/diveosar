import React from "react";
import Nav from "./nav";
import Carousel from "./carousel";
import c1 from "../photo/c1.jpg";
import c2 from "../photo/c2.jpg";
import c3 from "../photo/c3.jpg";
import c5 from "../photo/c5.jpg";
import c6 from "../photo/c6.jpg";
import c7 from "../photo/c7.jpg";
import c8 from "../photo/c8.jpg";
import y1 from "../photo/y1.jpg";
import y3 from "../photo/y3.jpg";
import b1 from "../photo/b1.jpg";
import b2 from "../photo/b2.jpg";
import "../style/home.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { EffectCube, Autoplay, EffectCards } from "swiper";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cube";
import "swiper/css/autoplay";
import Footer from "./footer";
import e1 from "../photo/e1.png";
import e2 from "../photo/e2.png";
import e3 from "../photo/e3.png";
import e4 from "../photo/e4.png";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import l1 from "../photo/l1.png";
import l2 from "../photo/l2.png";
import l3 from "../photo/l3.png";
import z1 from "../photo/z1.png";
import z2 from "../photo/z2.png";
import z4 from "../photo/z4.png";
import z5 from "../photo/z5.png";
import m1 from "../photo/m1.png";
import m3 from "../photo/m3.png";
import m4 from "../photo/m4.png";
import t1 from "../photo/t1.png";
import g1 from "../photo/g1.png";
import bb1 from "../photo/bb1.png";
import worker from "../photo/worker.png";
import blog from "../photo/blog.jpg";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import RubberBand from "react-reveal/RubberBand";
import { Slide } from "react-reveal";
import Spin from "react-reveal/Spin";
import Swing from "react-reveal/Swing";
import Jump from "react-reveal/Jump";
import Tada from "react-reveal/Tada";
import Typed from "react-typed";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./loading";

function Home() {
  const [count, setcount] = useState(false);

  const [loads, setloads] = useState(true);

  useEffect(() => {
    return () => {
      console.log("loading finished");

      setTimeout(() => {
        setloads(false);
      }, 1000);
    };
  });

  // if (loads == true) {
  //   return (
  //     <React.Fragment>
  //       <Nav />
  //       <div className="container d-flex align-items-center justify-content-center text-center mt-5 p-5 rounded">
  //         <Loading />
  //       </div>
  //       <Footer className="mt-5" />
  //     </React.Fragment>
  //   );
  // }
  
    return (
      <div>
        <Nav />
        <Carousel />

        <div className="container border border-white mt-5">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/BHngCr0NT0g"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className=" des container mt-5 p-5">
          <div className="row">
            <Fade left>
              <h1 className="text-center" style={{ color: "#00FF00" }}>
                {" "}
                <Typed
                  strings={["Destination"]}
                  typeSpeed={90}
                  backSpeed={50}
                  loop
                />
              </h1>
            </Fade>
          </div>

          <div className="row mt-3 d-flex flex-column flex-lg-row flex-md-row justify-content-around text-center">
            <Zoom>
              <div className="col-12 my-4 col-lg-4 col-md-5 col-sm-12">
                <div class="card bs" style={{ width: "auto" }}>
                  <img src={b2} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h4 class="card-title">Maldives</h4>
                    <p class="card-text  opacity-75">
                      True abundance of marine life
                    </p>
                    <button class="learn-more">
                      <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                      </span>
                      <span class="button-text btn ">Read More</span>
                    </button>
                  </div>
                </div>
              </div>
            </Zoom>

            <Zoom>
              <div className="col-12 my-4 col-lg-4 col-md-5 col-sm-12">
                <div class="card bs" style={{ width: "auto" }}>
                  <img src={b1} class="card-img-top" alt="..." />
                  <span></span>
                  <div class="card-body">
                    <h4 class="card-title">Indonesia</h4>
                    <p class="card-text  opacity-75">
                      Unique marine diversity.
                    </p>
                    <button class="learn-more">
                      <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                      </span>
                      <span class="button-text btn ">Read More</span>
                    </button>
                    <p></p>
                    <p></p>
                  </div>
                </div>
              </div>
            </Zoom>

            <Zoom>
              <div className="col-12  my-4 col-lg-4 col-md-5 col-sm-12">
                <div class="card bs" style={{ width: "auto" }}>
                  <img src={c1} class="card-img-top" alt="..." /> <span></span>
                  <div class="card-body">
                    <h4 class="card-title">Thai Land</h4>
                    <p class="card-text  opacity-75">
                      The world’s scuba destination.
                    </p>
                    <button class="learn-more">
                      <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                      </span>
                      <span class="button-text btn ">Read More</span>
                    </button>
                    <p></p>
                    <p></p>
                    <p></p>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>
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

        <ScrollTrigger
          onEnter={() => setcount(true)}
          onExit={() => setcount(false)}
        >
          <div className="client2 container rounded  text-white fw-bolder mt-5 p-5 text-center">
            <div className="row d-flex flex-column flex-lg-row flex-md-column">
              <div className="col-12 col-lg-3 col-md-12  mt-3">
                {count && (
                  <h1 className="text-white">
                    {" "}
                    <CountUp delay={0} end={545} duration={2} />{" "}
                  </h1>
                )}
                <h3 className="text-warning">Monthly client</h3>
              </div>

              <div className="col-12 col-lg-3 col-md-12   mt-3">
                {count && (
                  <h1 className="text-white">
                    {" "}
                    <CountUp delay={0} end={675} duration={2} />{" "}
                  </h1>
                )}
                <h3 className="text-warning">Special offer</h3>
              </div>

              <div className="col-12 col-lg-3 col-md-12   mt-3">
                {count && (
                  <h1 className="text-white">
                    {" "}
                    <CountUp delay={0} end={795} duration={2} />{" "}
                  </h1>
                )}
                <h3 className="text-warning">Positive review</h3>
              </div>

              <div className="col-12 col-lg-3 col-md-12  mt-3">
                {count && (
                  <h1 className="text-white">
                    {" "}
                    <CountUp delay={0} end={1005} duration={2} />{" "}
                  </h1>
                )}
                <h3 className="text-warning">Partner Throughout</h3>
              </div>
            </div>
          </div>
        </ScrollTrigger>

        <div className="bg-white  mt-5 p-5 ">
          <div className="row d-flex flex-column flex-lg-row flex-md-column justify-content-around align-items-center">
            <div className="col-12 col-lg-6 col-md-12 col-sm-12 ">
              <Swiper
                // install Swiper modules
                modules={[
                  Navigation,
                  Pagination,
                  Scrollbar,
                  A11y,
                  EffectCube,
                  Autoplay,
                ]}
                effect="cube"
                loop={true}
                speed={1300}
                autoplay={{ delay: 2000 }}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
              >
                <SwiperSlide>
                  {" "}
                  <img
                    src={c1}
                    className="img-fluid rounded"
                    width="100%"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={c1}
                    className="img-fluid rounded"
                    width="100%"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img
                    src={c1}
                    className="img-fluid rounded"
                    width="100%"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={c1}
                    className="img-fluid rounded "
                    width="100%"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="col-12 col-lg-5 col-md-12 col-sm-12 mt-3">
              <Spin>
                <h1 className="text-center">
                  {" "}
                  <Typed
                    strings={["Why Choose Divers"]}
                    typeSpeed={80}
                    backSpeed={50}
                    loop
                  />
                </h1>{" "}
                <p></p>
              </Spin>
              <details className="dd">
                <summary>20+ Years of Experience in Diving</summary> <p></p>
                <p className="cc">
                  Our instructors have more than 20 years of experience in
                  diving. It makes us the #1 choice among travelers who are
                  looking for unforgettable and 100% safe diving experience with
                  advice from the best divers.
                </p>
              </details>
              <br />
              <details className="dd">
                <summary>Carefully Chosen Team of Instructors</summary>
                <p></p>
                <p className="cc">
                  Our experienced team of Diving Professionals all have over 15
                  years of diving experience and have been professionally
                  certified. Our team includes the most experienced SSI
                  instructors in the world who are always happy to help you.
                </p>
              </details>
              <br />
              <details className="dd">
                <summary>Affordable Prices</summary>
                <p></p>
                <p className="cc">
                  Divers Center has an affordable pricing policy that allows us
                  to offer the best diving tours and services at reasonable
                  prices. This is one of many reasons why divers from all over
                  US choose our center to dive & travel while also saving a lot
                  of money
                </p>
              </details>
            </div>
          </div>
        </div>

        <div className="free container rounded bg-warning mt-5 text-center p-5">
          <div className="row d-flex flex-column flex-lg-row justify-content-around">
            <RubberBand>
              <div className="col-12 col-lg-3 col-md-12 col-sm-12 rounded bg-white mt-3 p-3">
                <span>
                  {" "}
                  <img src={l1} width="40%" alt="" />
                </span>
                <h4 className="mt-2">Different Locations</h4>
                <p className="opacity-75">A wide variety of destinations</p>
              </div>
            </RubberBand>

            <RubberBand>
              <div className="col-12 col-lg-3 col-md-12 col-sm-12 rounded bg-white p-3  mt-3">
                <span>
                  {" "}
                  <img src={l2} width="40%" alt="" />
                </span>
                <h4 className="mt-2">Free Transfer</h4>
                <p className="opacity-75">We offer free transfer to Divers</p>
              </div>
            </RubberBand>

            <RubberBand>
              <div className="col-12 col-lg-3 col-md-12 col-sm-12 rounded bg-white p-3  mt-3">
                <span>
                  {" "}
                  <img src={l3} width="40%" alt="" />
                </span>
                <h4 className="mt-2">Online Payments</h4>
                <p className="opacity-75">Pay for any diving tour online</p>
              </div>
            </RubberBand>
          </div>
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
          </div>
        </div>

        <div className="new bg-warning container rounded  p-5 mt-5 text-center ">
          <div className="row ">
            <div className="col-12 col-lg-4 mt-2">
              <h3>Newsletter</h3>
              <p className="opacity-75">Subscribe to our newsletter</p>
            </div>

            <div className="col-12 col-lg-4 mt-2 ">
              <input
                type="text"
                className="px-3 py-3 b3 rounded"
                placeholder="Enter your email address"
              />
            </div>

            <div className="col-12 col-lg-4 mt-3">
              <RubberBand>
                <button className="bb">
                  <span class="shadow"></span>
                  <span class="edge"></span>
                  <span class="front text"> SUBSCRIBE</span>
                </button>
              </RubberBand>
            </div>
          </div>
        </div>

        <div className="instructor mt-5 bg-info p-5" id="our_team">
          <RubberBand>
            {" "}
            <h1 className="text-center">
              {" "}
              <Typed
                strings={["Our Instructors"]}
                typeSpeed={80}
                backSpeed={50}
                loop
              />{" "}
            </h1>
          </RubberBand>
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
      </div>
    );
  
}

export default Home;
