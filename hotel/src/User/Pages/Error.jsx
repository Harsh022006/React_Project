import React from 'react'
import Header from '../Common/Header'
import Navbar from '../Common/Navbar'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
      <Header />
      <Navbar title="404 Page" name="404 page" />

       {/* 404 Start */}
            <div className="container-fluid bg-light py-5" >
                <div className="container py-5 text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <i className="bi bi-exclamation-triangle display-1 text-primary" />
                            <h1 className="display-1">404</h1>
                            <h1 className="mb-4">Page Not Found</h1>
                            <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                            <Link className="btn btn-primary rounded-pill py-3 px-5" to="/" >Go Back To Home</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* 404 End */}

      {/* Footer Start */}
      <div className="container-fluid bg-dark text-light footer wow fadeIn mt-1" data-wow-delay="0.1s">
        <div className="container pb-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-4">
              <div className="bg-primary rounded p-4">
                <a href="index.html"><h1 className="text-white text-uppercase mb-3">Hotelier</h1></a>
                <p className="text-white mb-0">
                  Download <a className="text-dark fw-medium" href="https://htmlcodex.com/hotel-html-template-pro">Hotelier – Premium Version</a>, build a professional website for your hotel business and grab the attention of new visitors upon your site’s launch.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h6 className="section-title text-start text-primary text-uppercase mb-4">Contact</h6>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />123 Street, New York, USA</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3" />+012 345 67890</p>
              <p className="mb-2"><i className="fa fa-envelope me-3" />info@example.com</p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-outline-light btn-social" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-outline-light btn-social" href><i className="fab fa-youtube" /></a>
                <a className="btn btn-outline-light btn-social" href><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="row gy-5 g-4">
                <div className="col-md-6">
                  <h6 className="section-title text-start text-primary text-uppercase mb-4">Company</h6>
                  <a className="btn btn-link" href>About Us</a>
                  <a className="btn btn-link" href>Contact Us</a>
                  <a className="btn btn-link" href>Privacy Policy</a>
                  <a className="btn btn-link" href>Terms &amp; Condition</a>
                  <a className="btn btn-link" href>Support</a>
                </div>
                <div className="col-md-6">
                  <h6 className="section-title text-start text-primary text-uppercase mb-4">Services</h6>
                  <a className="btn btn-link" href>Food &amp; Restaurant</a>
                  <a className="btn btn-link" href>Spa &amp; Fitness</a>
                  <a className="btn btn-link" href>Sports &amp; Gaming</a>
                  <a className="btn btn-link" href>Event &amp; Party</a>
                  <a className="btn btn-link" href>GYM &amp; Yoga</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                © <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.
                {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href>Home</a>
                  <a href>Cookies</a>
                  <a href>Help</a>
                  <a href>FQAs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

    </div>
  )
}

export default Error
