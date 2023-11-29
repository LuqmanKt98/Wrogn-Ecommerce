import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Faqs() {
  return (
    <>
      <Header />

      <div className="container d-flex py-5 justify-content-center">
        <div className="accordion w-75" id="basicAccordion">
          <h1 className="mb-3" style={{ fontWeight: 700, fontSize: "2.5rem" }}>
            Frequently Asked Questions
          </h1>

          {/* FAQ 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#basicAccordionCollapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                How do I cancel an order that I have placed?
              </button>
            </h2>
            <div
              id="basicAccordionCollapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#basicAccordion"
            >
              <div className="accordion-body">
                To cancel an order, log in to your account, go to the order
                history, find the order you want to cancel, and follow the
                cancellation instructions provided.
              </div>
            </div>
          </div>

          {/* Add more FAQs and their answers here */}

          {/* FAQ 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#basicAccordionCollapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                How can I track my order?
              </button>
            </h2>
            <div
              id="basicAccordionCollapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#basicAccordion"
            >
              <div className="accordion-body">
                You can track your order by logging in to your account and
                navigating to the order history. There, you will find a tracking
                link for each order.
              </div>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#basicAccordionCollapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                What payment methods do you accept?
              </button>
            </h2>
            <div
              id="basicAccordionCollapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#basicAccordion"
            >
              <div className="accordion-body">
                We accept a variety of payment methods, including credit/debit
                cards, PayPal, and other secure online payment options. You can
                view the available payment methods during the checkout process.
              </div>
            </div>
          </div>

          {/* FAQ 4 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#basicAccordionCollapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                How can I return a product?
              </button>
            </h2>
            <div
              id="basicAccordionCollapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#basicAccordion"
            >
              <div className="accordion-body">
                To return a product, go to your account, navigate to the order
                history, and follow the return instructions provided for the
                specific order. Make sure to check our return policy for
                eligibility and guidelines.
              </div>
            </div>
          </div>

          {/* FAQ 5 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#basicAccordionCollapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Is there a warranty on the products?
              </button>
            </h2>
            <div
              id="basicAccordionCollapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#basicAccordion"
            >
              <div className="accordion-body">
                Yes, we offer warranties on select products. The warranty
                details are provided on the product page. Please review the
                warranty information before making a purchase.
              </div>
            </div>
          </div>

          {/* FAQ 6 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#basicAccordionCollapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                How do I change my account password?
              </button>
            </h2>
            <div
              id="basicAccordionCollapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#basicAccordion"
            >
              <div className="accordion-body">
                To change your account password, log in to your account, go to
                the account settings, and find the option to change your
                password. Follow the provided instructions to set a new
                password.
              </div>
            </div>
          </div>

          {/* FAQ 7 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSeven">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#basicAccordionCollapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                Are gift cards available?
              </button>
            </h2>
            <div
              id="basicAccordionCollapseSeven"
              className="accordion-collapse collapse"
              aria-labelledby="headingSeven"
              data-bs-parent="#basicAccordion"
            >
              <div className="accordion-body">
                Yes, we offer gift cards. You can purchase them on our website,
                and they make for a great gift for friends and family. Gift
                cards are available in various denominations.
              </div>
            </div>
          </div>

          {/* FAQ 8 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEight">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#basicAccordionCollapseEight"
                aria-expanded="false"
                aria-controls="collapseEight"
              >
                How do I contact customer support?
              </button>
            </h2>
            <div
              id="basicAccordionCollapseEight"
              className="accordion-collapse collapse"
              aria-labelledby="headingEight"
              data-bs-parent="#basicAccordion"
            >
              <div className="accordion-body">
                You can contact our customer support team through the "Contact
                Us" page on our website. Alternatively, you may find our
                customer support email and phone number in the contact section
                of our website.
              </div>
            </div>
          </div>

          {/* FAQ 9 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingNine">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#basicAccordionCollapseNine"
                aria-expanded="false"
                aria-controls="collapseNine"
              >
                Do you offer international shipping?
              </button>
            </h2>
            <div
              id="basicAccordionCollapseNine"
              className="accordion-collapse collapse"
              aria-labelledby="headingNine"
              data-bs-parent="#basicAccordion"
            >
              <div className="accordion-body">
                Yes, we offer international shipping to select countries. During
                the checkout process, you can select your country, and the
                available shipping options and costs will be displayed.
              </div>
            </div>
          </div>

          {/* FAQ 10 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTen">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#basicAccordionCollapseTen"
                aria-expanded="false"
                aria-controls="collapseTen"
              >
                How can I check the status of my refund?
              </button>
            </h2>
            <div
              id="basicAccordionCollapseTen"
              className="accordion-collapse collapse"
              aria-labelledby="headingTen"
              data-bs-parent="#basicAccordion"
            >
              <div className="accordion-body">
                You can check the status of your refund by logging in to your
                account and viewing the order history. If you have questions or
                concerns about your refund, please contact our customer support
                team for assistance.
              </div>
            </div>
          </div>

          {/* FAQ 11 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEleven">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#basicAccordionCollapseEleven"
                aria-expanded="false"
                aria-controls="collapseEleven"
              >
                How can I contact customer support?
              </button>
            </h2>
            <div
              id="basicAccordionCollapseEleven"
              className="accordion-collapse collapse"
              aria-labelledby="headingEleven"
              data-bs-parent="#basicAccordion"
            >
              <div className="accordion-body">
                You can contact our customer support team by clicking the "Contact Us" button below.
                <div className="d-flex justify-content-end mt-2">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#contactUsModal"
                    style={{ backgroundColor: "indigo", color: "white" }}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Faqs;
