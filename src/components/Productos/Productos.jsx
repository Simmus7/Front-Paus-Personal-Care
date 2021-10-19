import React from "react";
import { Grid } from '@material-ui/core';

import Producto from './Producto/Producto';
import useStyles from './styles';
import SearchBar from "material-ui-search-bar";

/*const productos = [
    { id:1, name: 'Jabón', description: 'Jabon antibacterial.', price: '$20.000', image: 'images/img1.jpg'},
    { id:2, name: 'Crema corporal', description: 'Para el cuidado de tu cuerpo.', price:'$40.000', image: 'images/img2.jpg'},
    { id:3, name: 'Crema de piel', description: 'Para el cuidado de tu piel.', price:'$30.000', image: 'images/img3.jpg'},
    { id:4, name: 'Crema corporal', description: 'Para el cuidado de tu cuerpo.', price:'$40.000', image: 'images/img2.jpg'},
    { id:5, name: 'Jabón', description: 'Jabon antibacterial.', price: '$20.000', image: 'images/img1.jpg'},
    { id:6, name: 'Crema corporal', description: 'Para el cuidado de tu cuerpo.', price:'$40.000', image: 'images/img2.jpg'},
    { id:7, name: 'Crema de piel', description: 'Para el cuidado de tu piel.', price:'$30.000', image: 'images/img3.jpg'},
    { id:8, name: 'Crema corporal', description: 'Para el cuidado de tu cuerpo.', price:'$40.000', image: 'images/img2.jpg'},
];*/


const Productos = (  {products} ) => {
    const clases = useStyles();
    return (
        <main className={clases.content}>
            <SearchBar />
            <div className={clases.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs ={12} sm={6} md={4} lg={3}>
                        <Producto producto={product} />
                    </Grid> 
                )) }
            </Grid> 
        </main>
    )   
}

export default Productos;