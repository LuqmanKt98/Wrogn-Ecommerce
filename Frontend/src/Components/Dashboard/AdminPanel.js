// Updated AdminPanel component
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderAdminPanel from "./HeaderAdminPanel";
import AddProducts from "./AddProducts";
import ViewProduct from "./ViewProduct";
import {Link} from "react-router-dom"

const AdminPanel = () => {
  const [displayContent, setDisplayContent] = useState("dashboard");

  const handleSidebarClick = (content) => {
    setDisplayContent(content);
  };

  return (
    <div className="container-fluid">
      <HeaderAdminPanel />

      <div className="row">
        {/* Sidebar */}
        <nav
          id="sidebar"
          className="col-md-3 col-lg-2 d-md-block bg-light sidebar"
        >
          <div className="position-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    displayContent === "dashboard" ? "active" : ""
                  }`}
                  onClick={() => handleSidebarClick("dashboard")}
                >
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    displayContent === "addProduct" ? "active" : ""
                  }`}
                  onClick={() => handleSidebarClick("addProduct")}
                >
                  Add Product
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    displayContent === "viewProduct" ? "active" : ""
                  }`}
                  onClick={() => handleSidebarClick("viewProduct")}
                >
                  View Product
                </Link>
              </li>
              {/* Add other sidebar items as needed */}
            </ul>
          </div>
        </nav>

        {/* Main content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">
              {displayContent === "dashboard"
                ? "Dashboard"
                : displayContent === "addProduct"
                ? "Add Product"
                : "View Product"}
            </h1>
          </div>

          {/* Conditionally render content based on the selected item in the sidebar */}
          {displayContent === "dashboard" && (
            <div className="card shadow p-4">
              {/* Dashboard content */}
              {/* ... */}
              <p>Dashboard Content Goes Here</p>
            </div>
          )}

          {displayContent === "addProduct" && <AddProducts />}
          {displayContent === "viewProduct" && <ViewProduct />}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
