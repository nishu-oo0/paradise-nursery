import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  selectCartItems,
  selectTotalQuantity,
} from './CartSlice';
import {
  Leaf,
  ShoppingCart,
  Check,
  Plus,
  Sparkles,
  Wind,
  Flower2,
  ShieldAlert,
  Search,
  Filter,
} from 'lucide-react';
import './App.css';

// Plant catalog with at least 3 categories and 6+ plants per category (total 21 plants)
export const plantCatalog = [
  // Category 1: Air Purifying Plants
  {
    id: 1,
    name: 'Snake Plant',
    category: 'Air Purifying Plants',
    price: 449,
    image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bf6?auto=format&fit=crop&w=600&q=80',
    description: 'Produces oxygen at night and removes toxins like formaldehyde, benzene, and xylene from indoor air.',
  },
  {
    id: 2,
    name: 'Spider Plant',
    category: 'Air Purifying Plants',
    price: 299,
    image: 'https://images.unsplash.com/photo-1572688484437-1e5b15886675?auto=format&fit=crop&w=600&q=80',
    description: 'Highly resilient plant with arching foliage that actively filters carbon monoxide and household pollutants.',
  },
  {
    id: 3,
    name: 'Peace Lily',
    category: 'Air Purifying Plants',
    price: 549,
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=600&q=80',
    description: 'Elegant white blooms that break down harmful airborne gases, acetone, and mold spores naturally.',
  },
  {
    id: 4,
    name: 'Boston Fern',
    category: 'Air Purifying Plants',
    price: 399,
    image: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=600&q=80',
    description: 'Lush feathery fronds that naturally purify indoor air while serving as a natural humidifier.',
  },
  {
    id: 5,
    name: 'Rubber Plant',
    category: 'Air Purifying Plants',
    price: 649,
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=600&q=80',
    description: 'Glossy dark green leaves that eliminate indoor toxins, absorb airborne chemicals, and trap dust particles.',
  },
  {
    id: 6,
    name: 'Aloe Vera',
    category: 'Air Purifying Plants',
    price: 349,
    image: 'https://images.unsplash.com/photo-1567689265664-1c48de61db0b?auto=format&fit=crop&w=600&q=80',
    description: 'Soothing succulent that clears benzene and aldehydes while doubling as a natural first-aid burn gel.',
  },
  {
    id: 7,
    name: 'English Ivy',
    category: 'Air Purifying Plants',
    price: 379,
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80',
    description: 'Charming trailing vine known to reduce airborne mold particles and volatile organic compounds.',
  },

  // Category 2: Indoor Decorative Plants
  {
    id: 8,
    name: 'Monstera Deliciosa',
    category: 'Indoor Decorative Plants',
    price: 799,
    image: 'https://images.unsplash.com/photo-1617173944883-6ffbd35d584d?auto=format&fit=crop&w=600&q=80',
    description: 'Iconic split Swiss-cheese leaves that bring a bold, vibrant tropical aesthetic to any room or office corner.',
  },
  {
    id: 9,
    name: 'Fiddle Leaf Fig',
    category: 'Indoor Decorative Plants',
    price: 999,
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=600&q=80',
    description: 'Dramatic architectural statement plant with broad, violin-shaped foliage that commands modern interiors.',
  },
  {
    id: 10,
    name: 'Calathea Medallion',
    category: 'Indoor Decorative Plants',
    price: 599,
    image: 'https://images.unsplash.com/photo-1598880940371-c756e015fea1?auto=format&fit=crop&w=600&q=80',
    description: 'Intricate feather-patterned leaves with rich burgundy undersides that fold upwards at sunset.',
  },
  {
    id: 11,
    name: 'Bird of Paradise',
    category: 'Indoor Decorative Plants',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1604762524889-3e2fccbc5668?auto=format&fit=crop&w=600&q=80',
    description: 'Exotic upright banana-like foliage delivering an opulent resort atmosphere to your living room.',
  },
  {
    id: 12,
    name: 'Golden Pothos',
    category: 'Indoor Decorative Plants',
    price: 329,
    image: 'https://images.unsplash.com/photo-1596724803977-8c7604471f49?auto=format&fit=crop&w=600&q=80',
    description: 'Cascading golden-speckled heart leaves, perfect for bookshelves, hanging macrame, and desks.',
  },
  {
    id: 13,
    name: 'Pink Aglaonema',
    category: 'Indoor Decorative Plants',
    price: 579,
    image: 'https://images.unsplash.com/photo-1611211232932-da3113c5b960?auto=format&fit=crop&w=600&q=80',
    description: 'Spectacular splash of vivid pastel pink and emerald foliage that effortlessly brightens dimly lit rooms.',
  },
  {
    id: 14,
    name: 'Anthurium Red',
    category: 'Indoor Decorative Plants',
    price: 699,
    image: 'https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?auto=format&fit=crop&w=600&q=80',
    description: 'Glossy heart-shaped red flowers that bloom all year round, symbolizing hospitality and positive energy.',
  },

  // Category 3: Low Maintenance Plants
  {
    id: 15,
    name: 'ZZ Plant',
    category: 'Low Maintenance Plants',
    price: 549,
    image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=600&q=80',
    description: 'Indestructible waxy foliage that thrives on neglect, low light conditions, and minimal watering cycles.',
  },
  {
    id: 16,
    name: 'Jade Plant',
    category: 'Low Maintenance Plants',
    price: 399,
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80',
    description: 'Symbol of good luck and prosperity; plump jade-green leaves requiring minimal water and attention.',
  },
  {
    id: 17,
    name: 'Cast Iron Plant',
    category: 'Low Maintenance Plants',
    price: 699,
    image: 'https://images.unsplash.com/photo-1616690710400-a16d146927c5?auto=format&fit=crop&w=600&q=80',
    description: 'True to its name, this hardy plant survives temperature fluctuations, deep shade, and missed waterings.',
  },
  {
    id: 18,
    name: 'Haworthia Zebra',
    category: 'Low Maintenance Plants',
    price: 289,
    image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=600&q=80',
    description: 'Compact miniature succulent adorned with striking horizontal white ribs; ideal for compact windowsills.',
  },
  {
    id: 19,
    name: 'Ponytail Palm',
    category: 'Low Maintenance Plants',
    price: 649,
    image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=600&q=80',
    description: 'Swollen bulbous water-storing trunk topped with a playful cascade of long, thin curling leaves.',
  },
  {
    id: 20,
    name: 'Dragon Tree',
    category: 'Low Maintenance Plants',
    price: 599,
    image: 'https://images.unsplash.com/photo-1597055181300-e3633a207518?auto=format&fit=crop&w=600&q=80',
    description: 'Slender architectural trunk crowned with thin ribbon-like leaves edged in dark crimson margins.',
  },
  {
    id: 21,
    name: 'Money Tree',
    category: 'Low Maintenance Plants',
    price: 749,
    image: 'https://images.unsplash.com/photo-1599598425947-52028639255a?auto=format&fit=crop&w=600&q=80',
    description: 'Braided trunk with bright palm-like leaves, celebrated in Feng Shui for attracting wealth and serenity.',
  },
];

