import React from 'react';
import { Grid, Box } from '@material-ui/core';

const Footer = () => {
  return (
    <Box  id="footer">
      <Grid style={{height : '100%'}} justify="space-between" container alignItems="center">
        <Grid xs={6} item>
          E-commerce web site
        </Grid>
        <Grid xs={6} item>
          Amghar Abdelkarim
        </Grid>
        <Grid xs={6} item>
          Morocco
        </Grid>
        <Grid xs={6} item>
          All right reserved 2020
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
