import Link from "next/link";
import { farms } from "@/lib/data";

export default function FarmersPage() {
  return (
    <main className="content-page">
      <section className="page-hero compact">
        <div>
          <span className="eyebrow deep">Our growers</span>
          <h1>Meet the farms behind every fresh order.</h1>
        </div>
      </section>

      <section className="section-wrap">
        <div className="farm-listing">
          {farms.map((farm) => (
            <article key={farm.name} className="farm-detail-card">
              <div className="farm-icon large">🌱</div>
              <div className="farm-copy">
                <div className="farm-heading-row">
                  <h2>{farm.name}</h2>
                  <span>{farm.city}</span>
                </div>
                <p className="farm-subtitle">{farm.subtitle}</p>
                <p>{farm.description}</p>
                <div className="farm-meta-row">
                  <span>{farm.metric}</span>
                  <span>{farm.reviews} reviews</span>
                </div>
                <Link href="/products" className="secondary-button small-inline">
                  Shop this farm
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
