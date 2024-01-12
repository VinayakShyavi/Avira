import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin,BsGithub,BsYoutube,BsInstagram } from "react-icons/bs";

export const Footer= () =>  {
  return (
    <>
      <footer className="footer-strip-1 py-4">
        <div className="container-fluid">
          <div className="row align-items-center" id="footer-top-data" >
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30" id="footer-top-data-text">
                <img src="images/newsletter.png" alt="newsletter" />
                <h3 className="mb-0 text-white">Sign Up for News Letter</h3>
              </div>
            </div>
            <div className="col-5" id="footer-top-data-search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="footer-strip-2 py-4">
        <div className="container-fluid" id="footer-strip-2-div">
          <div className="row text-white">
            <div className="col-4">
              <h4>Contact Us</h4>
              <div>
                <address className="fs-6">H.No :277 Near vill chopal, <br /> Sonopath,Karnataka <br />
                pincode:5780026</address>
                <Link to="tel:+91 325682422" className="mt-4 d-block mb-3 text-white">+91 325682422</Link>
                <Link to="tel:+91 325682422" className="mt-4 d-block mb-3 text-white">aviradesk@avira.com</Link>
                <div className="social-icons d-flex align-items-center gap-30">
                  <Link alt="social-icons" className="text-white fs-5"><BsGithub/> </Link>
                  <Link alt="social-icons" className="text-white fs-5"><BsLinkedin/> </Link>
                  <Link alt="social-icons" className="text-white fs-5"><BsYoutube/> </Link>
                  <Link alt="social-icons" className="text-white fs-5"><BsInstagram/> </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4>Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Reafund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4>Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">FAQ</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4>Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="footer-strip-3 py-4">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Developer's Corner
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

