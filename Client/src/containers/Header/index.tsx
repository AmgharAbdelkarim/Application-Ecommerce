import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { LogOut , LoginSuccess } from 'store/user/action';
import MenuDrawer from 'components/MenuDrawer';
import { RouteComponentProps } from 'react-router';
import { useRequireAuth } from 'helpers/checkAuth';
import { Box } from '@material-ui/core';
import { StyledTypography , useStyles } from 'containers/Header/styles';



interface Props extends RouteComponentProps {
  LogOut: Function;
  firstName: string;
  LoginSuccess: Function;
}
const Navbar = ({ history , LoginSuccess , LogOut  ,firstName }: Props) => {

  const { isUserLoginIn } = useRequireAuth(LoginSuccess);
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar id="header" classes={{root : classes.appBarRoot}} >
        <Toolbar classes={{root : classes.toolbarRoot}}>
          <Box display="ruby">
            <MenuDrawer
              clickHandler={(path: string) => history.push(path)}
              LogOut={LogOut}
            />
            <StyledTypography
              variant="h6"
              onClick={() => history.push('/carts')}
            >
              Shop
            </StyledTypography>
          </Box>
          <Box>
            {isUserLoginIn ? (
              <>
                
                  <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={0} color="secondary">
                      <ShoppingCartIcon />
                    </Badge>
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    onClick={() => console.log('e')}
                    color="inherit"
                  >
                    {firstName}
                  </IconButton>
            
              </>
            ) : (
              <>
                <IconButton aria-label="show 4 new mails" color="inherit">
                  <Badge badgeContent={0} color="secondary">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  aria-label="show 4 new mails"
                  color="inherit"
                  onClick={() => history.push('/LoginPage')}
                >
                  Log in
                </IconButton>{' '}
              </>
                )}
              </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

const mapDispatchToProps = {
  LogOut,
  LoginSuccess
};

const mapStateToProps = ({AuthReducer}: any) => {
  return {
    firstName: AuthReducer.firstName,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));
