import React, { useEffect, useState } from 'react';
import { Box, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { getProducts } from 'store/products/action';
import { postCart } from 'store/cart/actions';
import ButtonField from 'components/Button';
import { StyledImage , StyledTypographyVariant } from 'containers/ProductDetailPage/style';
import { RouteComponentProps } from 'react-router-dom';

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

interface Props  extends RouteComponentProps<{id : string}> {
  product: any[];
  getProducts: Function;
  postCart: Function;
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

const mapStateToProps = (state: any, props: Props) => {
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