const categories = [
  { name: 'All Plants', icon: Sparkles },
  { name: 'Air Purifying Plants', icon: Wind },
  { name: 'Indoor Decorative Plants', icon: Flower2 },
  { name: 'Low Maintenance Plants', icon: ShieldAlert },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);

  const [selectedCategory, setSelectedCategory] = useState('All Plants');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedNotification, setAddedNotification] = useState(null);

  // Check if plant is already added to cart (supports comparison by ID or Name)
  const isPlantInCart = (plant) => {
    return cartItems.some(
      (item) => item.id === plant.id || item.name === plant.name
    );
  };

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
    setAddedNotification(`${plant.name} added to your cart!`);
    setTimeout(() => {
      setAddedNotification(null);
    }, 2500);
  };

  // Filtered plants based on category and search query
  const filteredPlants = plantCatalog.filter((plant) => {
    const matchesCategory =
      selectedCategory === 'All Plants' || plant.category === selectedCategory;
    const matchesSearch =
      plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Distinct category names for grouped sections when "All Plants" is selected
  const categorySections = [
    {
      title: 'Air Purifying Plants',
      subtitle: 'Natural oxygen powerhouses that cleanse and refresh your indoor atmosphere.',
      icon: Wind,
    },
    {
      title: 'Indoor Decorative Plants',
      subtitle: 'Sculptural tropical foliage designed to elevate your interior living spaces.',
      icon: Flower2,
    },
    {
      title: 'Low Maintenance Plants',
      subtitle: 'Resilient and hardy companions that flourish with effortless care.',
      icon: ShieldAlert,
    },
  ];

  return (
    <div className="product-list-page">
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
          <Link to="/plants" className="nav-link active">
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

      {/* Hero / Banner */}
      <section className="catalog-hero">
        <div className="container">
          <span className="badge-pill">
            <Sparkles size={16} /> Curated Botanical Collection
          </span>
          <h1 className="catalog-title">Discover Your Perfect Green Companion</h1>
          <p className="catalog-subtitle">
            Explore 21 hand-nurtured houseplant varieties across Air Purifying, Decorative,
            and Low Maintenance collections.
          </p>

          {/* Search Bar */}
          <div className="search-bar-wrapper">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search plants by name or botanical benefit..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Floating notification alert */}
      {addedNotification && (
        <div className="toast-notification">
          <Check size={18} />
          <span>{addedNotification}</span>
        </div>
      )}

      {/* Filter Tabs */}
      <div className="container filter-container">
        <div className="category-tabs">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const count =
              cat.name === 'All Plants'
                ? plantCatalog.length
                : plantCatalog.filter((p) => p.category === cat.name).length;

            return (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`category-tab ${
                  selectedCategory === cat.name ? 'active' : ''
                }`}
              >
                <Icon size={18} />
                <span>{cat.name}</span>
                <span className="tab-count">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Display Section */}
      <main className="container catalog-main">
        {selectedCategory === 'All Plants' && !searchQuery ? (
          // Grouped by Category Sections when All Plants is selected
          categorySections.map((sec) => {
            const plantsInSec = plantCatalog.filter(
              (p) => p.category === sec.title
            );
            const SecIcon = sec.icon;

            return (
              <section key={sec.title} className="category-section">
                <div className="section-title-wrap">
                  <div className="section-title-left">
                    <div className="category-icon-tag">
                      <SecIcon size={20} />
                    </div>
                    <div>
                      <h2 className="category-heading">{sec.title}</h2>
                      <p className="category-subheading">{sec.subtitle}</p>
                    </div>
                  </div>
                  <span className="badge-outline">
                    {plantsInSec.length} Plants Available
                  </span>
                </div>

                <div className="plants-grid">
                  {plantsInSec.map((plant) => {
                    const inCart = isPlantInCart(plant);
                    return (
                      <article key={plant.id} className="plant-card">
                        <div className="plant-image-container">
                          <img
                            src={plant.image}
                            alt={plant.name}
                            className="plant-image"
                            loading="lazy"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src =
                                'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80';
                            }}
                          />
                          <span className="plant-category-badge">
                            {plant.category}
                          </span>
                        </div>

                        <div className="plant-card-content">
                          <h3 className="plant-name">{plant.name}</h3>
                          <p className="plant-desc">{plant.description}</p>

                          <div className="plant-card-footer">
                            <div className="plant-price-wrap">
                              <span className="price-currency">₹</span>
                              <span className="price-amount">
                                {plant.price.toLocaleString('en-IN')}
                              </span>
                            </div>

                            <button
                              type="button"
                              className={`btn add-to-cart-btn ${
                                inCart ? 'btn-added' : 'btn-primary'
                              }`}
                              disabled={inCart}
                              onClick={() => handleAddToCart(plant)}
                            >
                              {inCart ? (
                                <>
                                  <Check size={18} />
                                  <span>Added to Cart</span>
                                </>
                              ) : (
                                <>
                                  <Plus size={18} />
                                  <span>Add to Cart</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })
        ) : (
          // Filtered Grid (by tab or search)
          <section className="category-section">
            <div className="section-title-wrap">
              <div>
                <h2 className="category-heading">
                  {searchQuery ? `Search Results for "${searchQuery}"` : selectedCategory}
                </h2>
                <p className="category-subheading">
                  Found {filteredPlants.length} plants matching your criteria.
                </p>
              </div>
            </div>

            {filteredPlants.length === 0 ? (
              <div className="empty-catalog-state">
                <Leaf size={48} className="empty-icon" />
                <h3>No plants found</h3>
                <p>Try searching for a different plant name or clear the search filters.</p>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    setSelectedCategory('All Plants');
                    setSearchQuery('');
                  }}
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="plants-grid">
                {filteredPlants.map((plant) => {
                  const inCart = isPlantInCart(plant);
                  return (
                    <article key={plant.id} className="plant-card">
                      <div className="plant-image-container">
                        <img
                          src={plant.image}
                          alt={plant.name}
                          className="plant-image"
                          loading="lazy"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80';
                          }}
                        />
                        <span className="plant-category-badge">
                          {plant.category}
                        </span>
                      </div>

                      <div className="plant-card-content">
                        <h3 className="plant-name">{plant.name}</h3>
                        <p className="plant-desc">{plant.description}</p>

                        <div className="plant-card-footer">
                          <div className="plant-price-wrap">
                            <span className="price-currency">₹</span>
                            <span className="price-amount">
                              {plant.price.toLocaleString('en-IN')}
                            </span>
                          </div>

                          <button
                            type="button"
                            className={`btn add-to-cart-btn ${
                              inCart ? 'btn-added' : 'btn-primary'
                            }`}
                            disabled={inCart}
                            onClick={() => handleAddToCart(plant)}
                          >
                            {inCart ? (
                              <>
                                <Check size={18} />
                                <span>Added to Cart</span>
                              </>
                            ) : (
                              <>
                                <Plus size={18} />
                                <span>Add to Cart</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </section>
        )}
      </main>

      {/* Bottom Cart Bar (if items in cart) */}
      {totalQuantity > 0 && (
        <div className="floating-cart-bar">
          <div className="container floating-cart-content">
            <div className="floating-cart-info">
              <span className="floating-count">{totalQuantity} items in cart</span>
              <span className="floating-hint">Ready to green up your space?</span>
            </div>
            <Link to="/cart" className="btn btn-primary floating-btn">
              <ShoppingCart size={18} />
              <span>Review Cart & Checkout</span>
            </Link>
          </div>
        </div>
      )}

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

export default ProductList;
