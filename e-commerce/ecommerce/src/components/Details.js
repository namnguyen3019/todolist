import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {
                        id,
                        title,
                        company,
                        img,
                        info,
                        price,
                        inCart,
                    } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* title start */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-blue text-slanted my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* title end */}
                            {/* Product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img
                                        src={img}
                                        alt={title}
                                        className="img-fluid"
                                    />
                                </div>
                                {/* Product text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>Model: {title}</h2>
                                    <h4 className="text-title text-uppercase mt-3 mb-2">
                                        Made by: {company}
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            {" "}
                                            price: <span>$</span> {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitialize font-weight-bold mt-3 mb-0">
                                        Some info about product:
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    {/* Button */}
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>
                                                back to Products
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer
                                            cart
                                            disabled={inCart ? true : false}
                                            onClick={() => {
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}
                                        >
                                            {inCart ? "In cart" : "add to Cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </ProductConsumer>
        );
    }
}
