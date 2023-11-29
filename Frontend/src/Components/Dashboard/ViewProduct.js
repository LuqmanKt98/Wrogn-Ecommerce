// ViewProduct component
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ViewProduct = () => {
  return (
    <div className="container">
      <div className="card shadow">
        <div className="card-body">

          {/* Product Details */}
          <div className="row">
            <div className="col-md-6">
              {/* Product Image */}
              <img
                src="https://placekitten.com/300/200" // Replace with actual image source
                alt="Product"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              {/* Product Information */}
              <div className="mb-3">
                <strong>Product Name:</strong> Sample Product
              </div>
              <div className="mb-3">
                <strong>Product ID:</strong> 123456
              </div>
              <div className="mb-3">
                <strong>Product Price:</strong> $19.99
              </div>
              <div className="mb-3">
                <strong>Product Colors:</strong> Red, Blue
              </div>
              <div className="mb-3">
                <strong>Product Sizes:</strong> Medium, Large
              </div>
              <div className="mb-3">
                <strong>Product Category:</strong> Clothing
              </div>
            </div>
          </div>

          {/* Back to Dashboard Button */}
          <button className="btn btn-secondary mt-3">Back to Dashboard</button>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
