import React, { useEffect } from 'react';
import {
  fade,
  makeStyles,
  Theme,
  createStyles,
  useTheme,
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { LogOut } from '../../store/saga/user/action';
import MenuDrawer from '../../components/MenuDrawer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }),
);

interface Props {
  history: any;
  [key: string]: any;
}
const Navbar = (props: Props) => {
  const token = localStorage.getItem('token');
  console.log(token);
  const { history } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar id="header"  style={{ color: '#60FCF1' }}>
        <Toolbar>
          <MenuDrawer
            clickHandler={(path: string) => history.push(path)}
            LogOut={props.LogOut}
          />
          <Typography
            variant="h6"
            onClick={() => history.push('/carts')}
            noWrap
          >
            Shop
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          {token ? (
            <>
              {' '}
              <div>
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
                  profilName
                </IconButton>
              </div>
            </>
          ) : (
            <div>
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
            </div>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

const mapDispatchToProps = {
  LogOut,
};

export default connect(null, mapDispatchToProps)(withRouter(Navbar));
