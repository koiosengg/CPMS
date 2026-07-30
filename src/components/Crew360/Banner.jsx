import { NavLink } from "react-router-dom";
import Crew360Img from "../../assets/Crew360/Image.png";

export default function Banner() {
  return (
    <section className="banner crew360-banner">
      <div className="banner-inner">
        <div className="banner-copy">
          <h1>
            <span className="heading-line">AI-Powered</span>
            <span className="heading-line text-accent">Crew Performance &</span>
            <span className="heading-line text-accent">Workforce Platform</span>
          </h1>
          <p className="banner-text">
            Transform crew administration, performance management, disciplinary
            workflows, appraisals, and employee engagement into a single
            intelligent platform.
          </p>
          <div className="banner-actions">
            <NavLink className="hero-button primary" to="/contact">
              Request Demo
            </NavLink>
          </div>
        </div>

        <div className="banner-media">
          <img src={Crew360Img} alt="Crew 360.PM.AI Banner" />
        </div>
      </div>
    </section>
  );
}
