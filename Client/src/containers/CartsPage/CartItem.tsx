import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import ButtonField from '../../components/Button';


export interface CartItemProps {
  row: any;
  deleteCartItem: Function;
  updateCartItemQuantity: Function;
}


const CartItem = ({row , deleteCartItem  , updateCartItemQuantity} : CartItemProps) => {
  const [quantity, setQuantity] = useState(row.quantity);
  
  useEffect(() => {
    updateCartItemQuantity({ productId: row._id, quantity })
  }, [quantity]);
  
  return (
        <>  
      <Grid xs={3} item key={row.name}>
        <Box >
          <img src={row.imageUrl} alt="product-picture" style={{ width: "128px" , height:"128px" }} />
        </Box>
        <Typography component="h4"> {row.name}</Typography>
        <Typography component="h4"> {row.prix}</Typography>
        <Box>
              <input type="button" value="-" onClick={()=>quantity > 0 && setQuantity(quantity  - 1)}/>
              <input type="button" value={quantity} />
              <input type="button" value="+" onClick={()=>quantity > 0 && setQuantity(quantity  + 1)}/>
        </Box>  
        <ButtonField clickHandler={()=>deleteCartItem(row._id)}> Eliminer </ButtonField>
      </Grid>
          
        </>
  );
}

export default CartItem;
