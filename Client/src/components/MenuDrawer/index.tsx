import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  IconButton,
  Drawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
    menuButton: {
      marginRight: 16,
    },
    paper: {
      width: '20vw',
    },
  })


const MenuDrawer = ({
  clickHandler,
  LogOut,
}: {
  clickHandler: Function;
  LogOut: Function;
}) => {
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
        onClose={()=>setIsDrawerOpen(false)}
      >
        <List>
          {[{page : 'Home' , path : '/'},{page : 'Products', path :   '/products'}].map(({page , path}, index) => (
            <ListItem
              button
              key={page}
              onClick={() => clickHandler(path)}
            >
              <ListItemText primary={page} />
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
