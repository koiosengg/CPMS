import Banner1 from "../../assets/Home/Banner/Banner1.webp";

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner-inner">
        <div className="banner-copy">
          <h1>
            <span className="heading-line">Real-Time Crew</span>
            <span className="heading-line">
              Management <span className="text-accent">for</span>
            </span>
            <span className="heading-line text-accent">Modern Airlines</span>
          </h1>
          <p className="banner-text">
            Plan, assign, and monitor crew operations with full visibility.
            Eliminate scheduling conflicts and improve operational efficiency
            with a centralized platform.
          </p>
        </div>

        <div className="banner-media">
          <img src={Banner1} alt="Aviation Operations Banner" />
        </div>
      </div>
    </section>
  );
}
