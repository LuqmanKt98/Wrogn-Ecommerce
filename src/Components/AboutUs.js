import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <>
    <Header/>
    <div className="container mt-4 mb-4">
      <div className="shadow-sm p-3 bg-white rounded">
        <div className="row">
          <div className="col-md-6 col-12">
            <img className="w-25 mt-2" src="https://d3tdx3c7l2rexw.cloudfront.net/static/img/uspl/home/wrogn-b.png" alt="wrogn logo" />
            <h3>By Virat Kohli</h3>
            <p className="text-justify">
              Wrogn was co-created with Virat Kohli, India’s cricketing hero and among the world’s biggest sporting icons. With its breakaway youth fashion and razor-sharp attitude, Wrogn has become a mainstay in the wardrobe of young Indian men.
            </p>
            <p><Link className="text-decoration-none" to="/">View Brand</Link></p>
          </div>
          <div className="col-md-6 col-12">
            <img className="hidden-sm hidden-xs img-fluid" src="https://d3tdx3c7l2rexw.cloudfront.net/static/img/AboutUs/wrogn-2.jpg" alt="Wrogn Image" />
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default AboutUs;
