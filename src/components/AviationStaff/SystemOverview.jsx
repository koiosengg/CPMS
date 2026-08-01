import { useState } from "react";
import { ChevronDown } from "lucide-react";
import systemImg from "../../assets/AviationStaff/System/image.webp";

export default function SystemOverview() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="product-system-section staff-overview-section">
      <div className="product-system-inner">
        <div className="product-system-copy-container">
          <div className="product-system-header">
            <p className="product-section-kicker">PRODUCT OVERVIEW</p>
            <h2>
              <span>Introducing </span>
              <span>My Staff Travel</span>
            </h2>
          </div>

          <div className="product-system-body">
            <p>
              MyStaffTravel is a modern airline employee travel platform
              designed to simplify and digitize the entire staff travel
              experience. Built specifically for the aviation industry, the
              solution enables airline employees, retirees, and eligible
              beneficiaries to seamlessly search, book, manage, and track their
              staff travel privileges through an intuitive self-service portal.
              With a flexible and configurable architecture, myStaffTravel
              adapts to your organization's unique staff travel policies,
              approval workflows, eligibility rules, and operational
              requirements, ensuring a solution that fits your business rather
              than forcing your business to fit the software.
            </p>

            <div className={`expandable-content ${isExpanded ? "expanded" : ""}`}>
              <div className="expandable-content-inner">
                <p>
                  Designed for rapid deployment and enterprise-scale operations,
                  myStaffTravel includes built-in connectors to leading airline
                  systems, significantly reducing implementation effort and
                  accelerating time-to-value. The platform supports multiple
                  payment methods, integrates seamlessly with enterprise identity
                  providers through Single Sign-On (SSO), and aligns with modern
                  security, compliance, and architecture standards. Whether your
                  objective is to improve employee experience, reduce
                  administrative overhead, or modernize legacy staff travel
                  processes, myStaffTravel delivers a secure, scalable, and
                  future-ready solution that empowers employees while simplifying
                  administration.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="read-more-btn"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <span>{isExpanded ? "Read Less" : "Read More"}</span>
              <ChevronDown
                size={24}
                className={`chevron-icon ${isExpanded ? "expanded" : ""}`}
              />
            </button>
          </div>
        </div>

        <div className="staff-overview-image-wrapper">
          <img
            src={systemImg}
            alt="Staff Travel System Overview"
            className="staff-overview-image"
          />
        </div>
      </div>
    </section>
  );
}
