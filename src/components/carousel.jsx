import React from "react";
import c1 from "../photo/c1.jpg";
import c2 from "../photo/c2.jpg";
import c3 from "../photo/c3.jpg";
import "../style/carousel.css";
import Roll from "react-reveal/Roll";

function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel  slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={c1} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <Roll left>
                <h1 className="fs-1 fw-bolder">Enjoy Scuba Diving With Us</h1>
              </Roll>
              <Roll right>
                {" "}
                <p className="fs-4">
                  We offer a wide variety of scuba diving tours and locations
                  for everyone.
                </p>
              </Roll>
              <button className="btn bt btn-info border-0 fw-bolder btn-lg rounded-3">
                Get Started
              </button>
            </div>
          </div>
          <div class="carousel-item">
            <img src={c2} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <Roll left>
                <h1 className="fs-1 fw-bolder">
                  Best Equipment And Instructors
                </h1>
              </Roll>
              <Roll right>
                {" "}
                <p className="fs-4 ">
                  Our team and the top-notch equipment guarantee unforgettable
                  diving.
                </p>
              </Roll>
              <button className="btn bt btn-info border-0  fw-bolder   btn-lg rounded-3">
                Get Started
              </button>
            </div>
          </div>

          <div class="carousel-item">
            <img src={c3} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <Roll left>
                {" "}
                <h1 className="fs-1 fw-bolder">Enjoy Scuba Diving With Us</h1>
              </Roll>
              <Roll right>
                {" "}
                <p className="fs-4 ">
                  We offer a wide variety of scuba diving tours and locations
                  for everyone.
                </p>
              </Roll>
              <button className="btn bt btn-info border-0  fw-bolder  btn-lg rounded-3">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
