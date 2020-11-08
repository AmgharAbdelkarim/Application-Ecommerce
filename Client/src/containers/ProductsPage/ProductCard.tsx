import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { getProducts } from '../../store/saga/products/action';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '90%',
      margin: 'auto',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

interface Props {
  product: any;
  clickHandler: any;
}
const ProductCard = ({ product, clickHandler }: Props) => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={3} onClick={clickHandler}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={product.imageUrl}
              title={product.title}
            />
            <CardContent>
              <Typography variant="h5" color="textSecondary" component="p">
                {product.title}
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
                {product.price}
              </Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                component="p"
              >
                {product.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

export default ProductCard;
