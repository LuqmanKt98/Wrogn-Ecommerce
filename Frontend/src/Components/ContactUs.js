import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function ContactUs() {
  return (
    <>
      <Header />
      <div className="container py-2 mb-4">
        <h1 class="mt-4 font-weight-bold" style={{ fontSize: "2.5rem" }}>
          Contact Us
        </h1>
        <p>Let us help you</p>
        <div className="row">
          <div className="col-md-4 d-flex">
            <div className="card border-light mb-3 shadow flex-fill">
              <div className="card-body">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3em"
                  height="3em"
                  fill="currentColor"
                  className="bi bi-telephone mb-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
                <h5 className="card-title">Customer Care</h5>
                <p className="card-text">Phone: +91 8095733338</p>
                <p className="card-text">Email: care@usplworld.com</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 d-flex">
            <div className="card border-light mb-3 shadow flex-fill">
              <div className="card-body">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3em"
                  height="3em"
                  fill="currentColor"
                  className="bi bi-hourglass-top mb-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 14.5a.5.5 0 0 0 .5.5h11a.5.5 0 1 0 0-1h-1v-1a4.5 4.5 0 0 0-2.557-4.06c-.29-.139-.443-.377-.443-.59v-.7c0-.213.154-.451.443-.59A4.5 4.5 0 0 0 12.5 3V2h1a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1h1v1a4.5 4.5 0 0 0 2.557 4.06c.29.139.443.377.443.59v.7c0 .213-.154.451-.443.59A4.5 4.5 0 0 0 3.5 13v1h-1a.5.5 0 0 0-.5.5zm2.5-.5v-1a3.5 3.5 0 0 1 1.989-3.158c.533-.256 1.011-.79 1.011-1.491v-.702s.18.101.5.101.5-.1.5-.1v.7c0 .701.478 1.236 1.011 1.492A3.5 3.5 0 0 1 11.5 13v1h-7z" />
                </svg>
                <h5 className="card-title">Working Hours</h5>
                <p className="card-text">
                  <br />
                  Monday-Saturday | 9am to 6pm (IST)
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 d-flex">
            <div className="card border-light mb-3 shadow flex-fill">
              <div className="card-body">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3em"
                  height="3em"
                  fill="currentColor"
                  className="bi bi-signpost-split-fill mb-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 16h2V6h5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.8 2.4A1 1 0 0 0 14 2H9v-.586a1 1 0 0 0-2 0V7H2a1 1 0 0 0-.8.4L.225 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4h5v5z" />
                </svg>
                <h5 className="card-title">Address</h5>
                <p className="card-text">
                  1st 2nd 3rd 4th Floors, 509, PID No 81-1-509,
                  <br />
                  CMH Road, Indiranagar 1st Stage,
                  <br />
                  Karachi, Sindh,
                  <br />
                  Pakistan - 75300.
                </p>
              </div>
            </div>
          </div>

          <div className="container mt-4">
            <h3>Reach out to us</h3>
              <div className="card border-light mb-3 shadow">
                <div className="card-body">
                  <form className="contactus_form">
                    <div className="form-group">
                      <label htmlFor="fullName">
                        Full Name<sup>*</sup>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        required
                        id="fullName"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">
                        Email Address<sup>*</sup>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        required
                        id="email"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="number"
                        className="form-control"
                        maxLength="10"
                        minLength="10"
                        name="mobile_number"
                        id="phone"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">
                        Subject<sup>*</sup>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        required
                        id="subject"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">
                        Message<sup>*</sup>
                      </label>
                      <textarea
                        className="form-control"
                        name="message"
                        cols="39"
                        rows="5"
                        maxLength="200"
                        id="message"
                        style={{ height: "98px" }}
                      ></textarea>
                    </div>
                    <div className="col-12 text-center mt-3">
                      <button
                        type="button"
                        class="btn"
                        style={{ backgroundColor: "indigo", color: "white" }}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
