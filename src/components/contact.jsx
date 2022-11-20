import React from "react";
import Nav from "./nav";
import Footer from "./footer";
import conss from "../photo/conss.png";
import { Link } from "react-router-dom";
import RubberBand from "react-reveal/RubberBand";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./loading";

function Contact() {
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
          </span>
          <span className="fs-3 fw-bold text-warning mt-4">Contact</span>
        </div>

        <div className="container bg-white p-5  mt-5 rounded">
          <div className="row">
            <div className="col text-center">
              <RubberBand>
                {" "}
                <img src={conss} width="20%" className="text-center" alt="" />
              </RubberBand>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <h3> Address:</h3>
              <span>
                <i class="fa-solid fa-building text-primary  mx-2 "></i>
              </span>{" "}
              <span>138 Atlantis Ln Kingsport Illinois 121164</span> <br />{" "}
              <br />
              <h3>Phones:</h3>
              <span>
                <i class="fa-solid fa-phone-volume text-primary   mx-2"></i>
              </span>
              <span>800-2345-6789</span> <br />
              <span>
                <i class="fa-solid fa-phone text-primary   mx-2"></i>
              </span>{" "}
              <span>800-2345-6789</span> <br /> <br />
              <h3>E-mail:</h3>
              <span>
                <i class="fa-sharp fa-solid fa-envelope text-primary  mx-2"></i>
              </span>{" "}
              <span>mail@demolink.org</span> <br />
              <span>
                <i class="fa-sharp fa-solid fa-paper-plane text-primary  mx-2"></i>
              </span>{" "}
              <span>mail@demolink.org</span>
            </div>
          </div>{" "}
          <br />
          <hr />
          <div className="col mt-5">
            <h3>Miscellaneous information:</h3>
            <p>
              Email us with any questions or inquiries or use our contact data.
            </p>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  required
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                  required
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" class="btn btn-info px-4 py-2">
                Submit
              </button>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Contact;
