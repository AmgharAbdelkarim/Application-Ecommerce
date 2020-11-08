import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import ButtonField from '../../components/Button';
import TypographyVariant from '../../components/Typography';
import { StyledImage } from './style';
export interface CartItemProps {
  row: any;
  deleteCartItem: Function;
  updateCartItemQuantity: Function;
}

const CartItem = ({
  row,
  deleteCartItem,
  updateCartItemQuantity,
}: CartItemProps) => {
  const [quantity, setQuantity] = useState(row.quantity);

  useEffect(() => {
    updateCartItemQuantity({ productId: row._id, quantity });
  }, [quantity]);
  
  return (
    <>
      <Grid xs={4} item alignItems="center">
        <Box>
          <StyledImage src={row.imageUrl} alt="product-picture" />
        </Box>
        <TypographyVariant variant="h4"> {row.name}</TypographyVariant>
        <TypographyVariant variant="h5"> {row.price}</TypographyVariant>
        <TypographyVariant variant="body1">
          {' '}
          {row.description}
        </TypographyVariant>
        <Box>
          <input
            type="button"
            value="-"
            onClick={() => quantity > 0 && setQuantity(quantity - 1)}
          />
          <input type="button" value={quantity} />
          <input
            type="button"
            value="+"
            onClick={() => quantity > 0 && setQuantity(quantity + 1)}
          />
        </Box>
        <ButtonField clickHandler={() => deleteCartItem(row._id)}>
          {' '}
          delete{' '}
        </ButtonField>
      </Grid>
    </>
  );
};

export default CartItem;
