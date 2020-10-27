import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { getProducts } from '../../store/saga/products/action';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

interface Props {
  product: any;
  getProducts: any;
  [key: string]: any;
}
const ProductDetailPage = ({ getProducts, product }: Props) => {
  const classes = useStyles();
  useEffect(() => {
    if (product.length === 0) getProducts();
  }, [getProducts]);
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <img
                style={{ width: '-moz-available' }}
                width="-moz-available"
                src="https://cnet3.cbsistatic.com/img/yjrw7VgWV7a95AvK8Ym0Np4bFXY=/1200x675/2017/06/27/13484418-bfd9-41e2-8f2d-9b4afb072da8/apple-macbook-pro-15-inch-2017-14.jpg"
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <h1>{product[0]?.title}</h1>
              <p>price</p>
              <p>details</p>
              <p>quantity</p>
              <button>ajouter</button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
interface ownProps {
  [key: string]: any;
}
const mapStateToProps = (state: any, props: ownProps) => {
  return {
    product: state.ProductReducer.filter(
      (e: any) => e._id === props.match.params.id,
    ),
  };
};
const mapDispatchToState = {
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToState)(ProductDetailPage);
