"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { categories, products } from "@/lib/data";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");

  const visibleProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="content-page">
      <section className="page-hero compact">
        <div>
          <span className="eyebrow deep">Marketplace</span>
          <h1>Fresh produce from trusted local farms.</h1>
        </div>
      </section>

      <section className="filters-bar">
        <div className="category-tabs">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={activeCategory === category ? "tab active" : "tab"}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <div className="product-grid wide">
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
                <p>{product.description}</p>
                <div className="product-footer">
                  <strong>${product.price}</strong>
                  <button type="button">Add to cart</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-panel small-panel">
        <div>
          <span className="eyebrow deep">Support local</span>
          <h2>Need a custom farm box?</h2>
        </div>
        <Link href="/login" className="primary-button">
          Build a basket
        </Link>
      </section>
    </main>
  );
}
