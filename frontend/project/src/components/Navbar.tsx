import React from "react";
import { Link, useLocation } from "react-router-dom";
function Navbar() {
  const location = useLocation();
  return (
    <div className="bg-light border-0">
      <header className="bg-white border-bottom w-100">
        <nav className="navbar navbar-light py-3">
          <div className="container-fluid px-5">
            <Link to="/" className="navbar-brand fw-semibold">
              Devly
            </Link>
            <Link
              to="/home"
              className={`text-decoration-none ${
                location.pathname === "/" ? "fw-bold text-black" : "text-dark"
              }`}
            >
              Browsing
            </Link>
            <Link
              to="/saved"
              className={`text-decoration-none ${
                location.pathname === "/saved"
                  ? "fw-bold text-black"
                  : "text-dark"
              }`}
            >
              Saved
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
