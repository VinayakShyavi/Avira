import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = () => {
    return (
        <div className="col-4">
            <div className="special-product-card">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <img src="images/watch1.jpg" className="img-fluid" alt="watch" />
                    </div>
                    <div className="special-product-content">
                        <h5 className="brand">Samsung</h5>
                        <h6>Samsung Galaxy Note10+ Mobile Phone; Sim...</h6>
                        <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className="price">
                            <span className="red-p">$100</span> &nbsp; <strike>$400</strike>{" "}
                        </p>
                        <div className="discount-till d-flex align-items-center">
                            <p className="mb-0 px-2">
                                <b>5</b> days
                            </p>
                            <div className="d-flex gap-10 align-items-center">
                                <span className="badge rounded-circle p-3 ">1</span>:
                                <span className="badge rounded-circle p-3 ">1</span>:
                                <span className="badge rounded-circle p-3 ">1</span>
                            </div>
                        </div>
                        <div className="prod-count mt-4 mb-4">
                            <p>Products 5</p>
                            <div className="progress-bar">
                                <div
                                    className="progress"
                                    role="progressbar"
                                    aria-label="Basic example"
                                    aria-valuenow="30"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    <div class="progress-bar" style={{ width: "30%" }}></div>
                                </div>
                            </div>
                        </div>
                        <Link className="button">Add to Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialProduct;
