import React from "react";
import { Link } from "react-router-dom";
import style from "../../Styles/Navbar.module.css";

export default function Navbar({ isLogin, setIsLogin }) {
  const handleSignOut = () => {
    localStorage.removeItem("username");
    setIsLogin(false);
  };

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top top-0 w-100"
      style={{
        background:
          "linear-gradient(95deg, rgba(10,13,17,1) 0%, rgba(42,57,74,1) 63%)",
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          <img
            src="https://img.icons8.com/?size=512&id=81934&format=png"
            alt=""
            height="40px"
            width="40px"
          />
        </Link>
        <span className="text-light">
          <span
            style={{
              fontWeight: "bold",
              letterSpacing: "2px",
              fontSize: "22px",
              paddingLeft: "3px",
            }}
          >
            IKEA
          </span>
          <br />
          <span
            style={{ color: "orange", letterSpacing: "2px", fontSize: "14px" }}
          >
            Furniture
          </span>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto gap-5 me-5">
            <li className="nav-item">
              <Link
                className={`${style.link} text-decoration-none`}
                aria-current="page"
                to="/Home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`${style.link} text-decoration-none`} to="/shop">
                Furniture
              </Link>
            </li>

            {/* !!!!!!!very importaaaaaaaaaaaaaaaaaaaaaaaaaty focus (admin access) */}
            {localStorage.getItem("username") === "rewaa" ? (
              <li className="nav-item">
                <Link
                  to="/addProduct"
                  className={`${style.link} text-decoration-none`}
                >
                  Add Furniture
                </Link>
              </li>
            ) : (
              ""
            )}






            {!isLogin ? (
              <>
                <li className="nav-item">
                  <Link
                    to="/Login"
                    className={`${style.link} text-decoration-none`}
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Signin"
                    className={`${style.link} text-decoration-none`}
                  >
                    Signup
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link
                  onClick={handleSignOut}
                  className={`${style.link} text-decoration-none`}
                >
                  Sign Out
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link
                to="/contactus"
                className={`${style.link} text-decoration-none`}
              >
                Contact Us
              </Link>
            </li>
            {localStorage.getItem("username") ? (
              <li className="nav-item">
                <Link
                  to="/cart"
                  className={`${style.link} text-decoration-none`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-cart3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
