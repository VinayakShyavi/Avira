import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { TbArrowsShuffle } from "react-icons/tb";
import { AiOutlineEye } from "react-icons/ai";
import { BiCart } from "react-icons/bi";
import { TbHeart } from "react-icons/tb";
import ReactStars from "react-rating-stars-component";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <>
      <Header />
      <section className="home-wrapper-1 py-5">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-6 ">
              <div className="main-banner position-relative p-3">
                <img
                  src="images/main-banner.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute p-3">
                  <h6>SUPERCHARGED FOR PROS.</h6>
                  <h2>iPad S13+ Pro</h2>
                  <p>
                    From $999 or $41.62/mo. <br /> for 24 mo. Footnote*
                  </p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div
                className="d-flex flex-wrap justify-content-start align-items-center"
                id="whole-small-banner"
              >
                <div className="small-banner position-relative p-2">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute p-3">
                    <h6>best sale</h6>
                    <h2>Laptops Max</h2>
                    <p>
                      From $1699.00 or <br /> $64.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-2">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute p-3">
                    <h6>new arrival</h6>
                    <h2>But IPad Air</h2>
                    <p>
                      From $599 or <br /> $49.91/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-2">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute p-3">
                    <h6>15% Off</h6>
                    <h2>Smart Watch 7</h2>
                    <p>
                      shop the latest Brand <br />
                      Style and Colour
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative p-2">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute p-3">
                    <h6>free engraving</h6>
                    <h2>AirPods Max</h2>
                    <p>
                      High-fedility playback & <br /> ultra-low distortion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-fluid" id="home-wrapper-2-data">
          <div className="row">
            <div className="col-12">
              <div className="service d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img
                    src="images/service.png"
                    alt="free-shipping"
                    className="img-fluid"
                  />
                  <div>
                    <h6>Free Shipping</h6>
                    <p>From all order above $100</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img
                    src="images/service-02.png"
                    alt="offers"
                    className="img-fluid"
                  />
                  <div>
                    <h6>Daily Suprice Offer</h6>
                    <p>Save up to 25%</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img
                    src="images/service-03.png"
                    alt="support"
                    className="img-fluid"
                  />
                  <div>
                    <h6>Support 24/7</h6>
                    <p>Shop with an Expert </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img
                    src="images/service-04.png"
                    alt="price"
                    className="img-fluid"
                  />
                  <div>
                    <h6>Affordable Price</h6>
                    <p>Get Factory direct price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img
                    src="images/service-05.png"
                    alt="payments"
                    className="img-fluid"
                  />
                  <div>
                    <h6>Secure payments</h6>
                    <p>100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-3 py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-cntent-between align-items-center ">
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Camera</h6>
                    <p>25 Items</p>
                  </div>
                  <img
                    src="images/camera.jpg"
                    alt="camera"
                    className="img-fluid"
                  />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="tv" className="img-fluid" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Head-Phones</h6>
                    <p>30 Items</p>
                  </div>
                  <img
                    src="images/headphone.jpg"
                    alt="head-phones"
                    className="img-fluid"
                  />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Portable Speakers</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src="images/speaker.jpg"
                    alt="speaker"
                    className="img-fluid"
                  />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Wireless Items</h6>
                    <p>13 Items</p>
                  </div>
                  <img
                    src="images/acc.jpg"
                    alt="wireless_items"
                    className="img-fluid"
                  />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src="images/headphone.jpg"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>New Laptops</h6>
                    <p>14 Items</p>
                  </div>
                  <img
                    src="images/laptop.jpg"
                    alt="laptops"
                    className="img-fluid"
                  />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Home Appliances</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src="images/homeapp.jpg"
                    alt="home_appliances"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marque-wrapper py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div>
                    <img
                      src="images/brand-01.png"
                      alt="brand"
                      className="img-fluid mx-4"
                    />
                  </div>
                  <div>
                    <img
                      src="images/brand-02.png"
                      alt="brand"
                      className="img-fluid mx-4"
                    />
                  </div>
                  <div>
                    <img
                      src="images/brand-03.png"
                      alt="brand"
                      className="img-fluid mx-4"
                    />
                  </div>
                  <div>
                    <img
                      src="images/brand-04.png"
                      alt="brand"
                      className="img-fluid mx-4"
                    />
                  </div>
                  <div>
                    <img
                      src="images/brand-05.png"
                      alt="brand"
                      className="img-fluid mx-4"
                    />
                  </div>
                  <div>
                    <img
                      src="images/brand-06.png"
                      alt="brand"
                      className="img-fluid mx-4"
                    />
                  </div>
                  <div>
                    <img
                      src="images/brand-07.png"
                      alt="brand"
                      className="img-fluid mx-4"
                    />
                  </div>
                  <div>
                    <img
                      src="images/brand-08.png"
                      alt="brand"
                      className="img-fluid mx-4"
                    />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-wrapper py-5">
        <div className="container-fluid" id="product-wrapper-container">
          <div className="product-wrapper-title">
            <h3>Featured Collection</h3>
          </div>
          <div className="row" id="product-wrapper-card">
            <div className="col-2">
              <div className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                  <Link>
                    <TbHeart />
                  </Link>
                </div>
                <div className="card-image">
                  <img
                    src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSomHlnjnZuCeAeeJ6JDH8wI9labfKMDeS5p6Uq99knN1TjzeWNn-1dx_2mTbH1JpbkioLuBCI4lRrebNZF8ZA8h5fOosXMpbCDk9AUvRPJ1B65lVrB8BNS&usqp=CAE"
                    className="img-fluid"
                    alt="blog"
                  ></img>
                </div>
                <div className="product-details">
                  <h6 className="brand">Boat</h6>
                  <p className="desc">
                    boAt Stone 1010 14W Portable Bluetooth Speaker (IPX5 Water
                    Resistant, Monstrous Sound, Black)
                  </p>
                  <ReactStars
                    count={5}
                    value="3"
                    size={24}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="price">$100.00</p>
                </div>
                <div className="action-bar position-absolute">
                  <div className="d-flex flex-column gap-1">
                    <Link>
                      <TbArrowsShuffle />
                    </Link>

                    <Link>
                      <AiOutlineEye />
                    </Link>

                    <Link>
                      <BiCart />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-2">
              <div className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                  <Link>
                    <TbHeart />
                  </Link>
                </div>
                <div className="card-image">
                  <img
                    src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSGvvjezC8bn0U1wzzZjwBcatf1qhkIqa0Hd2xc1D8DrcJgTF_7sVieruMU5siPBKuxCzAMnBXDS8xnj8Y5708p9UNplzN5RZEOFbDbXN7CS34xG86T973h&usqp=CAE"
                    className="img-fluid"
                    alt="blog"
                  ></img>
                </div>
                <div className="product-details">
                  <h6 className="brand">Lenovo</h6>
                  <p className="desc">
                    Lenovo Yoga Smart 10.1-Inch Wi-Fi + 4G LTE Tablet With
                    Google Assistant (Iron Grey, 64GB, 4GB RAM)
                  </p>
                  <ReactStars
                    count={5}
                    size={24}
                    value="3"
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="price">$250.00</p>
                </div>
                <div className="action-bar position-absolute">
                  <div className="d-flex flex-column gap-1">
                    <Link>
                      <TbArrowsShuffle />
                    </Link>

                    <Link>
                      <AiOutlineEye />
                    </Link>

                    <Link>
                      <BiCart />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-2">
              <div className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                  <Link>
                    <TbHeart />
                  </Link>
                </div>
                <div className="card-image">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTuMtT1GnFll54UJErza8e2gsDrFQKqjET6paICxpVpOOiZQlebdikhfT1i0eoundQCw5Vo070atzK7f4b0zUuXU2yEo5QqtLH4IovIjG6ImRJSjrWIKHUp&usqp=CAE"
                    className="img-fluid"
                    alt="blog"
                  ></img>
                </div>
                <div className="product-details">
                  <h6 className="brand">Apple</h6>
                  <p className="desc">
                    Apple Watch SE with Sports Band (44mm Retina LTPO OLED
                    Display, Midnight Aluminium Case)
                  </p>
                  <ReactStars
                    count={5}
                    size={24}
                    value="3"
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="price">$500.00</p>
                </div>
                <div className="action-bar position-absolute">
                  <div className="d-flex flex-column gap-1">
                    <Link>
                      <TbArrowsShuffle />
                    </Link>

                    <Link>
                      <AiOutlineEye />
                    </Link>

                    <Link>
                      <BiCart />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-2">
              <div className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                  <Link>
                    <TbHeart />
                  </Link>
                </div>
                <div className="card-image">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSwNNw2bhQJoF7FsvJIwDADxD-LB49U9e-KsS_uvH-5rbymyfgx9Oe8sWPgQ3KYa29EJZrF0e3pbyJKvhfdMZMYblwmuO-thgTZ-aSo2efUHa-SvSHJEf2DEQ&usqp=CAE"
                    className="img-fluid"
                    alt="blog"
                  ></img>
                </div>
                <div className="product-details">
                  <h6 className="brand">Sony</h6>
                  <p className="desc">
                    SONY HT-S20R 400W Bluetooth Soundbar with Remote and also
                    Bluetooth (Dolby Digital, 5.1 Channel, Black)
                  </p>
                  <ReactStars
                    count={5}
                    size={24}
                    value="3"
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="price">$130.00</p>
                </div>
                <div className="action-bar position-absolute">
                  <div className="d-flex flex-column gap-1 ">
                    <Link>
                      <TbArrowsShuffle />
                    </Link>

                    <Link>
                      <AiOutlineEye />
                    </Link>

                    <Link>
                      <BiCart />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-2">
              <div className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                  <Link>
                    <TbHeart />
                  </Link>
                </div>
                <div className="card-image">
                  <img
                    src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR6VJL3p7V3Ufi6RXxGQAKv-p3BtEH798BotFJRedckMzFnFincpQQ314F-y77WErKVm4DxTBdortor-4NZCTu30MGhMiOLchvGKjiCZqz2CFLUpwLvJtXe&usqp=CAE"
                    className="img-fluid"
                    alt="blog"
                  ></img>
                </div>
                <div className="product-details">
                  <h6 className="brand">JBL</h6>
                  <p className="desc">
                    JBL Tune 710 JBLT710BTBLK Bluetooth Headset with Mic (50
                    Hours Playback, On Ear, Black)
                  </p>
                  <ReactStars
                    count={5}
                    size={24}
                    value="3"
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="price">$85.00</p>
                </div>
                <div className="action-bar position-absolute">
                  <div className="d-flex flex-column gap-1">
                    <Link>
                      <TbArrowsShuffle />
                    </Link>

                    <Link>
                      <AiOutlineEye />
                    </Link>

                    <Link>
                      <BiCart />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-2">
              <div className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                  <Link>
                    <TbHeart />
                  </Link>
                </div>
                <div className="card-image">
                  <img
                    src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTWufo2nNlwDQ3elbjOjdtFwHTwg2HMaYL9tSYMafJhP84qEeFcEFVrnbfii8Pqlwy5sb5RvA4PumQvBZ7XyXH112zDlVU8RvIcZXeD0-COZWz6RPZuGQFkrw&usqp=CAE"
                    className="img-fluid"
                    alt="blog"
                  ></img>
                </div>
                <div className="product-details">
                  <h6 className="brand">Canon</h6>
                  <p className="desc">
                    Canon EOS 3000D 18MP Digital SLR Camera (Black) With 18-55mm
                    Is II Lens, 16GB Card with Night mode AI
                  </p>
                  <ReactStars
                    count={5}
                    size={24}
                    value="3"
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="price">$250.00</p>
                </div>
                <div className="action-bar position-absolute">
                  <div className="d-flex flex-column gap-1">
                    <Link>
                      <TbArrowsShuffle />
                    </Link>

                    <Link>
                      <AiOutlineEye />
                    </Link>

                    <Link>
                      <BiCart />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div>
              <div className="product-wrapper-title col-12">
                <h3>Special Products</h3>
              </div>
            </div>

            <div className="row" id="product-wrapper-card">
              <div className="col-4">
                <div className="special-product-card">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img
                        src="https://m.media-amazon.com/images/I/71G1FCIP1EL._SX679_.jpg"
                        height={250}
                        width={200}
                        alt="product"
                      ></img>
                    </div>

                    <div className="special-product-content">
                      <h5 className="brands">Samsung</h5>
                      <h6 className="title">
                        Samsung Galaxy Note 10+ (Aura Glow, 12GB RAM, 256GB
                        Storage)
                      </h6>
                      <ReactStars
                        count={5}
                        value="3"
                        size={24}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="price">
                        <span className="red-p" style={{ color: "red" }}>
                          <big>$150</big>
                        </span>
                        &nbsp;
                        <strike>
                          <small>$175</small>
                        </strike>
                      </p>
                      <div className="discount-till d-flex align-items-center gap-3">
                        <p className="mb-0">
                          <b>58 days</b>
                        </p>
                        <div className="d-flex gap-1 align-items-center">
                          <span className="badge rounded-circle p-1 bg-danger">
                            05
                          </span>
                          <b>:</b>
                          <span className="badge rounded-circle p-1 bg-danger">
                            10
                          </span>
                          <b>:</b>
                          <span className="badge rounded-circle p-1 bg-danger">
                            26
                          </span>
                        </div>
                      </div>
                      <div className="poduct-count my-3">
                        <p>Products : 526</p>
                        <div className="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: "55%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>

                      <Link className="button">Add to Cart</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="special-product-card">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img
                        src="https://m.media-amazon.com/images/I/8193DNNjZFS._AC_UY327_FMwebp_QL65_.jpg"
                        height={250}
                        width={200}
                        alt="product"
                      ></img>
                    </div>

                    <div className="special-product-content">
                      <h5 className="brands">JBL</h5>
                      <h6 className="title">
                        Wireless Portable Bluetooth Speaker with Mic, Vibrant
                        Color Options
                      </h6>
                      <ReactStars
                        count={5}
                        value="3"
                        size={24}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="price">
                        <span className="red-p" style={{ color: "red" }}>
                          <big>$58</big>
                        </span>
                        &nbsp;
                        <strike>
                          <small>$65</small>
                        </strike>
                      </p>
                      <div className="discount-till d-flex align-items-center gap-3">
                        <p className="mb-0">
                          <b>178 days</b>
                        </p>
                        <div className="d-flex gap-1 align-items-center">
                          <span className="badge rounded-circle p-1 bg-danger">
                            12
                          </span>
                          <b>:</b>
                          <span className="badge rounded-circle p-1 bg-danger">
                            20
                          </span>
                          <b>:</b>
                          <span className="badge rounded-circle p-1 bg-danger">
                            37
                          </span>
                        </div>
                      </div>
                      <div className="poduct-count my-3">
                        <p>Products : 800</p>
                        <div className="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: "80%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>

                      <Link className="button">Add to Cart</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="special-product-card">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img
                        src="https://m.media-amazon.com/images/I/61q6x-ll5FL._AC_UY327_FMwebp_QL65_.jpg"
                        height={200}
                        width={200}
                        alt="product"
                      ></img>
                    </div>

                    <div className="special-product-content">
                      <h5 className="brands">Lenovo</h5>
                      <h6 className="title">
                        Lenovo IdeaPad Slim 3 Intel Core i5 11th Gen 15.6"
                        (39.62cm)
                      </h6>
                      <ReactStars
                        count={5}
                        value="3"
                        size={24}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="price">
                        <span className="red-p" style={{ color: "red" }}>
                          <big>$225</big>
                        </span>
                        &nbsp;
                        <strike>
                          <small>$250</small>
                        </strike>
                      </p>
                      <div className="discount-till d-flex align-items-center gap-3">
                        <p className="mb-0">
                          <b>25 days</b>
                        </p>
                        <div className="d-flex gap-1 align-items-center">
                          <span className="badge rounded-circle p-1 bg-danger">
                            09
                          </span>
                          <b>:</b>
                          <span className="badge rounded-circle p-1 bg-danger">
                            25
                          </span>
                          <b>:</b>
                          <span className="badge rounded-circle p-1 bg-danger">
                            01
                          </span>
                        </div>
                      </div>
                      <div className="poduct-count my-3">
                        <p>Products : 50</p>
                        <div className="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: "20%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>

                      <Link className="button">Add to Cart</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row py-4" id="product-wrapper-card">
              <div className="col-4">
                <div className="special-product-card">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img
                        src="https://m.media-amazon.com/images/I/41+o3c8Qo+L._SX522_.jpg"
                        height={250}
                        width={200}
                        alt="product"
                      ></img>
                    </div>

                    <div className="special-product-content">
                      <h5 className="brands">OnePlus</h5>
                      <h6 className="title">
                        OnePlus Nord Buds CE Bluetooth Truly Wireless in Ear
                        Earbuds
                      </h6>
                      <ReactStars
                        count={5}
                        value="3"
                        size={24}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="price">
                        <span className="red-p" style={{ color: "red" }}>
                          <big>$65</big>
                        </span>
                        &nbsp;
                        <strike>
                          <small>$72</small>
                        </strike>
                      </p>
                      <div className="discount-till d-flex align-items-center gap-3">
                        <p className="mb-0">
                          <b>95 days</b>
                        </p>
                        <div className="d-flex gap-1 align-items-center">
                          <span className="badge rounded-circle p-1 bg-danger">
                            04
                          </span>
                          <b>:</b>
                          <span className="badge rounded-circle p-1 bg-danger">
                            03
                          </span>
                          <b>:</b>
                          <span className="badge rounded-circle p-1 bg-danger">
                            10
                          </span>
                        </div>
                      </div>
                      <div className="poduct-count my-3">
                        <p>Products : 324</p>
                        <div className="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: "50%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>

                      <Link className="button">Add to Cart</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="special-product-card">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img
                        src="https://m.media-amazon.com/images/I/61wmlBJGRKL._AC_UY327_FMwebp_QL65_.jpg"
                        height={250}
                        width={200}
                        alt="product"
                      ></img>
                    </div>

                    <div className="special-product-content">
                      <h5 className="brands">Canon</h5>
                      <h6 className="title">
                        Canon EF50MM F/1.8 STM Lens for Canon DSLR Cameras
                      </h6>
                      <ReactStars
                        count={5}
                        value="3"
                        size={24}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="price">
                        <span className="red-p" style={{ color: "red" }}>
                          <big>$95</big>
                        </span>
                        &nbsp;
                        <strike>
                          <small>$110</small>
                        </strike>
                      </p>
                      <div className="discount-till d-flex align-items-center gap-3">
                        <p className="mb-0">
                          <b>47 days</b>
                        </p>
                        <div className="d-flex gap-1 align-items-center">
                          <span className="badge rounded-circle p-1 bg-danger">
                            11
                          </span>
                          <b>:</b>
                          <span className="badge rounded-circle p-1 bg-danger">
                            09
                          </span>
                          <b>:</b>
                          <span className="badge rounded-circle p-1 bg-danger">
                            08
                          </span>
                        </div>
                      </div>
                      <div className="poduct-count my-3">
                        <p>Products : 158</p>
                        <div className="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: "65%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>

                      <Link className="button">Add to Cart</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="special-product-card">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img
                        src="https://m.media-amazon.com/images/I/7122bjHMoFL._AC_UL480_FMwebp_QL65_.jpg"
                        height={250}
                        width={200}
                        alt="product"
                      ></img>
                    </div>

                    <div className="special-product-content">
                      <h5 className="brands">Apple</h5>
                      <h6 className="title">
                        Apple Watch SE (2nd Gen) GPS 40mm Silver Aluminium Case
                      </h6>
                      <ReactStars
                        count={5}
                        value="3"
                        size={24}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="price">
                        <span className="red-p" style={{ color: "red" }}>
                          <big>$500</big>
                        </span>
                        &nbsp;
                        <strike>
                          <small>$515</small>
                        </strike>
                      </p>
                      <div className="discount-till d-flex align-items-center gap-3">
                        <p className="mb-0">
                          <b>68 days</b>
                        </p>
                        <div className="d-flex gap-1 align-items-center">
                          <span className="badge rounded-circle p-1 bg-danger">
                            10
                          </span>
                          <b>:</b>
                          <span className="badge rounded-circle p-1 bg-danger">
                            29
                          </span>
                          <b>:</b>
                          <span className="badge rounded-circle p-1 bg-danger">
                            35
                          </span>
                        </div>
                      </div>
                      <div className="poduct-count my-3">
                        <p>Products : 225</p>
                        <div className="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: "30%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>

                      <Link className="button">Add to Cart</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="popular-wrapper py-5 ">
        <div className="container-fluid" id="popular-wrapper-container">
          <div className="popular-wrapper-title">
            <h3>Our Popular Products</h3>
          </div>
          <div className="row justify-content-center" id="popular-wrapper-card">
            <div className="famous-card position-relative col-3 row">
              <div id="famous-card-items">
                <div>
                  <img
                    src="images/watch1.webp"
                    className="img-fluid"
                    alt="item"
                  ></img>
                </div>

                <div className="famous-content">
                  <h6 className="text-dark">BIG SCREEN</h6>
                  <h4 className="text-dark">Smart Watch Series 7</h4>
                  <p className="text-dark">
                    {" "}
                    From $399 or $16.62/mo for 24 months
                  </p>
                </div>
              </div>
            </div>

            <div className="famous-card position-relative col-3 row">
              <div id="famous-card-items">
              <div>
                <img
                  src="images/famous-2.jpg"
                  className="img-fluid"
                  alt="item"
                ></img>
              </div>

              <div className="famous-content">
                <h6 className="text-dark">STUDIO DISPLAY</h6>
                <h4 className="text-dark">600 nits of brightness.</h4>
                <p className="text-dark"> 27-inch 5K Retina display</p>
              </div>
              </div>
              
            </div>

            <div className="famous-card position-relative col-3 row">
              <div id="famous-card-items">
              <div>
                <img
                  src="images/famous-3.jpg"
                  className="img-fluid"
                  alt="item"
                ></img>
              </div>

              <div className="famous-content ">
                <h6 className="text-dark">SMARTPHONES</h6>
                <h4 className="text-dark">SmartPhone 13 Pro.</h4>
                <p className="text-dark">
                  {" "}
                  Now in Green From $999.00 or $41.62/mo.
                </p>
              </div>
              </div>
              
            </div>

            <div className="famous-card position-relative col-3 row">
              <div id="famous-card-items">
              <div>
                <img
                  src="images/famous-4.webp"
                  className="img-fluid"
                  alt="item"
                ></img>
              </div>

              <div className="famous-content ">
                <h6 className="text-dark">HOME SPEAKERS</h6>
                <h4 className="text-dark">Room-filling sound</h4>
                <p className="text-dark">From $699.00 or $116.58/mo.</p>
              </div> 
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5">
        <div className="container-fluid" id="blog-wrapper-container">
          <div className="blog-wrapper-title">
            <h3>Our Latest Blogs</h3>
          </div>
          <div className="row" id="blog-wrapper-card">
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
                    30,000.
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
                    information or Amazon account details.It's gone be amazing 
                  </p>
                  <Link to="/" className="button">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
