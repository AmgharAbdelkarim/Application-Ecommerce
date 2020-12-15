import { Box, createStyles, Divider, Grid, makeStyles, Theme } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';
import React from 'react';
import LoginPage from '../LoginPage';
import SubscribePage from '../SubscribePage';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: 'aliceblue',
      height: '100%',
    },
    
  }),
);
const AuthenticationPage = ({ history }: {history : RouteComponentProps}) => {
    const classes = useStyles();
  return (
          
          <Grid id="content" container alignItems="center" classes={{root : classes.root}} >
              <Grid xs={5} item>
                  <LoginPage history={history} />
              </Grid>
              <Divider orientation="vertical"  style={{margin: '0px auto' , height:"90%"}}/>                 
              <Grid xs={5} item>
                  <SubscribePage history={history}/>
              </Grid>
          </Grid>
  
  );
};


export default AuthenticationPage;
