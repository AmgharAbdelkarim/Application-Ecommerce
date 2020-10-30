import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name: string, prix: number, quantity: number, sousTotal: number,) {
  return { name, prix, quantity, sousTotal };
}



const TableContent = ({row} : any) => {
  const classes = useStyles();
  const [quantity, setQuantity] = useState(row.quantity);
  return (
        <>  
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.prix}</TableCell>
              <TableCell align="right">
                <div>
                  <input type="button" value="-" onClick={()=>quantity > 0 && setQuantity(quantity  - 1)}/>
                  <input type="button" value={quantity} />
                  <input type="button" value="+" onClick={()=>quantity > 0 && setQuantity(quantity  - 1)}/>
                </div>               
              </TableCell>
              <TableCell align="right">{row.sousTotal}</TableCell>
            </TableRow>
          
        </>
  );
}

export default TableContent;
