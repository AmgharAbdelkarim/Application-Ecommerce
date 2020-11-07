import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { cartSelector } from '../../store/saga/user/selectors';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import ButtonField from '../../components/Button';
import { Box, Grid } from '@material-ui/core';
import {deleteCartItem , updateCartItemQuantity} from '../../store/saga/cart/actions';


export interface CartPageProps {
  items: any[];
  deleteCartItem: Function;
  updateCartItemQuantity: Function;
}



const CartsPage = ({items , deleteCartItem , updateCartItemQuantity} : CartPageProps) => {
  
  
  return (
    <>
      <Box paddingX={[3,6,12]} >
          <Grid container>
          {items.map((row: any) => (
            <CartItem row={row} deleteCartItem={deleteCartItem} updateCartItemQuantity={updateCartItemQuantity} />
          ))}
          </Grid>
      </Box>
      </>
  );
}
const mapStateToProps = (state: any) => ({
  items: cartSelector(state)
});
const mapDispatchToProps = {
  deleteCartItem,
  updateCartItemQuantity
};
export default connect(mapStateToProps, mapDispatchToProps)(CartsPage);
