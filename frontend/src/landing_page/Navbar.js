import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom p-2 fs-5"
      style={{ backgroundColor: "#fff" }}
    >
      <div class="container-fluid">
        <Link class="navbar-brand" to={"/"}>
          <img
            src="media/images/logo.png"
            alt="logo"
            style={{ width: "35%" }}
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item p-2">
              <Link className="nav-link active" to={"/signup"}>SignUp</Link>
            </li>
            <li className="nav-item p-2">
              <Link className="nav-link" to={"/about"}>About</Link>
            </li>
            <li className="nav-item p-2">
              <Link className="nav-link" to={"/product"}>Product</Link>
            </li>
            <li className="nav-item p-2">
              <Link className="nav-link" to={"/pricing"}>Pricing</Link>
            </li>
            <li className="nav-item p-2">
              <Link className="nav-link" to={"/support"}>Support</Link>
            </li>
          </ul>
        </div>

        
      </div>
    </nav>
  );
}

export default NavBar;