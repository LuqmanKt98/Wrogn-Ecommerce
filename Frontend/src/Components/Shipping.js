import React from 'react';
import Header from './Header';
import Footer from './Footer';

const ShippingHandling = () => {
  return (
    <>
    <Header/>
    <div className="container my-5">
      <div className="card shadow">
        <div className="card-body">
          <h1 className="mb-4">Shipping and Handling</h1>

          <div className="card mb-4">
            <div className="card-body">
              <h2 className="mt-4">Shipping Information</h2>

              <p>
                We strive to provide you with the best shipping experience. Here's what you need to know about our shipping process:
              </p>

              <ul>
                <li><strong>Shipping Locations:</strong> We currently ship to locations within the country. Contact our support if you have specific shipping requests.</li>
                <li><strong>Shipping Times:</strong> Our standard shipping takes 3-5 business days. Expedited shipping options are available at checkout.</li>
                <li><strong>Order Tracking:</strong> Once your order is shipped, you will receive a tracking number to monitor the status of your shipment.</li>
              </ul>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h2 className="mt-4">Handling Information</h2>

              <p>
                Your satisfaction is our priority, and we handle your orders with care. Here's what you can expect regarding order handling:
              </p>

              <ul>
                <li><strong>Order Processing:</strong> Orders are typically processed within 1-2 business days, excluding weekends and holidays.</li>
                <li><strong>Quality Checks:</strong> Before shipping, each product undergoes quality checks to ensure it meets our standards.</li>
                <li><strong>Packaging:</strong> Items are securely packaged to prevent damage during transit. Please inspect the package upon delivery.</li>
              </ul>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h2 className="mt-4">Shipping Costs</h2>

              <p>
                Shipping costs vary based on your location, chosen shipping method, and order value. You can view the shipping costs during the checkout process before completing your purchase.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h2 className="mt-4">Contact Us</h2>

              <p>
                If you have any questions or concerns about our Shipping and Handling policy, please contact our support team:
                <br />
                Wrogn Clothing Pvt. Ltd.
                <br />
                123 Fashion Street, Cityville, Country
                <br />
                Email: support@wrogn.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ShippingHandling;
