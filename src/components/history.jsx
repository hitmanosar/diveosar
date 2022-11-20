import React from "react";
import Nav from "./nav";
import Footer from "./footer";
import his from "../photo/his.png";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import RubberBand from "react-reveal/RubberBand";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./loading";

function History() {
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
          <span className="fs-3 fw-bold text-warning mt-4">History</span>
        </div>

        <div className="container his mt-5 rounded  p-3">
          <div className="row d-flex flex-column ">
            <div className="col text-center">
              <RubberBand>
                {" "}
                <img src={his} width="20%" className="text-center" alt="" />
              </RubberBand>
            </div>
            <div className="col mt-4">
              <Fade left>
                <h3 className="text-primary">Our first steps on the market</h3>
                <br />
                <p className="text-white">
                  Our history begins back in 1998, when the first European
                  office was opened in Cham, Switzerland, by the Anglo-Swiss
                  Company. The founder of the company, himself an immigrant from
                  Germany, was instrumental in turning his Company towards
                  international expansion from the very start. We owe more than
                  our name, our logo and our first product to our founder. He
                  embodied many of the key attitudes and values that form part
                  and parcel of our corporate culture: pragmatism, flexibility,
                  the willingness to learn, an open mind and respect for other
                  people and cultures.
                </p>
              </Fade>
            </div>

            <div className="col mt-4">
              <Fade right>
                <h3 className="text-primary">Further development</h3>
                <br />
                <p className="text-white">
                  Continuous innovation and rapid transformation have been
                  themes throughout our history, which the company traces to the
                  1998 with the installation of the first computer system for
                  commercial use in the United States at General Electric’s Park
                  facility. The company has built its solid reputation thanks to
                  thorough employees selection. By the 2001, the company began
                  offering a new breed of solutions to clients - solutions that
                  aligned organizations' technologies, processes and people with
                  their strategies.
                </p>
              </Fade>
            </div>

            <div className="col mt-4">
              <Fade left>
                <h3 className="text-primary">Company acquisition</h3>
                <br />
                <p className="text-white">
                  In 2009 the Co Name Group was acquired from Co Name, thereby
                  creating one of the leading European companies. At the time of
                  the acquisition, Co Name Group employed 20,000 staff and
                  generated annual revenues of approximately EUR 2.4 billion. Co
                  Name employed 26,500 staff, generating annual revenues of more
                  than EUR 3 billion. The acquisition of Co Name and the
                  beneficial partnership is the logical continuation of the
                  company strategy. With a workforce of more than 48,000
                  employees, Co Name generated revenues of over EUR 5 billion
                  during the year.
                </p>
              </Fade>
            </div>

            <div className="col mt-4">
              <Fade right>
                <h3 className="text-primary">Our first steps on the market</h3>
                <br />
                <p className="text-white">
                  Our history begins back in 1998, when the first European
                  office was opened in Cham, Switzerland, by the Anglo-Swiss
                  Company. The founder of the company, himself an immigrant from
                  Germany, was instrumental in turning his Company towards
                  international expansion from the very start. We owe more than
                  our name, our logo and our first product to our founder. He
                  embodied many of the key attitudes and values that form part
                  and parcel of our corporate culture: pragmatism, flexibility,
                  the willingness to learn, an open mind and respect for other
                  people and cultures.
                </p>
              </Fade>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default History;
