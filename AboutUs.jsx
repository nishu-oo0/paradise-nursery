import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalQuantity } from './CartSlice';
import {
  Leaf,
  ShieldCheck,
  HeartHandshake,
  Truck,
  Sparkles,
  ArrowRight,
  ShoppingCart,
  Award,
  CheckCircle2,
} from 'lucide-react';
import './App.css';

const AboutUs = () => {
  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <div className="about-page">
      {/* Navigation Header */}
      <header className="navbar">
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
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/plants" className="nav-link">
            Plants
          </Link>
          <Link to="/about" className="nav-link active">
            About Us
          </Link>
          <Link to="/cart" className="cart-btn" aria-label="View Shopping Cart">
            <ShoppingCart className="cart-icon" />
            <span className="cart-badge">{totalQuantity}</span>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="badge-pill">
            <Sparkles size={16} /> Welcome to Our Green Haven
          </span>
          <h1 className="about-title">Nurturing Nature, Enriching Lives</h1>
          <p className="about-subtitle">
            At Paradise Nursery, we believe that bringing plants into your home is more than
            just decoration—it is an investment in your wellness, peace of mind, and connection to the Earth.
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="about-main container">
        {/* Company Introduction */}
        <section className="about-card intro-card">
          <div className="intro-grid">
            <div className="intro-text">
              <span className="section-label">Our Story</span>
              <h2>About Paradise Nursery</h2>
              <p>
                Founded with a passionate love for botanical beauty, <strong>Paradise Nursery</strong> has grown
                from a humble neighborhood greenhouse into a premier online houseplant sanctuary. We source,
                cultivate, and nurture an extraordinary selection of indoor plants tailored for modern homes
                and offices.
              </p>
              <p>
                Whether you are a seasoned botanist looking for rare tropical foliage or a first-time plant
                parent seeking resilient, low-maintenance greenery, we guide you every step of the way with
                expert care advice and healthy, vibrant plants.
              </p>
              <div className="intro-stats">
                <div className="stat-box">
                  <span className="stat-number">50,000+</span>
                  <span className="stat-label">Happy Plant Parents</span>
                </div>
                <div className="stat-box">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Nursery Grown Quality</span>
                </div>
                <div className="stat-box">
                  <span className="stat-number">30-Day</span>
                  <span className="stat-label">Healthy Plant Guarantee</span>
                </div>
              </div>
            </div>
            <div className="intro-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=800&q=80"
                alt="Paradise Nursery Botanical Greenhouse"
                className="about-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="mission-vision-grid">
          <div className="about-card mission-card">
            <div className="card-icon-circle green">
              <Leaf size={28} />
            </div>
            <h3>Our Mission</h3>
            <p>
              To make botanical living accessible, rewarding, and sustainable for every urban household by
              providing hand-picked, premium houseplants alongside the knowledge needed for them to flourish.
            </p>
            <ul className="bullet-list">
              <li>
                <CheckCircle2 size={18} className="list-icon" /> Promoting biological air purification in homes
              </li>
              <li>
                <CheckCircle2 size={18} className="list-icon" /> Supporting eco-conscious and peat-free potting practices
              </li>
              <li>
                <CheckCircle2 size={18} className="list-icon" /> Empowering healthy lifestyle habits through greenery
              </li>
            </ul>
          </div>

          <div className="about-card vision-card">
            <div className="card-icon-circle emerald">
              <Sparkles size={28} />
            </div>
            <h3>Our Vision</h3>
            <p>
              To cultivate a greener tomorrow where every living room, office desk, and balcony thrives as a
              revitalizing pocket forest—fostering mental tranquility, cleaner breathing air, and everyday joy.
            </p>
            <ul className="bullet-list">
              <li>
                <CheckCircle2 size={18} className="list-icon" /> Transforming concrete spaces into biophilic sanctuaries
              </li>
              <li>
                <CheckCircle2 size={18} className="list-icon" /> Championing ethical cultivation and minimal plastic waste
              </li>
              <li>
                <CheckCircle2 size={18} className="list-icon" /> Building a vibrant community of plant lovers worldwide
              </li>
            </ul>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-us-section">
          <div className="section-header text-center">
            <span className="section-label">The Paradise Standard</span>
            <h2>Why Choose Paradise Nursery?</h2>
            <p className="section-desc">
              We treat every plant like family before it becomes a part of yours.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <ShieldCheck size={28} />
              </div>
              <h4>Nursery-Grown Excellence</h4>
              <p>
                Every plant is inspected for robust root systems, pest-free leaves, and optimal hydration before packing.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Truck size={28} />
              </div>
              <h4>Plant-Safe Packaging</h4>
              <p>
                Our specialized shock-resistant, breathable boxes ensure your botanical companions arrive in pristine condition.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <HeartHandshake size={28} />
              </div>
              <h4>Lifetime Care Guidance</h4>
              <p>
                Detailed sunlight, water, and repotting instructions accompany every purchase, backed by our horticulture team.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Award size={28} />
              </div>
              <h4>Fair & Transparent Pricing</h4>
              <p>
                Direct farm-to-doorstep model ensures genuine Indian Rupee (₹) affordability without any middleman markups.
              </p>
            </div>
          </div>
        </section>

        {/* Quality Commitment Banner */}
        <section className="commitment-card">
          <div className="commitment-content">
            <h2>Our Commitment to Customer Satisfaction</h2>
            <p>
              Your satisfaction is our utmost priority. If your plant arrives stressed or damaged, our 30-day
              Happiness Guarantee ensures a hassle-free replacement or full refund.
            </p>
            <div className="commitment-actions">
              <Link to="/plants" className="btn btn-primary btn-large">
                Explore Our Plant Collection <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
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
            <Link to="/cart">Cart</Link>
          </div>
          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} Paradise Nursery. All rights reserved. Coursera Final Project.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
