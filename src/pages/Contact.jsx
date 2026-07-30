import { BriefcaseBusiness, Handshake, Headphones } from "lucide-react";

const contactChannels = [
  {
    icon: BriefcaseBusiness,
    title: "Sales and Business",
    email: "abcd1234@gmail.com",
  },
  {
    icon: Handshake,
    title: "Partners",
    email: "partners1234@gmail.com",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    email: "support1234@gmail.com",
  },
];

const faqs = Array.from({ length: 4 }, (_, index) => ({
  id: index + 1,
  title: "Lorem ipsum dolor sit amet consectetur.",
  text: "Lorem ipsum dolor sit amet consectetur. Sit fames magna nunc ornare turpis. Eget arcu mauris a cursus laoreet dolor vel. Nisl nisl et quam etiam. Nunc praesent quis bibendum elementum non lobortis. Ligula massa aliquet eget sodales aenean. Lorem egestas odio id nunc in. Luctus.",
}));

export default function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero" aria-labelledby="contact-title">
        <div className="contact-hero-inner">
          <div className="product-preview-heading">
            <h1 id="contact-title">Contact Us</h1>
            <span>
              At FutureSphere our mission is to empower individuals and
              businesses through innovative technology solutions that enrich
              lives, foster growth, and drive positive change.
            </span>
          </div>

          <form className="contact-card">
            <div className="contact-form-grid">
              <label>
                Full Name
                <input type="text" name="fullName" placeholder="John Doe" />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="Johndoe@gmail.com"
                />
              </label>
            </div>

            <label className="message-label">
              Message
              <textarea name="message" placeholder="Type here..." rows="7" />
            </label>

            <button type="submit">Submit</button>
          </form>

          <div className="contact-channel-strip" aria-label="Contact channels">
            {contactChannels.map((channel) => (
              <article className="contact-channel" key={channel.email}>
                <span className="contact-channel-icon" aria-hidden="true">
                  <channel.icon size={22} strokeWidth={2.1} />
                </span>
                <p>{channel.title}</p>
                <a href={`mailto:${channel.email}`}>{channel.email}</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
