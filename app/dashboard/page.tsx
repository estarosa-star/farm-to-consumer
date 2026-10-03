import { dashboardStats, inventory, recentOrders } from "@/lib/data";

export default function DashboardPage() {
  return (
    <main className="content-page dashboard-page">
      <section className="page-hero compact">
        <div>
          <span className="eyebrow deep">Farmer dashboard</span>
          <h1>Manage harvests, stock, and orders.</h1>
        </div>
      </section>

      <section className="section-wrap">
        <div className="stat-grid">
          {dashboardStats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="info-grid">
        <div className="panel-box">
          <h3>Inventory overview</h3>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((row) => (
                <tr key={row.item}>
                  <td>{row.item}</td>
                  <td>{row.qty}</td>
                  <td>
                    <span className={row.status === "Low stock" ? "status low" : "status good"}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="panel-box">
          <h3>Recent orders</h3>
          <ul className="order-list">
            {recentOrders.map((order) => (
              <li key={order.id}>
                <div>
                  <strong>{order.customer}</strong>
                  <span>
                    {order.item} · {order.id}
                  </span>
                </div>
                <em>{order.total}</em>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
