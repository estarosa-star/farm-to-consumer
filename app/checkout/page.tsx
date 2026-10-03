import Link from "next/link";
import { products } from "@/lib/data";

export default function CheckoutPage() {
  const subtotal = products.reduce((sum, item) => sum + item.price, 0);
  const delivery = 5.99;
  const total = subtotal + delivery;

  return (
    <main className="content-page checkout-page">
      <section className="page-hero compact">
        <div>
          <span className="eyebrow deep">Secure checkout</span>
          <h1>Complete your order.</h1>
        </div>
      </section>

      <section className="checkout-layout">
        <div className="checkout-form-panel">
          <h2>Delivery details</h2>
          <form className="checkout-form">
            <div className="field-row two-col">
              <label>
                First name
                <input type="text" placeholder="Jane" />
              </label>
              <label>
                Last name
                <input type="text" placeholder="Doe" />
              </label>
            </div>

            <label>
              Email
              <input type="email" placeholder="you@example.com" />
            </label>

            <label>
              Street address
              <input type="text" placeholder="124 Main Street" />
            </label>

            <div className="field-row two-col">
              <label>
                City
                <input type="text" placeholder="Sacramento" />
              </label>
              <label>
                ZIP code
                <input type="text" placeholder="95814" />
              </label>
            </div>

            <label>
              Delivery notes
              <textarea rows={4} placeholder="Leave at the front door if I’m not home." />
            </label>
          </form>
        </div>

        <aside className="checkout-side-panel">
          <h3>Order summary</h3>
          <div className="mini-order-list">
            {products.slice(0, 3).map((product) => (
              <div className="mini-order-item" key={product.id}>
                <span>{product.name}</span>
                <strong>${product.price}</strong>
              </div>
            ))}
          </div>

          <div className="summary-line">
            <span>Subtotal</span>
            <strong>${subtotal.toFixed(2)}</strong>
          </div>
          <div className="summary-line">
            <span>Delivery</span>
            <strong>${delivery.toFixed(2)}</strong>
          </div>
          <div className="summary-line total-line">
            <span>Total</span>
            <strong>${total.toFixed(2)}</strong>
          </div>

          <Link href="/dashboard" className="primary-button full-width checkout-btn">
            Place order
          </Link>
        </aside>
      </section>
    </main>
  );
}
