import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

export const Header = () => {
  return (
    <>
      {/* header-1 */}
      <header className="header-top-strip">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-6 ">
              <p className="text-center text-white m-1">
                Free Shiiping Over $100 & Free return
              </p>
            </div>
            <div className="col-6">
              <p className="text-center text-white m-1">
                Hotline:{" "}
                <a className="text-white" href="tel:+91-5468224911">
                  +91-5468224911
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* header-2 */}
      <header className="header-upper py-3">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">Avira.</Link>{" "}
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5 ">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    className="d-flex align-items-center gap-10 text-white"
                    to="/compareproducts"
                  >
                    <img src="./images/compare.svg" alt="compare" />
                    <p className="mb-0">
                      Compare <br />
                      Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    className="d-flex align-items-center gap-10 text-white"
                    to="/wishList"
                  >
                    <img src="images/wishlist.svg" alt="wishlist" />
                    <p className="mb-0">
                      Favourite <br />
                      WishList
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    className="d-flex align-items-center gap-10 text-white"
                    to="/login"
                  >
                    <img src="./images/user.svg" alt="user" />
                    <p className="mb-0">
                      Login <br />
                      My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="./images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column ">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$100</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* header-3 */}
      <header className="header-bottom py-3">
        <div className="container-fluid">
          <div className="col-12">
            <div className="menu-button d-flex align-items-center">
              <div>
                <div className="dropdown">
                  <Link
                    className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="/images/menu.svg" alt="menu" />
                    <span className="me-5 ">Shopping Categories</span>
                  </Link>

                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item " to="#">
                        Fashion
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item " to="#">
                        Electronics
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Home & Furniture
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Appliances
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Beauty & Cosmatics
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Footware
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Travel
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="menu-links">
                <div className="d-flex align-items-center gap-15 ">
                  <NavLink className="text-white" to="/">
                    Home
                  </NavLink>
                  <NavLink className="text-white" to="/store">
                    Our Store
                  </NavLink>
                  <NavLink className="text-white" to="/blogs">
                    Blogs
                  </NavLink>
                  <NavLink className="text-white" to="/contact">
                    Contact
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
