import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import Logo from "../assets/Navbar/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const location = useLocation();

  const isProductActive = location.pathname.startsWith("/product");

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen && window.innerWidth <= 1200) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (window.innerWidth > 1200) {
          setIsProductOpen(false);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown and mobile menu on route change
  useEffect(() => {
    if (window.innerWidth > 1200) {
      setIsProductOpen(false);
    }
    setIsOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = () => {
    if (window.innerWidth > 1200) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsProductOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 1200) {
      timeoutRef.current = setTimeout(() => {
        setIsProductOpen(false);
      }, 150);
    }
  };

  const toggleProductDropdown = (e) => {
    e.stopPropagation();
    setIsProductOpen((prev) => !prev);
  };

  return (
    <header className={`navbar ${isOpen ? "is-menu-open" : ""}`}>
      <div className="navbar-inner">
        <NavLink className="brand" to="/" onClick={() => setIsOpen(false)}>
          <img src={Logo} alt="logo" />
        </NavLink>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? (
            <X size={24} color="#1B1B1B" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 8H20M4 16H20"
                stroke="#1B1B1B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>

        <nav
          className={isOpen ? "nav-links is-open" : "nav-links"}
          aria-label="Main navigation"
        >
          <div className="mobile-nav-top">
            <NavLink className="brand" to="/" onClick={() => setIsOpen(false)}>
              <img src={Logo} alt="logo" />
            </NavLink>
            <button
              className="mobile-menu-close"
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation"
            >
              <X size={24} color="#1B1B1B" />
            </button>
          </div>

          <div className="mobile-nav-content">
            <div className="mobile-nav-list">
              {/* Tab 1: Home */}
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>

              {/* Tab 2: Products Dropdown */}
              <div
                className={`nav-dropdown-wrapper ${isProductOpen ? "is-open" : ""}`}
                ref={dropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={`nav-link nav-dropdown-trigger ${isProductActive || isProductOpen ? "active" : ""}`}
                  onClick={toggleProductDropdown}
                  aria-expanded={isProductOpen}
                  aria-haspopup="true"
                >
                  <span>Products</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={`dropdown-chevron ${isProductOpen ? "rotated" : ""}`}
                  >
                    <mask
                      id="mask0_3293_78"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="16"
                      height="16"
                    >
                      <rect
                        y="16"
                        width="16"
                        height="16"
                        transform="rotate(-90 0 16)"
                        fill="#D9D9D9"
                      />
                    </mask>
                    <g mask="url(#mask0_3293_78)">
                      <path
                        d="M14.4356 5.33333L7.9998 11.7692L1.56396 5.33333L2.51013 4.38717L7.9998 9.877L13.4895 4.38717L14.4356 5.33333Z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                </button>

                {isProductOpen && (
                  <div className="dropdown-menu">
                    <NavLink
                      to="/product/staff-travel"
                      className={({ isActive }) =>
                        isActive ? "dropdown-item active" : "dropdown-item"
                      }
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      <span className="dropdown-item-title">
                        Aviation Staff Travel Solution
                      </span>
                    </NavLink>

                    <NavLink
                      to="/product/crew-360"
                      className={({ isActive }) =>
                        isActive ? "dropdown-item active" : "dropdown-item"
                      }
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      <span className="dropdown-item-title">
                        Crew 360.pm.AI
                      </span>
                    </NavLink>
                  </div>
                )}
              </div>
            </div>

            <div className="mobile-nav-footer">
              <NavLink
                className="mobile-contact-btn"
                to="/contact"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
              <p className="mobile-copyright">©2026All rights reserved</p>
            </div>
          </div>
        </nav>

        <div className="navbar-actions">
          <NavLink className="nav-button filled" to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
}
