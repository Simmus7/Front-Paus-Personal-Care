import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core'
import useStyles from './styles';
import { SearchOutlined, ShoppingCartOutlined} from "@material-ui/icons";
import { Link } from 'react-router-dom';
import Details from '../../pages/Details'


const Producto = ( {producto} ) => {
    
    const clases = useStyles();
    const urls = producto.productImage;
    return (
        <Card className={clases.root} >
            <CardMedia className={clases.media} image={urls[0]} title={producto.productname} component = {Link} to={'/details/'+producto._id}/>
            <CardContent>
                <div className={clases.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {producto.productname}
                    </Typography>
                    <Typography variant="h5">
                        ${producto.price}
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">
                    {producto.description}    
                </Typography>    
            </CardContent>
        </Card>
    )
}

export default Producto

