import { NavLink } from "react-router-dom";

export default function Banner() {
  return (
    <section className="banner staff-travel-banner">
      <div className="banner-inner">
        <div className="banner-copy">
          <h1>
            <span className="heading-line text-accent">Smart. Simple.</span>
            <span className="heading-line text-accent">Seamless.</span>
            <span className="heading-line">Staff Travel Made for</span>
            <span className="heading-line">Airlines.</span>
          </h1>
          <p className="banner-text">
            My Staff Travel is a modern staff travel solution designed for
            airlines to digitize and simplify the end-to-end employee travel
            experience. Configurable to your policies and processes, it empowers
            your people and streamlines operations.
          </p>
          <div className="banner-actions">
            <NavLink className="hero-button primary" to="/contact">
              Request Demo
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
