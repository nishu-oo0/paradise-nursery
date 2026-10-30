import React from 'react';
import { Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalQuantity } from './CartSlice';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import {
  Leaf,
  ShoppingCart,
  ArrowRight,
  Sparkles,
  Wind,
  ShieldCheck,
  HeartHandshake,
  SunMedium,
  CheckCircle2,
} from 'lucide-react';
import './App.css';

/**
 * Landing Page Component for Paradise Nursery
 * Displayed at the root route ("/")
 */
export const LandingPage = () => {
  const navigate = useNavigate();
  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <div className="landing-page">
      {/* Background Overlay */}
      <div className="landing-bg-overlay"></div>

      {/* Navigation Header */}
      <header className="navbar landing-navbar">
        <Link to="/" className="navbar-brand">
          <div className="brand-icon-wrapper">
            <Leaf className="brand-icon" />
          </div>
          <div className="brand-text">
            <span className="brand-title">Paradise Nursery</span>
            <span className="brand-subtitle">Botanical Sanctuary</span>
          </div>
        </Link>

        <nav className="navbar-links">
          <Link to="/" className="nav-link active">
            Home
          </Link>
          <Link to="/plants" className="nav-link">
            Plants
          </Link>
          <Link to="/about" className="nav-link">
            About Us
          </Link>
          <Link to="/cart" className="cart-btn" aria-label="View Shopping Cart">
            <ShoppingCart className="cart-icon" />
            <span className="cart-badge">{totalQuantity}</span>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="landing-hero-container">
        <div className="landing-hero-card">
          <div className="hero-badge">
            <Sparkles size={16} />
            <span>Welcome to Paradise Nursery</span>
          </div>

          <h1 className="landing-title">
            Where Green Dreams <span className="highlight-text">Blossom</span>
          </h1>

          <p className="landing-description">
            Transform your living and working spaces into flourishing botanical sanctuaries.
            We curate and hand-nurture the finest air-purifying, decorative, and resilient
            low-maintenance houseplants delivered fresh from our nursery right to your doorstep.
          </p>

          <div className="landing-cta-group">
            <button
              id="get-started-btn"
              onClick={() => navigate('/plants')}
              className="btn btn-primary btn-large get-started-btn"
            >
              <span>Get Started</span>
              <ArrowRight size={20} />
            </button>

            <Link to="/about" className="btn btn-glass btn-large">
              <span>About Us</span>
            </Link>
          </div>

          {/* Key Value Highlights */}
          <div className="landing-features-ribbon">
            <div className="ribbon-item">
              <Wind size={20} className="ribbon-icon" />
              <span>Air Purifiers</span>
            </div>
            <div className="ribbon-item">
              <SunMedium size={20} className="ribbon-icon" />
              <span>Easy-Care Foliage</span>
            </div>
            <div className="ribbon-item">
              <ShieldCheck size={20} className="ribbon-icon" />
              <span>Safe Plant Transit</span>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Bottom Info */}
      <footer className="landing-footer">
        <p>© {new Date().getFullYear()} Paradise Nursery. Complete Coursera React E-Commerce Application.</p>
      </footer>
    </div>
  );
};

/**
 * Main App Component configuring all Coursera required routes:
 * "/"       -> Landing Page with Get Started button
 * "/plants" -> Product Listing Page
 * "/cart"   -> Shopping Cart Page
 * "/about"  -> About Us Page
 */
function App() {
  return (
    <div className="app-root">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
