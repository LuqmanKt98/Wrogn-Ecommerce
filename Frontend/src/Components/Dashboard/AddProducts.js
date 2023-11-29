import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddProduct } from "../../services/api";

const AddProducts = () => {
  // State to store form input values
  const [productData, setProductData] = useState({
    productName: "",
    productId: 0,
    productPrice: 0,
    productColors: [],
    productSizes: [],
    productCategory: "",
    productImage: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    // Handle checkboxes separately
    if (type === "checkbox") {
      const updatedArray = checked
        ? [...productData[name], value]
        : productData[name].filter((color) => color !== value);

      setProductData({
        ...productData,
        [name]: updatedArray,
      });
    } else {
      setProductData({
        ...productData,
        [name]: value,
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to submit the product data (e.g., call an API)
    AddProduct(productData);
    console.log("Form Data:", productData);
  };

  return (
    <div className="container">
      <div className="card shadow">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="productName" className="form-label">
                Product Name:
              </label>
              <input
                type="text"
                id="productName"
                className="form-control"
                name="productName"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="productId" className="form-label">
                Product ID:
              </label>
              <input
                type="number"
                id="productId"
                className="form-control"
                name="productId"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="productPrice" className="form-label">
                Product Price:
              </label>
              <input
                type="number"
                id="productPrice"
                className="form-control"
                name="productPrice"
                onChange={handleChange}
                required
              />
            </div>

            {/* Product Colors */}
            <div className="mb-3">
              <label className="form-label">Product Colors:</label>
              <div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="colorRed"
                    className="form-check-input"
                    name="productColors"
                    value="Red"
                    onChange={handleChange}
                  />
                  <label htmlFor="colorRed" className="form-check-label">
                    Red
                  </label>
                </div>
                {/* Repeat similar structure for other colors */}
              </div>
            </div>

            {/* Product Sizes */}
            <div className="mb-3">
              <label className="form-label">Product Sizes:</label>
              <div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="sizeSmall"
                    className="form-check-input"
                    name="productSizes"
                    value="Small"
                    onChange={handleChange}
                  />
                  <label htmlFor="sizeSmall" className="form-check-label">
                    Small
                  </label>
                </div>
                {/* Repeat similar structure for other sizes */}
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="productCategory" className="form-label">
                Product Category:
              </label>
              <input
                type="text"
                id="productCategory"
                className="form-control"
                name="productCategory"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="productImage" className="form-label">
                Product Image Url:
              </label>
              <input
                type="text"
                id="productImage"
                className="form-control"
                name="productImage"
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-dark text-white">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
