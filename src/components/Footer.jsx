import { NavLink } from "react-router-dom";
import FooterLogo from "../assets/Footer/Logo.webp";

const footerLinks = [
  [
    { label: "Home", path: "/" },
    { label: "Crew360.PM.AI", path: "/product/crew-360" },
    { label: "Aviation Staff Travel Solution", path: "/product/staff-travel" },
  ],
  [
    { label: "Contact", path: "/contact" },
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms and Condition", path: "/privacy-policy" },
  ],
];

const socialLinks = [
  {
    label: "X",
    href: "https://x.com",
    icon: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        {...props}
      >
        <path
          d="M12.6007 0.768555H15.054L9.694 6.89522L16 15.2306H11.0627L7.196 10.1746L2.77067 15.2306H0.316L6.04933 8.67722L0 0.769221H5.06267L8.558 5.39056L12.6007 0.768555ZM11.74 13.7626H13.0993L4.324 2.15989H2.86533L11.74 13.7626Z"
          fill="#636363"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        {...props}
      >
        <g clipPath="url(#clip0_3293_32)">
          <path
            d="M13.6313 13.6347H11.262V9.922C11.262 9.03667 11.244 7.89733 10.0273 7.89733C8.792 7.89733 8.60333 8.86067 8.60333 9.85667V13.6347H6.234V6H8.51V7.04067H8.54067C8.85867 6.44067 9.632 5.80733 10.7873 5.80733C13.188 5.80733 13.632 7.38733 13.632 9.444L13.6313 13.6347ZM3.558 4.95533C3.37725 4.95542 3.19826 4.91986 3.03127 4.85069C2.86428 4.78152 2.71257 4.6801 2.58483 4.55223C2.45708 4.42436 2.3558 4.27255 2.2868 4.1055C2.21779 3.93844 2.1824 3.75941 2.18267 3.57867C2.1828 3.30652 2.26363 3.04052 2.41494 2.81431C2.56624 2.58811 2.78123 2.41184 3.03271 2.30782C3.28419 2.2038 3.56087 2.17668 3.82776 2.2299C4.09466 2.28313 4.33977 2.4143 4.53212 2.60683C4.72446 2.79936 4.85539 3.0446 4.90836 3.31154C4.96132 3.57849 4.93394 3.85514 4.82967 4.10652C4.7254 4.3579 4.54893 4.57272 4.32258 4.72381C4.09622 4.87489 3.83015 4.95547 3.558 4.95533ZM4.746 13.6347H2.37V6H4.746V13.6347ZM14.8167 0H1.18067C0.528 0 0 0.516 0 1.15267V14.8473C0 15.4847 0.528 16 1.18067 16H14.8147C15.4667 16 16 15.4847 16 14.8473V1.15267C16 0.516 15.4667 0 14.8147 0H14.8167Z"
            fill="#636363"
          />
        </g>
        <defs>
          <clipPath id="clip0_3293_32">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        {...props}
      >
        <g clipPath="url(#clip0_3293_65)">
          <path
            d="M8 0.197998C3.58 0.197998 0 3.78 0 8.198C0 11.7333 2.292 14.7313 5.47 15.788C5.87 15.8633 6.01667 15.616 6.01667 15.4033C6.01667 15.2133 6.01 14.71 6.00667 14.0433C3.78133 14.526 3.312 12.97 3.312 12.97C2.948 12.0467 2.422 11.8 2.422 11.8C1.69733 11.304 2.478 11.314 2.478 11.314C3.28133 11.37 3.70333 12.138 3.70333 12.138C4.41667 13.3613 5.576 13.008 6.03333 12.8033C6.10533 12.286 6.31133 11.9333 6.54 11.7333C4.76333 11.5333 2.896 10.8453 2.896 7.78C2.896 6.90666 3.206 6.19333 3.71933 5.63333C3.62933 5.43133 3.35933 4.618 3.78933 3.516C3.78933 3.516 4.45933 3.30133 5.98933 4.336C6.62933 4.158 7.30933 4.07 7.98933 4.066C8.66933 4.07 9.34933 4.158 9.98933 4.336C11.5093 3.30133 12.1793 3.516 12.1793 3.516C12.6093 4.618 12.3393 5.43133 12.2593 5.63333C12.7693 6.19333 13.0793 6.90666 13.0793 7.78C13.0793 10.8533 11.2093 11.53 9.42933 11.7267C9.70933 11.9667 9.96933 12.4573 9.96933 13.2067C9.96933 14.2773 9.95933 15.1373 9.95933 15.3973C9.95933 15.6073 10.0993 15.8573 10.5093 15.7773C13.71 14.728 16 11.728 16 8.198C16 3.78 12.418 0.197998 8 0.197998Z"
            fill="#636363"
          />
        </g>
        <defs>
          <clipPath id="clip0_3293_65">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];

function FooterLink({ link }) {
  if (link.path.includes("#")) {
    return (
      <a href={link.path} className="footer-link">
        {link.label}
      </a>
    );
  }

  return (
    <NavLink to={link.path} className="footer-link">
      {link.label}
    </NavLink>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <section className="footer-main" aria-label="Footer navigation">
        <div className="footer-main-inner">
          <div className="footer-top">
            <div className="footer-brand-block">
              <NavLink className="footer-brand" to="/">
                <img src={FooterLogo} alt="CPMS Footer Logo" />
              </NavLink>
              <p>
                Crew Planning & Management System. The modern operations
                platform for airlines and aviation companies.
              </p>
            </div>

            <nav className="footer-links" aria-label="Footer links">
              {footerLinks.map((column, index) => (
                <div className="footer-link-column" key={index}>
                  {column.map((link) => (
                    <FooterLink link={link} key={link.label} />
                  ))}
                </div>
              ))}
            </nav>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>© 2026 CPMS. All rights reserved.</p>
              <p className="footer-credit">
                Crafted by{" "}
                <a
                  href="https://www.koiostudio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="koiostudio-link"
                >
                  Koiostudio
                </a>
              </p>
            </div>
            <div className="footer-social" aria-label="Social links">
              {socialLinks.map((social) => (
                <a
                  href={social.href}
                  className="footer-social-link"
                  key={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon size={17} strokeWidth={2.2} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
