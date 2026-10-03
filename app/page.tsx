"use client";

import { useMemo, useState } from "react";

const categories = ["All", "Vegetables", "Fruit", "Dairy", "Grains", "Herbs"] as const;

const products = [
  {
    id: 1,
    name: "Organic Tomato Box",
    price: 12,
    category: "Vegetables",
    farm: "Green Valley Acres",
    location: "Bakersfield, CA",
    rating: 4.9,
    distance: "4 mi away",
    tag: "Best seller",
    accent: "#d9f39f",
  },
  {
    id: 2,
    name: "Citrus Harvest Basket",
    price: 18,
    category: "Fruit",
    farm: "Sunrise Orchard",
    location: "Fresno, CA",
    rating: 4.8,
    distance: "7 mi away",
    tag: "New this week",
    accent: "#ffe39c",
  },
  {
    id: 3,
    name: "Farmhouse Milk",
    price: 8,
    category: "Dairy",
    farm: "Clover Creek Dairy",
    location: "Modesto, CA",
    rating: 4.7,
    distance: "11 mi away",
    tag: "Local favorite",
    accent: "#d0e9ff",
  },
  {
    id: 4,
    name: "Heirloom Greens Mix",
    price: 15,
    category: "Vegetables",
    farm: "Meadow & Root",
    location: "Sacramento, CA",
    rating: 5.0,
    distance: "9 mi away",
    tag: "Fresh today",
    accent: "#cfe8c7",
  },
  {
    id: 5,
    name: "Wildflower Honey",
    price: 14,
    category: "Herbs",
    farm: "Hillside Apiary",
    location: "Sonoma, CA",
    rating: 4.9,
    distance: "13 mi away",
    tag: "Small batch",
    accent: "#f7d8ae",
  },
  {
    id: 6,
    name: "Stoneground Flour Pack",
    price: 11,
    category: "Grains",
    farm: "Northwind Mill",
    location: "Ashland, OR",
    rating: 4.8,
    distance: "16 mi away",
    tag: "Baked fresh",
    accent: "#f9d3d3",
  },
] as const;

const farms = [
  {
    name: "Green Valley Acres",
    type: "Family farm",
    metric: "98% organic",
    city: "Bakersfield",
  },
  {
    name: "Sunrise Orchard",
    type: "Fruit growers",
    metric: "12 varieties",
    city: "Fresno",
  },
  {
    name: "Clover Creek Dairy",
    type: "Pasture raised",
    metric: "Daily pickup",
    city: "Modesto",
  },
];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");

  const visibleProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="page-shell">
      <section className="hero-section">
        <nav className="topbar">
          <div className="brand-wrap">
            <div className="logo">F</div>
            <span>FarmCart</span>
          </div>
          <div className="nav-links">
            <a href="#marketplace">Marketplace</a>
            <a href="#farmers">Farmers</a>
            <a href="#how-it-works">How it works</a>
          </div>
          <button className="primary-button small">Join as a farmer</button>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Fresh food. Fair prices. Local trust.</span>
            <h1>Connecting farms directly to the people who eat their food.</h1>
            <p>
              Discover seasonal produce, support nearby growers, and get market-fresh food
              delivered to your doorstep without the middleman.
            </p>
            <div className="hero-actions">
              <button className="primary-button">Shop local produce</button>
              <button className="secondary-button">Become a seller</button>
            </div>
            <div className="stats-row">
              <div>
                <strong>1,200+</strong>
                <span>Local farms</span>
              </div>
              <div>
                <strong>28k</strong>
                <span>Happy households</span>
              </div>
              <div>
                <strong>4.9/5</strong>
                <span>Average rating</span>
              </div>
            </div>
          </div>

          <div className="hero-card-panel">
            <div className="mini-card large">
              <div className="mini-header">
                <span>Today’s harvest</span>
                <span className="badge">Live</span>
              </div>
              <ul>
                <li>
                  <span>Tomatoes</span>
                  <strong>18 crates</strong>
                </li>
                <li>
                  <span>Peaches</span>
                  <strong>9 crates</strong>
                </li>
                <li>
                  <span>Herbs</span>
                  <strong>24 bunches</strong>
                </li>
              </ul>
            </div>
            <div className="mini-card small">
              <span className="avatar">SF</span>
              <div>
                <strong>Sunlit Fields</strong>
                <p>Pickup in 2 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marketplace" id="marketplace">
        <div className="section-heading">
          <div>
            <span className="eyebrow deep">Marketplace</span>
            <h2>Fresh picks near you</h2>
          </div>
          <button className="secondary-button">View all products</button>
        </div>

        <div className="category-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "tab active" : "tab"}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {visibleProducts.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-image" style={{ background: product.accent }}>
                <span>{product.tag}</span>
              </div>
              <div className="product-details">
                <div className="product-meta">
                  <span>{product.category}</span>
                  <span>⭐ {product.rating}</span>
                </div>
                <h3>{product.name}</h3>
                <div className="farm-line">
                  <strong>{product.farm}</strong>
                  <span>{product.distance}</span>
                </div>
                <p>{product.location}</p>
                <div className="product-footer">
                  <strong>${product.price}</strong>
                  <button>Add to cart</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="farmers-section" id="farmers">
        <div className="section-heading">
          <div>
            <span className="eyebrow deep">Featured farms</span>
            <h2>Trusted producers in your area</h2>
          </div>
        </div>

        <div className="farms-grid">
          {farms.map((farm) => (
            <div key={farm.name} className="farm-card">
              <div className="farm-icon">🌾</div>
              <h3>{farm.name}</h3>
              <p>{farm.type}</p>
              <div className="farm-card-footer">
                <span>{farm.metric}</span>
                <strong>{farm.city}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="how-it-works" id="how-it-works">
        <div className="section-heading center">
          <div>
            <span className="eyebrow deep">How it works</span>
            <h2>Simple, transparent, and local</h2>
          </div>
        </div>

        <div className="steps-grid">
          <div className="step-box">
            <span>01</span>
            <h3>Browse farms</h3>
            <p>Find fresh products from ethical local farms near you.</p>
          </div>
          <div className="step-box">
            <span>02</span>
            <h3>Pick your box</h3>
            <p>Choose seasonal items, bundles, and delivery windows.</p>
          </div>
          <div className="step-box">
            <span>03</span>
            <h3>Track the harvest</h3>
            <p>Receive updates from farmers and enjoy your groceries faster.</p>
          </div>
        </div>
      </section>

      <section className="cta-panel">
        <div>
          <span className="eyebrow deep">For farmers and buyers</span>
          <h2>Bring better food to your community.</h2>
        </div>
        <button className="primary-button">Get started today</button>
      </section>
    </main>
  );
}
