import React, { Component } from 'react';
import '../../App.css';
import Marcas from '../Marcas';
import Productos from '../Productos/Productos'
import axios from 'axios';


export default class Products extends Component {
 
  constructor(props){
    super(props)

    this.state = {
      products: []
    }
  }

  componentDidMount () {
    axios.get('https://backend-paus-personal-care.herokuapp.com/products/get/').then(
      response => {
        this.setState({
          products: response.data
          
        })
        
      }
      )
      .catch (() => console.log('NO TRAJO LOS PRODUCTOS'))
    };

    
   

  render () {

    return(
      
    <>          
    <h1 className='products'></h1>
      <Marcas />
      <Productos products = {this.state.products} />
    </>
     )
  };
   
}








