import React, { SyntheticEvent } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { IconButton, CardActions } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useStyles from './styles';


interface Props {
  product: any;
  clickHandler: ((event:  SyntheticEvent) => void);
}
const ProductCard = ({ product, clickHandler }: Props) => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={3} >
        <Card className={classes.ProductCardRoot} onClick={clickHandler}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={product.imageUrl}
              title={product.title}
            />
            <CardContent>
              <Grid container>
                <Grid item xs={6}>

                <Typography  variant="h5" color="textSecondary" component="p">
                {product.title}
              </Typography>
                </Grid>
                <Grid item xs={6}>

                <Typography classes={{root : classes.Typography}} variant="h6" color="textSecondary" component="p">
                {product.price}
              </Typography>
                </Grid>
                <Grid item xs={12}>

                <Typography
                variant="subtitle2"
                color="textSecondary"
                component="p"
              >
                {product.description}
              </Typography>
                </Grid>
              </Grid>
              
            </CardContent>
            <CardActions className={classes.cardActions}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <ShoppingCartIcon />
              </IconButton>
            </CardActions>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

export default ProductCard;
