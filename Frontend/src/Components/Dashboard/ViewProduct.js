import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getProduct } from "../../services/api";
import { Modal, Button } from "react-bootstrap";

const ViewProduct = () => {
  const [productData, setProductData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getProductDetail();
  }, []);

  const getProductDetail = async () => {
    try {
      const result = await getProduct();
      if (result && result.data) {
        setProductData(result.data);
      } else {
        console.error("Invalid data structure in the API response:", result);
      }
    } catch (error) {
      console.error("Error fetching Products details:", error);
    }
  };

  const openProductDetailsModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeProductDetailsModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  const filteredProducts = productData.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="card shadow container">
      <div className="mb-3">
        <input
          type="text"
          className="form-control search-bar"
          placeholder="Search by Product Name"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product._id}>
              <td>{product.productId}</td>
              <td>{product.productName}</td>
              <td>{product.productCategory}</td>
              <td>
                <button
                  className="btn btn-dark text-white"
                  onClick={() => openProductDetailsModal(product)}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Product Details Modal */}
      <Modal show={showModal} onHide={closeProductDetailsModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct?.productName} Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <img
                  src={selectedProduct?.productImageURL}
                  alt={selectedProduct?.productName}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6">
                <p>Product ID: {selectedProduct?.productId}</p>
                <p>Category: {selectedProduct?.productCategory}</p>
                <p>Price: ${selectedProduct?.productPrice}</p>
                <p>Sizes: {selectedProduct?.productSizes.join(", ")}</p>
                <p>Colors: {selectedProduct?.productColors.join(", ")}</p>
              </div>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button className="btn btn-dark text-white" onClick={closeProductDetailsModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ViewProduct;
