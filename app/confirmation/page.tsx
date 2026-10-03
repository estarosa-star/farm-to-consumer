import Link from "next/link";

export default function ConfirmationPage() {
  return (
    <main className="content-page confirmation-page">
      <section className="confirmation-box">
        <span className="eyebrow deep">Order confirmed</span>
        <h1>Thanks for supporting local farms.</h1>
        <p>
          Your fresh order has been placed and a confirmation email is on the way.
          We’ll notify you as soon as your produce is packed and scheduled for delivery.
        </p>

        <div className="confirmation-summary">
          <div>
            <span>Order #</span>
            <strong>FMC-2048</strong>
          </div>
          <div>
            <span>ETA</span>
            <strong>Today, 6:30 PM</strong>
          </div>
          <div>
            <span>Total</span>
            <strong>$39.98</strong>
          </div>
        </div>

        <div className="confirmation-actions">
          <Link href="/products" className="primary-button">
            Continue shopping
          </Link>
          <Link href="/dashboard" className="secondary-button">
            View dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}
