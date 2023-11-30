// Updated AdminPanel component
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderAdminPanel from "./HeaderAdminPanel";
import AddProducts from "./AddProducts";
import ViewProduct from "./ViewProduct";
import UpdateProduct from "./UpdateProduct";
import { Link } from "react-router-dom";
import DeleteProducts from "./DeleteProducts";

const AdminPanel = () => {
  // State to manage the displayed content
  const [displayContent, setDisplayContent] = useState("dashboard");

  // Function to handle sidebar item clicks
  const handleSidebarClick = (content) => {
    setDisplayContent(content);
  };

  // Function to get the page title based on the selected content
  const getPageTitle = () => {
    switch (displayContent) {
      case "dashboard":
        return "Dashboard";
      case "addProduct":
        return "Add Product";
      case "viewProduct":
        return "View Product";
      case "updateProduct":
        return "Update Product";
      case "deleteProduct":
        return "Delete Product";
      default:
        return "";
    }
  };

  return (
    <div className="container-fluid">
      {/* Header component */}
      <HeaderAdminPanel />

      <div className="row">
        {/* Sidebar */}
        <nav
          id="sidebar"
          className="col-md-3 col-lg-2 d-md-block bg-light sidebar"
        >
          <div className="position-sticky">
            <ul className="nav flex-column">
              {/* Render sidebar items dynamically */}
              {["Dashboard", "Add Product", "View Product", "Update Product", "Delete Products"].map(
                (content) => (
                  <li className="nav-item" key={content}>
                    <Link
                      to="#"
                      className={`nav-link ${
                        displayContent === content ? "active" : ""
                      }`}
                      onClick={() => handleSidebarClick(content)}
                    >
                      {content === "Delete Product" ? "Delete Product" : content}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </nav>

        {/* Main content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          {/* Page title */}
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">{getPageTitle()}</h1>
          </div>

          {/* Conditionally render content based on the selected item in the sidebar */}
          {displayContent === "Dashboard" && (
            <div className="card shadow p-4">
              {/* Dashboard content */}
              {/* ... */}
              <p>Dashboard Content Goes Here</p>
            </div>
          )}

          {displayContent === "Add Product" && <AddProducts />}
          {displayContent === "View Product" && <ViewProduct />}
          {displayContent === "Update Product" && <UpdateProduct />}
          {displayContent === "Delete Products" && <DeleteProducts />}
          {/* Add other content components for "Delete Product" as needed */}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
