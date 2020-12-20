import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { getProducts } from 'store/products/action';
import ProductCard from './ProductCard';
import { Box } from '@material-ui/core';
import useStyles from 'containers/ProductsPage/styles';

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
    <Box  id="content" className={classes.root} paddingX={[3, 6, 12]} paddingY={4}>
      <Grid container spacing={3}>
        {Products.map((product , index) => (
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
