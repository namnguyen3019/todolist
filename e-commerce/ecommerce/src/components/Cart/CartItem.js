import React from "react";

export default function CartItem({ item, value }) {
    const { id, title, price, count, total, img } = item;
    const { increment, decrement, removeItem } = value;
    return (
        <div className="row my-1 text-capitalize text-center">
            {/* Image */}
            <div className="col-10 mx-auto col-lg-2">
                <img
                    src={img}
                    style={{ width: "5rem", height: "5rem" }}
                    alt={title}
                    className="img-fluid"
                />
            </div>
            {/* Name of the Product */}
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Product: </span>
                {title}
            </div>
            {/* Price */}
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none text-muted">Price:</span>
                ${price}
            </div>
            {/*  Number item on the cart */}
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <span
                        className="btn btn-black mx-1"
                        onClick={() => decrement(id)}
                    >
                        -
                    </span>
                    <span className="btn btn-black mx-1">{count}</span>
                    <span
                        className="btn btn-black mx-1"
                        onClick={() => increment(id)}
                    >
                        +
                    </span>
                </div>
            </div>
            {/*  Remove */}
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            {/*  Total */}
            <div className="col-10 mx-auto col-lg-2">
                <strong> item total: $ {total} </strong>
            </div>
        </div>
    );
}
