"use client";

import { useEffect, useMemo, useState } from "react";
import { products, categories, farms } from "@/lib/data";

export type CartItem = {
  id: number;
  name: string;
  farm: string;
  price: number;
  quantity: number;
};

export default function ShoppingCartPage() {
  const [cart, setCart] = useState<CartItem[]>([
    { id: 1, name: "Organic Tomato Box", farm: "Green Valley Acres", price: 12, quantity: 1 },
    { id: 4, name: "Heirloom Greens Mix", farm: "Meadow & Root", price: 15, quantity: 2 },
  ]);
  const [selectedFarm, setSelectedFarm] = useState("All farms");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    document.title = "FarmCart | Cart";
  }, []);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = subtotal > 0 ? 5.99 : 0;
  const total = subtotal + delivery;

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const farmMatch = selectedFarm === "All farms" || product.farm === selectedFarm;
      const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
      return farmMatch && categoryMatch;
    });
  }, [selectedFarm, selectedCategory]);

  const updateQuantity = (id: number, change: number) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <main className="content-page cart-page">
      <section className="page-hero compact">
        <div>
          <span className="eyebrow deep">Your basket</span>
          <h1>Fresh picks ready for checkout.</h1>
        </div>
      </section>

      <section className="cart-layout">
        <div className="cart-items-panel">
          <div className="cart-summary-header">
            <h2>Cart items</h2>
            <span>{cart.length} items</span>
          </div>

          {cart.length === 0 ? (
            <div className="empty-state">Your cart is empty.</div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item-row">
                <div className="cart-item-preview">🥬</div>
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>{item.farm}</p>
                </div>
                <div className="quantity-control">
                  <button type="button" onClick={() => updateQuantity(item.id, -1)}>
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button type="button" onClick={() => updateQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
                <strong>${item.price * item.quantity}</strong>
              </div>
            ))
          )}

          <div className="shop-more-box">
            <h3>Continue shopping</h3>
            <div className="filter-row">
              <select value={selectedFarm} onChange={(e) => setSelectedFarm(e.target.value)}>
                <option value="All farms">All farms</option>
                {farms.map((farm) => (
                  <option key={farm.name} value={farm.name}>
                    {farm.name}
                  </option>
                ))}
              </select>

              <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="shop-list-grid">
              {filteredProducts.slice(0, 4).map((product) => (
                <div key={product.id} className="mini-product-card">
                  <div className="mini-image">{product.icon}</div>
                  <div>
                    <strong>{product.name}</strong>
                    <p>${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="checkout-panel">
          <h3>Order summary</h3>

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

          <button type="button" className="primary-button full-width checkout-btn">
            Proceed to checkout
          </button>

          <div className="checkout-note">
            <span>Pickup or doorstep delivery available</span>
            <strong>Arrives within 24 hours</strong>
          </div>
        </aside>
      </section>
    </main>
  );
}
