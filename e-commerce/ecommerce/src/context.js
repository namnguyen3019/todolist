import React, { Component } from "react";
import Product from "./components/Product";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

//Provider
//Consumer

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
    };
    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach((item) => {
            let singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState({
            products: tempProducts,
        });
    };
    getItem = (id) => {
        const product = this.state.products.find((item) => item.id === id);
        return product;
    };
    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: product };
        });
    };
    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return {
                products: tempProducts,
                cart: [...this.state.cart, product],
            };
        }, () => this.addTotals())
    };
    openModal = (id) => {
        const product = this.getItem(id);
        this.setState({
            modalProduct: product,
            modalOpen: true,
        });
    };
    closeModal = () => {
        this.setState({
            modalOpen: false,
        });
    };

    //Method in the cart: increase item, decrease item, remove item and clear item
    increment = (id) => {
        console.log("increase");
        let tempCart = [...this.state.cart]
        let item = tempCart.find(item => item.id == id);
        item.count++;
        item.total = item.count*item.price
        this.setState({
            cart: [...tempCart]
        }, ()=> this.addTotals())
    };
    decrement = (id) => {
        console.log("decrease");
        let tempCart = [...this.state.cart]
        let item = tempCart.find(item => item.id == id)
        if(item.count <= 0){
            this.removeItem(id)
        }else{
            item.count--;
            item.total = item.count*item.price;
            this.setState({
                cart: [...tempCart]
            }, this.addTotals())
        }
    };
    removeItem = (id) => {
        console.log(" Remove item from the cart");
        let tempProducts = [...this.state.products]
        let tempCart = [...this.state.cart]
        tempCart = tempCart.filter(item => item.id !== id)
        this.setState({
            cart: tempCart
        })

        let removedProduct = tempProducts.find(product => product.id == id)
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(()=>{
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            }
        }, ()=> this.addTotals())
    };
    clearCart = () => {
        this.setState({
            cart: []
        }, () => {
            this.setProducts()
        })    
    };

    //Calculate the total
    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => {
            subTotal += item.price*item.count;
        })
        let tempTax = subTotal*0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;

        this.setState({
            cartSubTotal: subTotal,
            cartTax: tax,
            cartTotal: total
        })
    }

    render() {
        return (
            <ProductContext.Provider
                value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                    getItem: this.getItem,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart,
                    addTotals: this.addTotals
                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

export const ProductConsumer = ProductContext.Consumer;
export default ProductProvider;
