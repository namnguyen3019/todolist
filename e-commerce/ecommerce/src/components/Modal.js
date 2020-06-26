import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const {
                        id,
                        title,
                        company,
                        img,
                        info,
                        price,
                        inCart,
                    } = value.modalProduct;
                    if (!modalOpen) return null;
                    else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div
                                            id="modal"
                                            className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                                        >
                                            <h5>Item added to the cart</h5>
                                            <img
                                                src={img}
                                                alt={title}
                                                className="img-fluid"
                                            />
                                            <h4>{title}</h4>
                                            <h4 className="text-muted">{`Price: $ ${price}`}</h4>
                                            <ButtonContainer>
                                                <Link
                                                    to="/"
                                                    onClick={() => {
                                                        closeModal();
                                                    }}
                                                >
                                                    Continue Shopping
                                                </Link>
                                            </ButtonContainer>
                                            <ButtonContainer
                                                cart
                                                onClick={() => {
                                                    closeModal();
                                                }}
                                            >
                                                {" "}
                                                <Link to="/cart">
                                                    Go to Cart
                                                </Link>
                                            </ButtonContainer>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        );
                    }
                }}
            </ProductConsumer>
        );
    }
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal {
        background: var(--mainWhite);
    }
`;
