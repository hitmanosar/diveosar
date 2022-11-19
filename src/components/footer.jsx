import React from "react";
import c1 from "../photo/c1.jpg";
import c2 from "../photo/c2.jpg";
import c3 from "../photo/c3.jpg";
import c4 from "../photo/c4.jpg";
import c5 from "../photo/c5.jpg";
import c6 from "../photo/c6.jpg";
import c7 from "../photo/c7.jpg";
import c8 from "../photo/c8.jpg";
import "../style/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="foot bg-white mt-5 p-3">
      <div className="row d-flex text-center flex-column justify-content-evenly flex-lg-row flex-md-column">
        <div className="col-12 fimg col-lg-3 col-md-12 mt-5">
          <h3>Gallery</h3> <br />
          <img src={c1} className="img-fluid mx-1" width="27%" alt="" />
          <img src={c2} className="img-fluid mx-1" width="27%" alt="" />
          <img
            src={c3}
            className="img-fluid mx-1"
            width="27%"
            alt=""
          /> <br /> <p></p>
          <img src={c4} className="img-fluid mx-1" width="27%" alt="" />
          <img src={c5} className="img-fluid mx-1" width="27%" alt="" />
          <img
            src={c6}
            className="img-fluid mx-1"
            width="27%"
            alt=""
          /> <br /> <p></p>
          <img src={c7} className="img-fluid mx-1" width="27%" alt="" />
          <img src={c8} className="img-fluid mx-1" width="27%" alt="" />
        </div>

        <div className="col-12 col-lg-3 faa col-md-12  d-flex  flex-column mt-5">
          <h3>Quick links</h3> <br />
          {/* <a href="" className="fs-5 mt-1">About</a> */}
          <Link className="fs-5 mt-1" to="/about">
            About
          </Link>
          <Link className="fs-5 mt-1" to="/offer">
            What we offer
          </Link>
          <Link className="fs-5 mt-1" to="/ourteam">
            Instructor
          </Link>
          <Link className="fs-5 mt-1" to="/faqs">
            FAQ
          </Link>
          <Link className="fs-5 mt-1" to="/blog">
            Blog
          </Link>
          <Link className="fs-5 mt-1" to="/gallery">
            Gallery
          </Link>
          <Link className="fs-5 mt-1" to="/pricing">
            Pricing
          </Link>
          <Link className="fs-5 mt-1" to="/contact">
            Contact
          </Link>
        </div>

        <div className="col-12 col-lg-3 col-md-12 mt-5">
          <h3>Get in Touch</h3> <br />
          <span>
            <i class="fa-solid fa-location-dot text-warning fa-xl"></i>
          </span>{" "}
          <p>523 Sylvan Ave, 5th Floor Mountain View, CA 94041 USA</p>
          <span>
            <i class="fa-solid fa-phone text-warning fa-xl"></i>
          </span>{" "}
          <p>(+844) 123 456 78</p>
          <span>
            <i class="fa-solid fa-envelope text-warning fa-xl"></i>
          </span>{" "}
          <p>info@demolink.org</p>
          <div className="d-flex flex-row justify-content-around mt-5">
            <i class="fa-brands ss fa-facebook fa-2xl"></i>
            <i class="fa-brands ss fa-twitter fa-2xl text-primary"></i>
            <i class="fa-brands ss fa-instagram fa-2xl"></i>
            <i class="fa-brands ss fa-google text-danger fa-2xl"></i>
          </div>
        </div>
      </div>

      <hr className="mt-5" />

      <div className="row">
        <div className="col">
          <p className="text-center">
            © 2022 All Rights Reserved Terms of Use and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
