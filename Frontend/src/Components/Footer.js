import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

function Footer() {
  const [trackingId, setTrackingId] = useState('');

  const handleTrackingIdChange = (e) => {
    setTrackingId(e.target.value);
  }

  const handleTrackOrder = () => {
    // You can implement the logic to handle the tracking of orders here
    console.log(`Tracking order with ID: ${trackingId}`);
  }

  return (
    <footer className="py-1 shadow p-3 bg-body-dark rounded" style={{ backgroundColor: "#d3d6db", color: "black" }}>
      <div className="container pt-2">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <h5 style={{color:"indigo"}}>Order Queries</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/track-orders" className="nav-link p-0 text-dark">
                  Track Orders
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/shipping" className="nav-link p-0 text-dark">
                  Shipping & Handling
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/cancellation" className="nav-link p-0 text-dark">
                  Cancellation
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/return-refund-policy" className="nav-link p-0 text-dark">
                  Return & Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6">
            <h5 style={{color:"indigo"}}>Payment Methods</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/master-card" className="nav-link p-0 text-dark">
                  Master Card
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/visa" className="nav-link p-0 text-dark">
                  Visa
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/rupay" className="nav-link p-0 text-dark">
                  RuPay
                </Link>
              </li>
              {/* Add more payment methods as needed */}
            </ul>
          </div>

          <div className="col-md-3 col-sm-6">
            <h5 style={{color:"indigo"}}>Useful Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/contact-us" className="nav-link p-0 text-dark">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/faqs" className="nav-link p-0 text-dark">
                  FAQs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/payments" className="nav-link p-0 text-dark">
                  Payment
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/terms" className="nav-link p-0 text-dark">
                  Terms & Conditions
                </Link>
              </li>
              {/* Add more useful links as needed */}
            </ul>
          </div>

          <div className="col-md-3 col-sm-6">
            <Link to="/store/findourstore" className="text-dark text-decoration-none">
              <h5 style={{color:"indigo"}}>FIND OUR STORE</h5></Link>
            <hr />
            <h4>Connect with us</h4>
            {/* Add input field for tracking ID */}
            <div className="d-flex flex-wrap input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Tracking ID"
                value={trackingId}
                onChange={handleTrackingIdChange}
              />
              <button className="btn" onClick={handleTrackOrder} style={{color:"white" , backgroundColor:"indigo"}}>
                Track Order
              </button>
            </div>
          </div>
        </div>

        <div className="d-flex flex-wrap justify-content-between border-top mt-4">
          <p>© {new Date().getFullYear()} Your Wrogn Store. All rights reserved.</p>
          <ul className="list-unstyled d-flex flex-wrap text-dark">
            <li className="ms-3">
              <Link to="/about-us" className="link-dark">
                About Us
              </Link>
            </li>
            <li className="ms-3">
              <Link to="/privacy-policy" className="link-dark">
                Privacy Policy
              </Link>
            </li>
            <li className="ms-3">
              <Link to="/terms" className="link-dark">
                Terms & Conditions
              </Link>
            </li>
            <li className="ms-3">
              <Link to="/cookie-policy" className="link-dark">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
