export default function Hero() {
  return (
    <header className="hero">
      <div className="hero__content container">
        <div className="hero__text">
          <h1>
            Read better. <span className="purple">Level up faster.</span>
          </h1>
          <p className="muted">
            Curated business, tech, and personal development titles—delivered
            instantly.
          </p>
          <div className="hero__actions">
            <a href="#featured" className="btn btn--primary">
              Browse Featured
            </a>
            <a href="#new" className="btn btn--ghost">
              See What’s New
            </a>
          </div>
        </div>

        <figure className="hero__art">
          <div className="floating-stack">
            <img src="/assets/clean_code.jpg" alt="Clean Code cover" />
            <img src="/assets/deep_work.jpg" alt="Deep Work cover" />
            <img src="/assets/atomic_habits.jpg" alt="Atomic Habits cover" />
          </div>
        </figure>
      </div>
      <div className="hero__wave"></div>
    </header>
  );
}
