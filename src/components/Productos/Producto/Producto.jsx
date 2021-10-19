import React from 'react'
import { Card, CardMedia, CardContent, Typography} from '@material-ui/core'
import useStyles from './styles';

const Producto = ( {producto} ) => {
    const clases = useStyles();
    const urls= producto.productImage;
    return (
        <Card className={clases.root} >
            <CardMedia className={clases.media} image={urls[0]} title={producto.productname} />
            <CardContent>
                <div className={clases.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {producto.productname}
                    </Typography>
                    <Typography variant="h5">
                        {producto.price}
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
