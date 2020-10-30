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
import TableContent from './tableContent';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name: string, prix: number, quantity: number, sousTotal: number,) {
  return { name, prix, quantity, sousTotal };
}



const CartsPage = ({items} : any) => {
  const classes = useStyles();
  const rows:any[] = items.map((item : any) => 
    createData(item.productName, item.prix, item.quantity, item.quantity*item.prix)
  );
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Prix</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Sous-Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableContent row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
const mapStateToProps = (state: any) => ({
  items: cartSelector(state)
});
export default connect(mapStateToProps)(CartsPage);
