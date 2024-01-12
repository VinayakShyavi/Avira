import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export const Blogs = () => {
  return (
    <>
      <Header />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Find By Categories </h3>
                <div>
                  <ul>
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="blog-card">
                <div className="card-img d-flex justify-content-center ">
                  <img src="images/blog-1.jpg" alt="" className="img-fluid" />
                </div>
                <div className="blog-content ">
                  <p className="date">14 FEB, 2023</p>
                  <h5 className="title">
                    Amazon Valentine’s Day Edition Jackpot Quiz answers today:
                    win Rs 30,000 and more
                  </h5>
                  <p className="descp">
                    Amazon Valentine’s Day Edition Jackpot Quiz is a new contest
                    by Amazon India and it arrived under the Fuzone section of
                    the Amazon shopping app. With this quiz, Amazon users can
                    test their knowledge on Valentine’s day in attempt to win Rs
                    30,000. However, since this is a “spin and win” style quiz.
                  </p>
                  <Link to="/" className="button">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="blog-card">
                <div className="card-img d-flex justify-content-center ">
                  <img
                    src="images/blog2.jpg"
                    alt="phone"
                    className="img-fluid"
                  />
                </div>
                <div className="blog-content ">
                  <p className="date">19 NOV, 2022</p>
                  <h5 className="title">
                    Amazon OnePlus 11R 5G Quiz answers: win OnePlus 11R 5G
                  </h5>
                  <p className="descp">
                    The Amazon OnePlus 11R 5G Quiz is the first new quiz of the
                    day and it arrived under the Funzone section of the app.
                    With this quiz, Amazon is promoting the new OnePlus 11R 5G
                    smartphone to the Indian markets. The quiz follows the
                    standard five questions format and offers 1 winner a chance
                    to walk with a brand new OnePlus smartphone.
                  </p>
                  <Link to="/" className="button">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="blog-card">
                <div className="card-img d-flex justify-content-center ">
                  <img
                    src="images/blog3.jpg"
                    alt="phone"
                    className="img-fluid"
                  />
                </div>
                <div className="blog-content ">
                  <p className="date">25 NOV, 2022</p>
                  <h5 className="title">
                    Amazon’s Cyber Monday sale starts November 26: Here’s
                    everything you need to know to plan your shopping
                  </h5>
                  <p className="descp">
                    Amazon’s Cyber Monday weekend event starts Saturday,
                    November 26, and runs through Monday, November 28. The sale
                    features deals across categories from popular brands like
                    Anastasia Beverly Hills, Segway, Mr. Coffee, and Bose.Get
                    more with the Amazon Store Card
                  </p>
                  <Link to="/" className="button">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="blog-card">
                <div className="card-img d-flex justify-content-center ">
                  <img
                    src="images/blog4.jpg"
                    alt="phone"
                    className="img-fluid"
                  />
                </div>
                <div className="blog-content ">
                  <p className="date">12 DEC, 2023</p>
                  <h5 className="title">
                    practical tips to help you stay safe and avoid scams when
                    shopping at Amazon
                  </h5>
                  <p className="descp">
                    We want to help consumers avoid impersonation scams this
                    holiday season. These happen when a scammer pretends to be a
                    trusted company and reaches out to try to get access to
                    sensitive information like social security numbers, bank
                    information, or Amazon account details
                  </p>
                  <Link to="/" className="button">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
