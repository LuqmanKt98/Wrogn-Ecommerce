import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function CardsSection() {
  const [products] = useState([
    {
      id: 1,
      description: "High-quality jeans for any occasion",
      category: "Jeans",
      image: "jeans.webp",
      link: "/jeans" // Add the link for the jeans product
    },
    {
      id: 2,
      description: "Comfortable and stylish shirt",
      category: "Shirt",
      image: "shirt.webp",
      link: "/shirt" // Add the link for the shirt product
    },
    {
      id: 3,
      description: "Classic T-shirt for everyday wear",
      category: "T-shirt",
      image: "t_shirt.webp",
      link: "/t-shirt" // Add the link for the T-shirt product
    }
  ]);

  return (
    <div className="row">
      <h1 className="d-flex justify-content-center mt-5 text-white" >Featured Products</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
        {products.map(product => (
          <div key={product.id} className="col">
            <Link to={product.link} style={{ textDecoration: 'none' }}>
              <div className="card h-100 shadow p-3 bg-body-tertiary rounded" >
                <img src={product.image} className="card-img-top" alt={product.category} style={{ maxHeight: "250px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title">{product.category}</h5>
                  <p className="card-text">{product.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsSection;
