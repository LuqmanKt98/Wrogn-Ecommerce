import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Cancellation = () => {
  return (
    <>
    <Header/>
    <div className="container my-5">
      <div className="card shadow">
        <div className="card-body">
          <h1 className="mb-4">Cancellation Policy</h1>

          <p>
            At Wrogn, we understand that sometimes you may need to cancel an order. Here's our cancellation policy to guide you through the process.
          </p>

          <div className="card">
            <div className="card-body">
              <h2 className="mt-4">Cancellation Process</h2>

              <p>
                To cancel an order, please follow these steps:
              </p>

              <ol>
                <li>Login to your Wrogn account.</li>
                <li>Go to the 'Order History' section.</li>
                <li>Find the order you wish to cancel and click on the 'Cancel' button.</li>
                <li>Provide a reason for cancellation (optional but appreciated).</li>
                <li>Confirm the cancellation.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Cancellation;
