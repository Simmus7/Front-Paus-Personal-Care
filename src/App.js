import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Aboutus from './components/pages/Aboutus';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import AddProduct from './components/pages/AddProduct';

function App() {
  return (    
      <Router>
      <Header/>
      <Navbar/>
      <Switch>
        <Route path='/' exact component = {Home} />
        <Route path='/products' exact component = {Products} />
        <Route path='/aboutus' exact component = {Aboutus} />
        <Route path='/contact' exact component = {Contact} />
        <Route path='/addproduct' exact component = {AddProduct} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
