import React from "react";
import Nav from "./nav";
import Footer from "./footer";
import faq from "../photo/faq.png";
import { Link } from "react-router-dom";
import RubberBand from "react-reveal/RubberBand";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./loading";

function Faqs() {
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
          </span>{" "}
          <span className="fs-3 fw-bold text-warning mt-4">FAQS</span>
        </div>

        <div className="container faqss bg-white p-5 rounded mt-5">
          <div className="col text-center">
            <RubberBand>
              {" "}
              <img src={faq} width="20%" className="text-center" alt="" />
            </RubberBand>
          </div>
          <Flip left>
            {" "}
            <h2 className="mt-4">Frequently asked questions</h2> <br />
          </Flip>
          <Fade right>
            {" "}
            <p>
              {" "}
              If you need help, we have a list of frequently asked questions and
              answers. We strive to give you the best buying experience
              possible. Click a question below to view the answer.
            </p>
          </Fade>
          <br />
          <details className="dd">
            <summary>1. How can I change something in my order?</summary>{" "}
            <p></p>
            <p className="cc">
              If you need to change something your order, please contact us
              immediately. We usually process orders within 2-4 hours, and once
              we have processed your order, we will be unable to make any
              changes.
            </p>
          </details>
          <br />
          <details className="dd">
            <summary>2. How can I pay for my order?</summary> <p></p>
            <p className="cc">
              We accept Visa, MasterCard, and American Express credit and debit
              cards for your convenience.
            </p>
          </details>
          <br />
          <details className="dd">
            <summary>3. Can I track my order?</summary> <p></p>
            <p className="cc">
              Yes, you can! After placing your order you will receive an order
              confirmation via email. Each order starts production 24 hours
              after your order is placed. Within 72 hours of you placing your
              order, you will receive an expected delivery date. When the order
              ships, you will receive another email with the tracking number and
              a link to trace the order online with the carrier.
            </p>
          </details>
          <br />
          <details className="dd">
            <summary>4. Can I return an item?</summary> <p></p>
            <p className="cc">
              Please visit our Returns & Exchanges page for more information.
            </p>
          </details>
          <br />
          <details className="dd">
            <summary>5. How long will my order take to be delivered?</summary>{" "}
            <p></p>
            <p className="cc">
              Delivery times will depend on your location. Once payment is
              confirmed your order will be packaged. Delivery can be expected
              within 10 business days.
            </p>
          </details>
          <br />
          <details className="dd">
            <summary>
              6. Do I need an account and what are the benefits?
            </summary>{" "}
            <p></p>
            <p className="cc">
              It's not required to create an account. But, having an account
              provides easier checkout, the ability to create and send a
              wishlist, and a customized shopping experience.
            </p>
          </details>
          <br />
        </div>

        <Footer />
      </div>
    );
  }
}

export default Faqs;
