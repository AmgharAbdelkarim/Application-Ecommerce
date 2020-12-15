import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
    background: 'white',
    },
    ProductCardRoot: {
        flexGrow: 1,
        width: '90%',
        margin: 'auto',
    },
  paper: {
      textAlign: 'center',
      background:'white'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    },
    Typography: {
      textAlign: 'end'
  }
}));