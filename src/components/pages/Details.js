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
  }

  componentDidMount () {
    
    axios.get('http://localhost:5000/products/get/').then(
      response => {
        this.setState({
          products: response.data
          
        })
        
      }
      )
      .catch (() => console.log('NO TRAJO LOS PRODUCTOS'));
      //var products = [];
      const { match: { params } } = this.props;
      const idproduct = params.id;
      var productsaux;
    
        //products[0]={"_id":"615bd31a191e4b60cf285747","productname":"Desodorante","description":"Para el mal olor ","price":500,"productImage":["https://res.cloudinary.com/pauspersonalcare/image/upload/v1633407766/pauspersonalcare/xqm2tyine0i0ulirocbb.jpg"],"createdAt":"2021-10-05T04:22:50.172Z","updatedAt":"2021-10-05T04:22:50.172Z","__v":0};
        this.state.products.map((product) => {
          if(product._id === idproduct){
              productsaux = product;
          }
        })
        this.setState({
          productToShow: productsaux          
        })
    };

    render () {
      

    return(     
    <>        
    <Detalles product = {this.state.productToShow} />
    </>
     )

    };

}

