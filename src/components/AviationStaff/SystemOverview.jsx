import { ChevronDown } from 'lucide-react';
import systemImg from '../../assets/AviationStaff/System/image.png';

export default function SystemOverview() {
  return (
    <section className="product-system-section staff-overview-section">
      <div className="product-system-inner">
        <div className="product-system-copy">
          <p className="product-section-kicker">PRODUCT OVERVIEW</p>
          <h2>
            <span>Introducing</span>
            <span>My Staff Travel</span>
          </h2>
          <p>
            MyStaffTravel is a modern airline employee travel platform designed to
            simplify and digitize the entire staff travel experience. Built
            specifically for the aviation industry, the solution enables airline
            employees, retirees, and eligible beneficiaries to seamlessly search, book,
            manage, and track their staff travel privileges through an intuitive
            self-service portal. With a flexible and configurable architecture,
            myStaffTravel adapts to your organization's unique staff travel
            policies, approval workflows, eligibility rules, and operational
            requirements, ensuring a solution that fits your business rather than
            forcing your business to fit the software.
          </p>

          <button type="button" className="read-more-btn">
            <span>Read More</span>
            <ChevronDown size={16} />
          </button>
        </div>

        <div className="staff-overview-image-wrapper">
          <img
            src={systemImg}
            alt="My Staff Travel System Overview"
            className="staff-overview-image"
          />
        </div>
      </div>
    </section>
  );
}
