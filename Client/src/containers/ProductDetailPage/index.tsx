import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Box, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { getProducts } from '../../store/saga/products/action';
import { postCart } from '../../store/saga/cart/actions';
import ButtonField from '../../components/Button';
import { StyledImage , StyledTypographyVariant } from './style';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    boxShadow:"none"
  },
}));

interface Props {
  product: any;
  getProducts: any;
  postCart: Function;
  [key: string]: any;
}
const ProductDetailPage = ({ getProducts, product, postCart }: Props) => {
  const classes = useStyles();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product.length === 0) getProducts();
  }, [getProducts]);
  return (
    <>
      <Box id="content"  paddingX={[3, 6, 12]} paddingY={4}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <StyledImage src={product[0]?.imageUrl} />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <StyledTypographyVariant variant="h3">
                {product[0]?.title}
              </StyledTypographyVariant>
              <StyledTypographyVariant variant="h5">
                {product[0]?.price}
              </StyledTypographyVariant>
              <StyledTypographyVariant variant="subtitle1">
                {product[0]?.description}
              </StyledTypographyVariant>
              <Box>
                <input
                  type="button"
                  value="-"
                  onClick={() => setQuantity(quantity - 1)}
                />
                <input type="button" value={quantity} />
                <input
                  type="button"
                  value="+"
                  onClick={() => setQuantity(quantity + 1)}
                />
              </Box>
              <ButtonField
                clickHandler={()=> postCart(product[0]?._id, quantity)}
              >
                ajouter
              </ButtonField>
            </Paper>
          </Grid>
        </Grid>
      </Box>
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
  postCart,
};

export default connect(mapStateToProps, mapDispatchToState)(ProductDetailPage);
