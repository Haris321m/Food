// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/cart/CartContent';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Deals from './components/Deals/deals';
import Contact from './components/components/Contact';
import Login from './components/components/Login';
import Cart from './components/cart/Cart';

function App() {
    return (
        <CartProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/deals" element={<Deals />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <Footer />
            </Router>
        </CartProvider>
    );
}

export default App;
