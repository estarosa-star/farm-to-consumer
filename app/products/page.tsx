import Link from "next/link";
import { farms, products } from "@/lib/data";

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Fresh food. Fair prices. Local trust.</span>
            <h1>Connecting farms directly to the people who eat their food.</h1>
            <p>
              Discover local produce, support nearby growers, and get market-fresh groceries
              delivered directly from farm to kitchen.
            </p>
            <div className="hero-actions">
              <Link href="/products" className="primary-button">
                Shop local produce
              </Link>
              <Link href="/dashboard" className="secondary-button">
                Become a seller
              </Link>
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
          <Link href="/products" className="secondary-button">
            View all products
          </Link>
        </div>

        <div className="product-grid">
          {products.slice(0, 6).map((product) => (
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
                  <button type="button">Add to cart</button>
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
          <Link href="/farmers" className="secondary-button">
            Explore farms
          </Link>
        </div>

        <div className="farms-grid">
          {farms.map((farm) => (
            <div key={farm.name} className="farm-card">
              <div className="farm-icon">🌾</div>
              <h3>{farm.name}</h3>
              <p>{farm.subtitle}</p>
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
        <Link href="/login" className="primary-button">
          Get started today
        </Link>
      </section>
    </main>
  );
}
