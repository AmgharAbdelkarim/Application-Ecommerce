import React from 'react';
import { Grid, Box } from '@material-ui/core';

const ProfilePage = () => {
  return (
    <Box>
      <Grid container spacing={4} alignItems="center">
        <Grid xs={6} item>
          nom
        </Grid>
        <Grid xs={6} item>
          address
        </Grid>
        <Grid xs={6} item>
          gmail
        </Grid>
        <Grid xs={6} item>
          All right reserved 2020
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfilePage;
