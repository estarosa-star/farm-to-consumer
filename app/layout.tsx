export default function LoginPage() {
  return (
    <main className="content-page auth-page">
      <section className="auth-card">
        <div className="auth-copy">
          <span className="eyebrow deep">Welcome back</span>
          <h1>Sign in to your farm marketplace account.</h1>
          <p>Manage your orders, connect with growers, and support local food communities.</p>
        </div>

        <form className="auth-form">
          <label>
            Email address
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="••••••••" />
          </label>
          <button type="submit" className="primary-button full-width">
            Sign in
          </button>
          <button type="button" className="secondary-button full-width">
            Continue with Google
          </button>
        </form>
      </section>
    </main>
  );
}
