import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { badgeContext } from '../Context/BadgeState';
import { cartContext } from '../Context/CartState';
import Header from './Header';
import Footer from './Footer';

function Cart() {
  const { badgeCount, setBadgeCount } = useContext(badgeContext);
  const { cart, setCart } = useContext(cartContext);

  const clearCart = () => {
    setBadgeCount(0);
    localStorage.removeItem('badgeCount');
    setCart([]);
  };

  const removeItem = (productId) => {
    const itemIndex = cart.findIndex((item) => item.id === productId);

    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(itemIndex, 1);
      setCart(updatedCart);
      setBadgeCount(badgeCount - 1);
    }
  };

  return (
    <>
    <Header/>
    <section className="h-100  h-custom" style={{ backgroundColor: '#eee',paddingBottom:"30px",paddingTop:"10px" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-lg-7">
                    <h5 className="mb-3">
                      <Link to="/products" className="text-body">
                        <i className="fas fa-long-arrow-alt-left me-2"></i>
                        Continue shopping
                      </Link>
                    </h5>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Shopping cart</p>
                        <p className="mb-0">You have {badgeCount} items in your cart</p>
                      </div>
                      <div>
                        <p className="mb-0">
                          <span className="text-muted">Sort by:</span>
                          <a href="#!" className="text-body">
                            price <i className="fas fa-angle-down mt-1"></i>
                          </a>
                        </p>
                      </div>
                    </div>

                    {cart.map((item) => (
                      <div className="card mb-3" key={item.id}>
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src={item.image}
                                  className="img-fluid rounded-3"
                                  alt="Shopping item"
                                  style={{ maxWidth: '65px' }}
                                />
                              </div>
                              <div className="ms-3">
                                <h5>{item.description}</h5>
                                <p className="small mb-0">{item.category}</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{ width: '50px' }}>
                                <h5 className="fw-normal mb-0">{item.quantity}</h5>
                              </div>
                              <div style={{ width: '80px' }}>
                                <h5 className="mb-0">${item.price}</h5>
                              </div>
                              <a
                                className="rounded"
                                href="#!"
                                style={{ color: '#cecece' }}
                                onClick={() => removeItem(item.id)}
                              >
                                remove
                                <i className="fas fa-trash-alt"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="col-lg-5">
                    <div className="card bg-dark text-white rounded-3">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <h5 className="mb-0">Card details</h5>
                        </div>
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">$4798.00</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">$20.00</p>
                        </div>
                        <div className="d-flex justify-content-between mb-4">
                          <p className="mb-2">Total (Incl. taxes)</p>
                          <p className="mb-2">$4818.00</p>
                        </div>
                        <div className="d-flex flex-wrap justify-content-between">
                          <div>
                            <button
                              type="button"
                              className="btn btn-block btn-md"
                              style={{
                                backgroundColor: 'indigo',
                                color: 'white',
                              }}
                            >
                              <div className="d-flex justify-content-between">
                                <span>
                                  Checkout{' '}
                                </span>
                              </div>
                            </button>
                          </div>
                          <div style={{ margin: '10px' }}></div>
                          <div>
                            <button
                              type="button"
                              className="btn btn-block btn-md"
                              style={{
                                backgroundColor: 'indigo',
                                color: 'white',
                              }}
                              onClick={clearCart}
                            >
                              Clear Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}

export default Cart;
