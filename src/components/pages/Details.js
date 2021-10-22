import React, { Component } from 'react';
import '../../App.css';
import Detalles from './Detalles/Detalles';
import axios from 'axios';

export default class Details extends Component {

  constructor(props){
    super(props)

    this.state = {
      products: [],
      productToShow: null
    }

    this.getProducts()
  }

  async getProducts (){
    const res = await axios.get('https://backend-paus-personal-care.herokuapp.com/products/get/') //ESto si esta corriendo?

    this.setState({
      products: res.data
    })

    console.log("PRODUCTOS DETALLE")
    console.log(res.data)

    //var products = [];
    const { match: { params } } = this.props;
    const idproduct = params.id;
    var productsaux;

    //products[0]={"_id":"615bd31a191e4b60cf285747","productname":"Desodorante","description":"Para el mal olor ","price":500,"productImage":["https://res.cloudinary.com/pauspersonalcare/image/upload/v1633407766/pauspersonalcare/xqm2tyine0i0ulirocbb.jpg"],"createdAt":"2021-10-05T04:22:50.172Z","updatedAt":"2021-10-05T04:22:50.172Z","__v":0};
    /*this.state.products.map((product) => {
      if(product._id === idproduct){
          productsaux = product;
      }
    })*/

    res.data.map((product) => {
      if(product._id === idproduct){
          productsaux = product;
      }
    })

    console.log(productsaux)

      this.setState({
        productToShow: productsaux
      })

}

  render () {
    if(this.state.productToShow != null ){
      return(
          <Detalles product = {this.state.productToShow} />

      )
    }else{
      return(
          <h1>No hay Data </h1>

      )
    }


  }

}
