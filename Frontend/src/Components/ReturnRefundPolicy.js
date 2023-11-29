import React from 'react';
import Header from './Header';
import Footer from './Footer';

const ReturnRefundPolicy = () => {
  return (
    <>
    <Header/>
    <div className="container my-5">
      <div className="card shadow">
        <div className="card-body">
          <h1 className="mb-4">Return and Refund Policy</h1>

          <p>
            At Wrogn, we want to ensure your satisfaction with every purchase. Please read our Return and Refund Policy carefully.
          </p>

          <h2 className="mt-4">Return Process</h2>

          <p>
            If you receive a wrong item or are dissatisfied with your purchase, you can initiate a return by following these steps:
          </p>

          <ol>
            <li>Login to your Wrogn account.</li>
            <li>Visit the 'Order History' section.</li>
            <li>Find the order containing the wrong item and click on the 'Return' button.</li>
            <li>Provide a reason for the return (optional but appreciated).</li>
            <li>Confirm the return.</li>
          </ol>

          <h2 className="mt-4">Refund Process</h2>

          <p>
            Once your return request is approved and the wrong item is received at our warehouse, we will initiate the refund process. Here are key points regarding our refund process:
          </p>

          <ul>
            <li>A full refund, including the product cost and any applicable taxes, will be processed to the original payment method.</li>
            <li>Refund processing times may vary depending on your payment method and bank policies.</li>
            <li>Handling charges are non-refundable and will not be reflected in the final refund amount.</li>
          </ul>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ReturnRefundPolicy;
