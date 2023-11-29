import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { badgeContext } from "../Context/BadgeState";

const headerStyles = {
  container: {
    backgroundColor: "#f0f0f0",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    fontFamily: "Helvetica Neue, sans-serif",
    fontSize: "14px",
  },
  navbar: {
    backgroundColor: "#f0f0f0",
  },
  navbarBrand: {
    fontFamily: "Helvetica Neue, sans-serif",
    fontSize: "24px",
    fontWeight: "bold",
    textDecoration: "none",
    color: "indigo",
  },
  linkStyles: {
    textDecoration: "none",
    color: "black",
    transition: "color 0.3s",
    fontSize: "14px", // Set a consistent font size
    fontWeight: "normal", // Set a consistent font weight
  },
  linkHover: {
    color: "indigo", // Set the hover color
  },
  searchInput: {
    border: "1px solid indigo",
    borderRadius: "5px",
  },
  searchButton: {
    backgroundColor: "indigo",
    border: "none",
    color: "white",
  },
};

function Header() {
  const { badgeCount, setBadgeCount } = useContext(badgeContext);

  return (
    <div
      style={headerStyles.container}
      className="container-fluid shadow bg-body-dark rounded mb-2"
    >
      <nav
        style={headerStyles.navbar}
        className="navbar navbar-expand-lg bg-body-tertiary"
      >
        <div className="container">
          <Link class="navbar-brand" to="/">
            <img
              src="Wrogn_logo.png"
              alt="WrognLogo"
              width="100"
            />
          </Link>
          <input type="checkbox" id="navbar-toggle" className="d-none" />
          <label htmlFor="navbar-toggle" className="navbar-toggler">
            <span className="navbar-toggler-icon"></span>
          </label>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search for Products"
                aria-label="Search"
                style={headerStyles.searchInput}
              />
              <button
                className="btn"
                type="submit"
                style={headerStyles.searchButton}
              >
                Search
              </button>
            </form>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/products"
                  style={headerStyles.linkStyles}
                  className="nav-link"
                >
                  PRODUCTS
                </Link>
              </li>
              <li class="nav-item dropdown" style={headerStyles.linkStyles}>
                <a
                  class="nav-link dropdown-toggle text-dark"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CATEGORIES
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="myAccountDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={headerStyles.linkStyles}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-person mb-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>{" "}
                  MY ACCOUNT
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="myAccountDropdown"
                >
                  <Link to="/login">
                    <button className="dropdown-item" type="button">
                      Login
                    </button>
                  </Link>
                  <Link to="/register">
                    <button className="dropdown-item" type="button">
                      Register
                    </button>
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/cart"
                  style={headerStyles.linkStyles}
                >
                  CART
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="16"
                    fill="currentColor"
                    className="bi bi-cart mb-2 ms-1"
                    viewBox="0 0 20 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>{" "}
                  <span className="position-relative translate-middle badge rounded-pill bg-danger">
                    {badgeCount}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
