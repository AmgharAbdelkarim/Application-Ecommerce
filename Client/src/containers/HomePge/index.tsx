import React from 'react';
import ButtonField from '../../components/Button';
import { connect } from 'react-redux';
import { getProducts } from '../../store/saga/products/action';
import images from '../../utils/images';
import { Box, Grid } from '@material-ui/core';
import TypographyVariant from '../../components/Typography';
import { StyledTypographyVariant } from './style';
interface Props {
  [key: string]: any;
}
const SubscribePage = (props: Props) => {
  const ClickHandler = () => {
    props.getProducts(props.history);
  };
  return (
    <>
      <Box
        id="content"
        style={{
          backgroundImage: `url(${images.backgroundImage})`,
          padding: '80px',
          backgroundSize: 'cover',
        }}
        paddingX={[8, 12]}
      >
        <Grid container direction="column" zeroMinWidth spacing={3} alignItems="center">
          <Grid xs item>
            <StyledTypographyVariant variant="h2">
              Home Page
            </StyledTypographyVariant>
          </Grid>
          <Grid xs item>
            <StyledTypographyVariant variant="h4">
              bienvenu dans notre store
            </StyledTypographyVariant>
          </Grid>
          <Grid xs item>
            <TypographyVariant
              variant="subtitle1"
              className={{ color: '#fff' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              et vestibulum sem. Suspendisse dictum hendrerit aliquet. Donec
              blandit lectus ac mi fermentum interdum. Cras dictum pulvinar
              tortor. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Maecenas at ligula a tortor tincidunt ultrices. Sed
              facilisis lorem erat. Duis quam justo, laoreet vel mi ut, cursus
              ullamcorper nulla. Integer eu quam vel nunc congue efficitur.
              Suspendisse euismod mollis lectus, ut scelerisque diam aliquet
              quis. Ut efficitur risus non ante dapibus fermentum. Nullam
              feugiat lectus eget orci sagittis, nec gravida libero tempus.
              Morbi vel augue dui.
            </TypographyVariant>
          </Grid>
          <Grid xs item>
            <ButtonField
              type="button"
              clickHandler={ClickHandler}
              style={{ color: '#fff', border: '1px solid #60FCF1' }}
            >
              start shopping
            </ButtonField>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

const mapDispatchToState = {
  getProducts,
};
export default connect(null, mapDispatchToState)(SubscribePage);
