import React, { useState } from 'react';
import { cartSelector } from '../../store/saga/user/selectors';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import { Box, Grid } from '@material-ui/core';
import {
  deleteCartItem,
  updateCartItemQuantity,
} from '../../store/saga/cart/actions';
import TypographyVariant from '../../components/Typography';
import { StyledBox, StyledTypographyVariant } from './style';

export interface CartPageProps {
  items: any[];
  deleteCartItem: Function;
  updateCartItemQuantity: Function;
}

const CartsPage = ({
  items,
  deleteCartItem,
  updateCartItemQuantity,
}: CartPageProps) => {
  return (
 
      <StyledBox paddingX={[3, 6, 12]} id="content" paddingY={4} >
        <TypographyVariant variant="h2" component="h2">
          {' '}
          Shopping cart
        </TypographyVariant>
        {items && items.length > 0 ? (
          <>
            <StyledTypographyVariant variant="h3">
              {items.length} articles{' '}
            </StyledTypographyVariant>
            <Grid container alignContent="center" justify="space-between">
              {items.map((row: any) => (
                <CartItem
                  row={row}
                  deleteCartItem={deleteCartItem}
                  updateCartItemQuantity={updateCartItemQuantity}
                  key={row.name}
                />
              ))}
            </Grid>
          </>
        ) : (
          <TypographyVariant variant="h5">
            Please add item to your cart
          </TypographyVariant>
        )}
      </StyledBox>

  );
};
const mapStateToProps = (state: any) => ({
  items: cartSelector(state),
});
const mapDispatchToProps = {
  deleteCartItem,
  updateCartItemQuantity,
};
export default connect(mapStateToProps, mapDispatchToProps)(CartsPage);
