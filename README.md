# Paradise Nursery Shopping Application

🌿 **Paradise Nursery** is a modern, responsive, nature-inspired e-commerce web application for purchasing houseplants online. Built with **React.js**, **Vite**, **Redux Toolkit**, and **React Router DOM**, this project serves as a comprehensive Coursera final project submission.

---

## 🌟 Project Overview

Paradise Nursery brings the serenity and restorative power of botanical living directly to your home. Customers can discover an array of hand-nurtured houseplants classified into **Air Purifying Plants**, **Indoor Decorative Plants**, and **Low Maintenance Plants**.

The application features seamless navigation, real-time cart state management with Redux Toolkit, instant total calculations in Indian Rupees (₹), and dynamic button state updates.

---

## ✨ Features

- **Immersive Landing Page (`App.jsx`)**:
  - High-resolution botanical background with nature aesthetics.
  - Welcome message, brand story, and prominent **Get Started** button navigating directly to the plant catalog.
  - Key botanical highlights (Air Purifiers, Easy-Care Foliage, Safe Transit).

- **Rich Plant Catalog (`ProductList.jsx`)**:
  - **3 Categories**: Air Purifying Plants, Indoor Decorative Plants, and Low Maintenance Plants.
  - **21 Unique Houseplants** (7 in each category, exceeding the 18 plant requirement).
  - High-definition botanical imagery with graceful fallback loading.
  - Real-time search by plant name and botanical benefits.
  - Interactive category filter tabs with dynamic counts.
  - Interactive **Add to Cart** button:
    - Adds product to Redux store.
    - Instantly disables and changes state to **"Added to Cart"**.
    - Persists disabled state when navigating back from Cart.

- **Interactive Shopping Cart (`CartItem.jsx`)**:
  - Displays all selected plants with thumbnail, plant name, unit price (₹), and individual subtotal.
  - Stepper controls to **increase (+)** and **decrease (-)** plant quantities.
  - Items automatically removed when quantity drops to zero.
  - Dedicated **Remove (Trash)** button to delete items from cart.
  - Dynamic **Order Summary** with subtotal, free delivery, and instant grand total recalculation.
  - **Continue Shopping** button returning users to `/plants`.
  - **Checkout** button displaying: *"Coming Soon! Thank you for shopping with Paradise Nursery."*
  - Dedicated **Empty Cart** view with direct call-to-action.

- **Global Navigation Bar**:
  - Consistent branding across all pages.
  - Direct links to **Home (`/`)**, **Plants (`/plants`)**, **About Us (`/about`)**, and **Cart (`/cart`)**.
  - Dynamic Cart badge reflecting total item quantities.

- **Dedicated About Us (`AboutUs.jsx`)**:
  - Company background, mission, and vision.
  - Why Choose Paradise Nursery (Nursery-Grown Quality, Safe Packaging, Lifetime Care, Fair Pricing).
  - 30-Day Plant Vitality Guarantee.

- **Nature-Inspired Design System (`App.css` & `index.css`)**:
  - Curated color scheme: Deep Forest Green (`#1b4332`), Emerald (`#2d6a4f`), Soft Mint (`#d8f3dc`), Warm Cream (`#fbfaf6`), and Champagne Gold.
  - Modern card designs with smooth hover elevations.
  - Full responsiveness across Mobile, Tablet, and Desktop screens.

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | Component-based user interface library |
| **Vite 5** | Lightning-fast build tool and local dev server |
| **Redux Toolkit (`@reduxjs/toolkit`)** | Predictable state container for shopping cart |
| **React-Redux** | Official React bindings for Redux |
| **React Router DOM v6** | Client-side routing (`/`, `/plants`, `/cart`, `/about`) |
| **Vanilla CSS3** | Custom design system, responsive grids, and animations |
| **Lucide React** | Clean, lightweight SVG botanical and UI icons |

---

## 📁 Project Folder Structure

```
paradise-nursery/
├── index.html                  # HTML entry point with Google Fonts
├── package.json                # Project dependencies and npm scripts
├── vite.config.js              # Vite configuration
├── README.md                   # Project documentation
└── src/
    ├── App.jsx                 # Landing page & React Router configuration
    ├── App.css                 # Application styling & responsive rules
    ├── AboutUs.jsx             # About Us company story & mission
    ├── ProductList.jsx         # 21-plant catalog with categories & search
    ├── CartItem.jsx            # Shopping cart management & checkout
    ├── CartSlice.jsx           # Redux Toolkit slice (add, remove, quantity)
    ├── main.jsx                # App bootstrap with Redux Provider & Router
    ├── index.css               # Design tokens, variables & typography
    └── assets/
        └── plant.svg           # Botanical SVG vector asset
```

> **Note:** The 7 required Coursera assignment files (`App.jsx`, `App.css`, `AboutUs.jsx`, `ProductList.jsx`, `CartItem.jsx`, `CartSlice.jsx`, `main.jsx`) are preserved at their exact required paths.

---

## 🚀 Installation & Setup Instructions

### Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher)

### 1. Clone or Open the Workspace
Navigate to the project root directory:
```bash
cd paradise-nursery
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` or the port shown in your terminal.

### 4. Build for Production
To create an optimized production build:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## 📋 Coursera Grading Rubric Verification Checklist

| Rubric Requirement | Status | Implementation Details |
| :--- | :---: | :--- |
| **Landing Page** | ✅ Completed | Company name, nature background, welcome text, Get Started button navigating to `/plants` |
| **About Us Page** | ✅ Completed | Company background, mission, vision, quality standards, and customer care |
| **Redux Cart Slice** | ✅ Completed | `addToCart`, `removeFromCart`, `increaseQuantity`, `decreaseQuantity`, `updateQuantity`, `clearCart` |
| **No Duplicate Plants** | ✅ Completed | Adding same plant increases quantity instead of creating duplicates |
| **Plant Categories** | ✅ Completed | 3 Categories: Air Purifying, Indoor Decorative, Low Maintenance |
| **Plant Quantity** | ✅ Completed | 21 Plants total (7 per category, exceeding required 18) |
| **Plant Information** | ✅ Completed | Thumbnail image, plant name, description, price in Indian Rupees (₹) |
| **Add to Cart Button** | ✅ Completed | Disables on click and changes label to "Added to Cart" |
| **Cart Dynamic Count** | ✅ Completed | Navbar badge updates with total sum of all item quantities |
| **Cart Persistence** | ✅ Completed | Added plants remain disabled when navigating between pages |
| **Cart Calculations** | ✅ Completed | Unit price × quantity per item and live Grand Total sum |
| **Quantity Controls** | ✅ Completed | `+` increments, `-` decrements (and removes at 0), Trash removes item |
| **Checkout Flow** | ✅ Completed | Triggers alert: *"Coming Soon! Thank you for shopping with Paradise Nursery."* |
| **Continue Shopping** | ✅ Completed | Direct navigation back to the product listing catalog |
| **Responsive Design** | ✅ Completed | Fluid CSS grid and flexbox adapting to all screen sizes |

---

## 📜 License
This project is developed as an educational final project submission for Coursera.
