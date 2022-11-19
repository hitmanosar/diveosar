import React from "react";
import "../style/nav.css";
import { Link } from "react-router-dom";
import l10 from "../photo/l10.png";

function Nav() {
  return (
    <div className="bg-dark">
      <nav class="navbar  navbar-expand-lg  navbar-light bg">
        <div class="container-fluid">
          <img
            src={l10}
            class="logo1 rounded border border-primary"
            alt="logo"
            width="10%"
          />
          <button
            class="navbar-toggler border border-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              {" "}
              <i class="fa-solid fa-regular fa-bars text-primary"></i>
            </span>
          </button>
          <div
            class="collapse navbar-collapse ml-5 "
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav  m-auto fs-5 text-center mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link active text-warning" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item sss">
                <Link className="nav-link active text-warning" to="/about">
                  About
                </Link>
              </li>

              <li class="nav-item dropdown ">
                <a
                  class="nav-link active dd text-warning dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul
                  class="dropdown-menu fs-5 text-center bg-dark border border-white"
                  aria-labelledby="navbarDropdown"
                >
                  <Link className="dropdown-item text-warning" to="/ourteam">
                    Our Instructor
                  </Link>

                  <Link
                    className="dropdown-item text-warning"
                    to="/testimonial"
                  >
                    Testimonial
                  </Link>

                  <li>
                    <Link
                      className="  dropdown-item text-warning"
                      to="/history"
                    >
                      History
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="  dropdown-item text-warning"
                      to="/pricing"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </li>
              <Link className="  nav-link active  text-warning" to="/blog">
                Blog
              </Link>
              <Link className="  nav-link active  text-warning" to="/gallery">
                Gallery
              </Link>

              <li className="nav-item">
                <Link className="nav-link active text-warning" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
