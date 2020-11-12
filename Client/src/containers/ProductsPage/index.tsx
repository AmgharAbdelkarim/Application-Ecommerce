import React, { useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { getProducts } from '../../store/saga/products/action';
import ProductCard from './ProductCard';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    background:'aliceblue',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

interface Props {
  Products: any[];
  history: any;
  getProducts: any;
  [key: string]: any;
}
const ProductsPage = ({ Products, history, getProducts }: Props) => {
  const classes = useStyles();

  useEffect(() => {
    if (Products.length === 0) getProducts();
  }, [getProducts]);

  return (
    <Box className={classes.root} paddingX={[3, 6, 12]} paddingY={4}>
      <Grid container spacing={3}>
        {Products.map((product) => (
          <ProductCard
            product={product}
            key={product._id}
            clickHandler={() => {
              history.push('/products/' + product._id);
            }}
          />
        ))}
      </Grid>
    </Box>
  );
};

const mapStateToProps = (state: any) => {
  console.log(state);
  return {
    Products: state.ProductReducer,
  };
};
const mapDispatchToState = {
  getProducts,
};
export default connect(mapStateToProps, mapDispatchToState)(ProductsPage);
