import React, { FunctionComponentElement } from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  useTheme,
} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    paper: {
      width: '20vw',
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
  }),
);

const MenuDrawer = ({
  clickHandler,
  LogOut,
}: {
  clickHandler: Function;
  LogOut: Function;
}) => {
  const theme = useTheme();
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const logOutHandler = () => {
    LogOut();
    clickHandler('/Products');
    localStorage.setItem('token', '');
  };

  return (
    <>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        classes={{ paper: classes.paper }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={() => setIsDrawerOpen(false)}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Home /', 'Products /products'].map((text, index) => (
            <ListItem
              button
              key={text}
              onClick={() => clickHandler(text.split(' ')[1])}
            >
              <ListItemText primary={text.split(' ')[0]} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem button key="Log OUT">
            <ListItemText primary="Log OUT" onClick={() => logOutHandler()} />
          </ListItem>
          <ListItem button key="Help">
            <ListItemText primary="Help" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
