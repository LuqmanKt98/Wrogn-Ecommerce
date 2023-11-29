import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { badgeContext } from "../Context/BadgeState";
import { cartContext } from "../Context/CartState";
import Footer from "./Footer";

function Products() {
  const { cart, setCart } = useContext(cartContext);
  const { badgeCount, setBadgeCount } = useContext(badgeContext);

  useEffect(() => {
    const storedBadgeCount = localStorage.getItem("badgeCount");
    if (storedBadgeCount) {
      setBadgeCount(parseInt(storedBadgeCount));
    }
  }, []);

  const handleAddToCart = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);

    if (productToAdd) {
      setCart([...cart, productToAdd]);
      setBadgeCount(badgeCount + 1);

      const updatedCart = [...cart, productToAdd];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  useEffect(() => {
    localStorage.setItem("badgeCount", badgeCount.toString());
  }, [badgeCount]);

  const linkStyles = {
    textDecoration: "none",
    color: "black",
  };

  const buttonStyles = {
    margin: "5px",
  };
  

  const [products, setProducts] = useState([
    {
      id: 1,
      price: 29.99,
      description: "High-quality jeans for any occasion",
      category: "Jeans",
      image: "jeans.webp",
    },
    {
      id: 2,
      price: 19.99,
      description: "Comfortable and stylish shirt",
      category: "Shirt",
      image: "shirt.webp",
    },
    {
      id: 3,
      price: 45.99,
      description: "Comfortable and stylish shirt",
      category: "Shirt",
      image: "shirts1.webp",
    },
    {
      id: 4,
      price: 14.99,
      description: "Classic T-shirt for everyday wear",
      category: "T-shirt",
      image: "t_shirt.webp",
    },
    {
      id: 5,
      price: 40.99,
      description: "Comfortable and stylish shirt",
      category: "Shirt",
      image: "shirts2.webp",
    },
    {
      id: 6,
      price: 50.99,
      description: "Classic T-shirt for everyday wear",
      category: "T-Shirt",
      image: "tpw3.webp",
    },
    {
      id: 7,
      price: 50.99,
      description: "Comfortable and stylish shirt",
      category: "Shirt",
      image: "shirts4.webp",
    },
    {
      id: 8,
      price: 50.99,
      description: "Comfortable and stylish shirt",
      category: "Shirt",
      image: "tpw2.webp",
    },
    {
      id: 9,
      price: 50.99,
      description: "Comfortable and stylish shirt",
      category: "Shirt",
      image: "tpw3.webp",
    },
    {
      id: 10,
      price: 50.99,
      description: "Comfortable Jeans",
      category: "Jeans",
      image: "jeans4.jpeg",
    },
    {
      id: 11,
      price: 55.99,
      description: "Comfortable Jeans",
      category: "Jeans",
      image: "jeans2.jpeg",
    },
    {
      id: 12,
      price: 60.99,
      description: "Comfortable Jeans",
      category: "Jeans",
      image: "jeans1.webp",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterProducts = () => {
    if (selectedCategory === "All") {
      return products;
    } else {
      return products.filter((product) => product.category === selectedCategory);
    }
  };

  return (
    <>
      <div className="row">
        <Header />
      </div>
      <div className="row">
      <nav
  id="sidebar"
  className="col-md-3 bg-dark shadow bg-body-tertiary"
  style={{ display: "flex", flexDirection: "column" }}
>
  <div className="position-sticky">
    <ul className="nav list-group text-center">
      <li className="nav-item list-group-item">
        <Link to="/products/all" style={linkStyles}>
          All Products
        </Link>
      </li>
      <li className="nav-item list-group-item">
        <Link to="/products/t-shirts" style={linkStyles}>
          T-Shirts
        </Link>
      </li>
      <li className="nav-item list-group-item">
        <Link to="/products/jeans" style={linkStyles}>
          Jeans
        </Link>
      </li>
      <li className="nav-item list-group-item">
        <Link to="/products/shirts" style={linkStyles}>
          Shirts
        </Link>
      </li>
      <li className="nav-item list-group-item">
        <Link to="/products/underwear" style={linkStyles}>
          underwear
        </Link>
      </li>
      {/* Add more category links as needed */}
    </ul>
  </div>
</nav>

        <div className="col-md-9">
          <div className="row mt-3">
            {filterProducts().map((product) => (
              <div key={product.id} className="col-md-4">
                <div className="card mb-4 shadow ">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.category}
                    style={{ maxHeight: "250px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {product.category}
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                        style={{ marginLeft: "112px" }}
                      >
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-dark"
                        >
                          SM
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-dark"
                        >
                          LG
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-dark"
                        >
                          XL
                        </button>
                      </div>
                    </h5>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <strong>Price: ${product.price}</strong>
                    <div className="btn-group">
                      <button
                        className="btn btn-outline-dark"
                        onClick={() => handleAddToCart(product.id)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
