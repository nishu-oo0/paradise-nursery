import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  selectCartItems,
  selectTotalQuantity,
  selectTotalPrice,
} from './CartSlice';
import {
  Leaf,
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Truck,
  CheckCircle,
  Sparkles,
  ShoppingBag,
} from 'lucide-react';
import './App.css';

const CartItem = ({ onContinueShopping }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);
  const totalPrice = useSelector(selectTotalPrice);

  const [checkoutMessage, setCheckoutMessage] = useState(null);

  // Calculate total amount for all products in cart
  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + Number(item.price) * (item.quantity || 1),
      0
    );
  };

  // Calculate item total cost (unit price * quantity)
  const calculateTotalCost = (item) => {
    return Number(item.price) * (item.quantity || 1);
  };

  // Increase quantity
  const handleIncrement = (item) => {
    dispatch(increaseQuantity(item.id !== undefined ? item.id : item.name));
  };

  // Decrease quantity; if quantity reaches zero, removes the item
  const handleDecrement = (item) => {
    dispatch(decreaseQuantity(item.id !== undefined ? item.id : item.name));
  };

  // Remove plant from cart
  const handleRemove = (item) => {
    dispatch(removeFromCart(item.id !== undefined ? item.id : item.name));
  };

  // Continue shopping: supports both prop callback and react-router-dom navigation
  const handleContinueShopping = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    if (typeof onContinueShopping === 'function') {
      onContinueShopping(e);
    } else {
      navigate('/plants');
    }
  };

  // Checkout functionality: displays alert / banner
  const handleCheckout = () => {
    const message = 'Coming Soon! Thank you for shopping with Paradise Nursery.';
    alert(message);
    setCheckoutMessage(message);
    setTimeout(() => {
      setCheckoutMessage(null);
    }, 4000);
  };

  return (
    <div className="cart-page">
      {/* Navigation Bar */}
      <header className="navbar">
        <Link to="/" className="navbar-brand">
          <div className="brand-icon-wrapper">
            <Leaf className="brand-icon" />
          </div>
          <div className="brand-text">
            <span className="brand-title">Paradise Nursery</span>
            <span className="brand-subtitle">Houseplants Sanctuary</span>
          </div>
        </Link>

        <nav className="navbar-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/plants" className="nav-link">
            Plants
          </Link>
          <Link to="/about" className="nav-link">
            About Us
          </Link>
          <Link to="/cart" className="cart-btn active" aria-label="View Shopping Cart">
            <ShoppingCart className="cart-icon" />
            <span className="cart-badge">{totalQuantity}</span>
          </Link>
        </nav>
      </header>

      {/* Main Cart Content */}
      <main className="cart-container container">
        <div className="cart-header-section">
          <div>
            <h1 className="cart-page-title">Shopping Cart</h1>
            <p className="cart-page-subtitle">
              Review your selected houseplants, adjust quantities, or proceed to checkout.
            </p>
          </div>
          {cartItems.length > 0 && (
            <button
              onClick={() => dispatch(clearCart())}
              className="btn btn-text-danger"
              title="Empty entire cart"
            >
              <Trash2 size={16} />
              <span>Clear Cart</span>
            </button>
          )}
        </div>

        {/* Checkout Toast Notification */}
        {checkoutMessage && (
          <div className="checkout-alert">
            <CheckCircle size={22} className="alert-icon" />
            <div>
              <strong>Order Status:</strong> {checkoutMessage}
            </div>
          </div>
        )}

        {cartItems.length === 0 ? (
          // Empty Cart State
          <div className="empty-cart-card">
            <div className="empty-cart-icon-wrap">
              <ShoppingBag size={54} />
            </div>
            <h2>Your Cart is Currently Empty</h2>
            <p>
              Looks like you haven't added any botanical companions yet! Explore our lush
              collection of air-purifying, decorative, and low-maintenance plants.
            </p>
            <div className="empty-cart-actions">
              <button
                onClick={handleContinueShopping}
                className="btn btn-primary btn-large"
              >
                <ArrowLeft size={18} />
                <span>Explore Houseplants</span>
              </button>
            </div>
          </div>
        ) : (
          // Cart with Items Layout
          <div className="cart-grid">
            {/* Items List Column */}
            <div className="cart-items-column">
              <div className="cart-items-header">
                <span>Selected Plants ({totalQuantity} total items)</span>
                <span>Subtotal</span>
              </div>

              <div className="cart-items-list">
                {cartItems.map((item) => {
                  const itemTotal = calculateTotalCost(item);
                  return (
                    <article key={item.id || item.name} className="cart-item-card">
                      <div className="cart-item-media">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="cart-item-image"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=400&q=80';
                          }}
                        />
                      </div>

                      <div className="cart-item-details">
                        <div className="cart-item-info">
                          <span className="cart-item-cat">{item.category}</span>
                          <h3 className="cart-item-name">{item.name}</h3>
                          <div className="cart-item-unit-price">
                            Unit Price: <strong>₹{Number(item.price).toLocaleString('en-IN')}</strong>
                          </div>
                        </div>

                        <div className="cart-item-controls">
                          <div className="quantity-stepper">
                            <button
                              type="button"
                              className="qty-btn"
                              onClick={() => handleDecrement(item)}
                              aria-label={`Decrease quantity of ${item.name}`}
                            >
                              <Minus size={16} />
                            </button>
                            <span className="qty-value">{item.quantity}</span>
                            <button
                              type="button"
                              className="qty-btn"
                              onClick={() => handleIncrement(item)}
                              aria-label={`Increase quantity of ${item.name}`}
                            >
                              <Plus size={16} />
                            </button>
                          </div>

                          <button
                            type="button"
                            className="remove-btn"
                            onClick={() => handleRemove(item)}
                            title="Remove plant from cart"
                          >
                            <Trash2 size={16} />
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>

                      <div className="cart-item-total">
                        <span className="item-total-label">Total:</span>
                        <span className="item-total-price">
                          ₹{itemTotal.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Action Buttons below Items */}
              <div className="cart-actions-bottom">
                <button
                  type="button"
                  onClick={handleContinueShopping}
                  className="btn btn-secondary continue-shopping-btn"
                >
                  <ArrowLeft size={18} />
                  <span>Continue Shopping</span>
                </button>
              </div>
            </div>

            {/* Order Summary Sidebar Column */}
            <aside className="cart-summary-column">
              <div className="order-summary-card">
                <h2 className="summary-title">Order Summary</h2>

                <div className="summary-row">
                  <span className="summary-label">Total Plants:</span>
                  <span className="summary-value">{totalQuantity} plants</span>
                </div>

                <div className="summary-row">
                  <span className="summary-label">Subtotal:</span>
                  <span className="summary-value">₹{calculateTotalAmount().toLocaleString('en-IN')}</span>
                </div>

                <div className="summary-row">
                  <span className="summary-label">Nursery Packaging:</span>
                  <span className="summary-value free-text">FREE</span>
                </div>

                <div className="summary-row">
                  <span className="summary-label">Standard Delivery:</span>
                  <span className="summary-value free-text">FREE</span>
                </div>

                <div className="summary-divider"></div>

                <div className="summary-row total-row">
                  <span className="grand-total-label">Grand Total:</span>
                  <span className="grand-total-value">
                    ₹{calculateTotalAmount().toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="summary-actions">
                  <button
                    type="button"
                    onClick={handleCheckout}
                    className="btn btn-primary btn-block checkout-btn"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={handleContinueShopping}
                    className="btn btn-outline btn-block"
                  >
                    <span>Continue Shopping</span>
                  </button>
                </div>

                {/* Trust Badges */}
                <div className="trust-badges">
                  <div className="trust-badge-item">
                    <ShieldCheck size={18} className="trust-icon" />
                    <span>Safe & Secure Transactions</span>
                  </div>
                  <div className="trust-badge-item">
                    <Truck size={18} className="trust-icon" />
                    <span>Guaranteed Safe Live Plant Transit</span>
                  </div>
                  <div className="trust-badge-item">
                    <Sparkles size={18} className="trust-icon" />
                    <span>30-Day Plant Vitality Promise</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content container">
          <div className="footer-brand">
            <div className="brand-icon-wrapper small">
              <Leaf className="brand-icon" />
            </div>
            <span className="footer-title">Paradise Nursery</span>
            <p>Bringing nature's serenity and vitality right to your doorstep.</p>
          </div>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/plants">Houseplants</Link>
            <Link to="/about">About Us</Link>
            <Link to="/cart">Cart ({totalQuantity})</Link>
          </div>
          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} Paradise Nursery. All rights reserved. Coursera Final Project.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CartItem;
