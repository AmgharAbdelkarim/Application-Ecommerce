import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { getProducts } from '../../store/saga/products/action';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '90%',
      margin: 'auto',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

interface Props {
  Products: any[];
  history: any;
  getProducts: any;
  [key: string]: any;
}
const ProductsPage = ({ Products, history, getProducts }: Props) => {
  const classes = useStyles();
  console.log(Products);
  useEffect(() => {
    if (Products.length === 0) getProducts();
  }, [getProducts]);
  const items = Products.map((e) => (
    <Grid item xs={3} key={e}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <button
              onClick={() => {
                history.push('/products/' + e._id);
              }}
            >
              {e.title}
            </button>

            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  ));
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {items}
      </Grid>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  console.log(state);
  return {
    Products: state.ProductReducer,
  };
};
const mapDispatchToState = {
  getProducts,
};
export default connect(mapStateToProps, mapDispatchToState)(ProductsPage);
