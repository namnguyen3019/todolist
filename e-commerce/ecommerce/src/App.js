import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from './components/Cart/Cart';
import Modal from './components/Modal';
import ProductProvider from './context';
//Router
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
    return (
        <ProductProvider>
        <BrowserRouter className="container">
            <Navbar />
            <Switch>
                <Route exact path="/" component={ProductList} />
                <Route exact path="/details" component={Details} />
                <Route exact path="/default" component={Default} />
                <Route exact path="/cart" component={Cart} />
            </Switch>
            <Modal />
        </BrowserRouter>
        </ProductProvider>
    );
}

export default App;
