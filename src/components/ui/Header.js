import React, { useEffect, useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, useScrollTrigger, Button, Menu, MenuItem, useMediaQuery, SwipeableDrawer, IconButton, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';


function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  appbar: {
    zIndex: theme.zIndex.modal + 1
  },
  toolbarMagrgin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: { marginBottom: '2em' },
    [theme.breakpoints.down('xs')]: { marginBottom: '1.5em' },
  },
  logo: {
    height: '8em',
    [theme.breakpoints.down('md')]: { height: '7em' },
    [theme.breakpoints.down('xs')]: { height: '5.5em' },
  },
  tabsContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    // color: "white",
    marginLeft: "25px"
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    height: 45,
    marginLeft: 50,
    marginRight: 25,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    }
  },
  logoContainer: {
    padding: 0
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    borderRadius: "0px"
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    color: 'white',
    "&:hover": {
      opacity: 1
    }
  },
  drawer: {
    backgroundColor: theme.palette.common.blue
  },
  drawerIconContainer: {
    "&:hover": {
      backgroundColor: "transparent"
    },
    marginLeft: 'auto'
  },
  drawerIcon: {
    height: '50ox',
    width: '50px'
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: '0.7'
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: '1'

    }
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange
  }

}));



const Header = (props) => {

  const theme = useTheme();
  const classes = useStyles();
  const { value, setValue, selectedIndex, setSelectedIndex } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const handleChange = (e, value) => {
    setValue(value);
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  }

  const handleMenuItemClick = (event, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  }

  const handleClose = (event) => {
    setAnchorEl(null);
    setOpenMenu(false);
  }

  const TabData = (activeIndex, path, label) => {
    return { activeIndex, path, label }
  }

  const INIT_DATA = {
    tabs: [
      TabData(0, "/", "Home"),
      TabData(1, "/services", "Services"),
      TabData(2, "/revolution", "The Revolution"),
      TabData(3, "/about", "About Us"),
      TabData(4, "/contact", "Contact Us"),
    ],
    menuOptions: [
      { path: "/services", label: "Services", selectedIndex: 0, activeIndex: 1 },
      { path: "/customsoftware", label: "Custom Software Development", selectedIndex: 1, activeIndex: 1 },
      { path: "/mobileapp", label: "IOS/Android App Development", selectedIndex: 2, activeIndex: 1 },
      { path: "/website", label: "Website Development", selectedIndex: 3, activeIndex: 1 }
    ]
  }

  const TabDatas = INIT_DATA.tabs;
  const menuOptions = INIT_DATA.menuOptions;

  //when value (index for tab in header) change or change url path
  useEffect(
    () => {

      //SetSelected 
      [...TabDatas, ...menuOptions].forEach(
        e => {

          if (value !== e.activeIndex && window.location.pathname === e.path) {
            setValue(e.activeIndex);
            if (e.selectedIndex && e.selectedIndex !== selectedIndex) {
              setSelectedIndex(e.selectedIndex);
            }
            return;
          }

          if (window.location.pathname === "/estimate") {
            setValue(5);
          }
        }
      );

    }, [value, TabDatas, menuOptions, selectedIndex]
  );


  const renderTabs = () => {
    return (
      <Tabs
        className={classes.tabsContainer}
        value={value} onChange={handleChange}
        indicatorColor="primary">


        {TabDatas.map(tab => {

          if (tab.label === 'Services') {
            return (
              <Tab key={`${tab.index}`} className={classes.tab} label={`${tab.label}`}
                onMouseOver={event => handleClick(event)}
                component={Link} to={tab.path} />

            );
          }

          return (<Tab key={tab.index} className={classes.tab} label={`${tab.label}`
          } component={Link} to={tab.path} />);


        })}

        <Menu
          classes={{ paper: classes.menu }}
          style={{ zIndex: 1302 }}
          anchorEl={anchorEl}
          open={openMenu} onClose={handleClose} MenuListProps={{ onMouseLeave: handleClose }}
          elevation={0} keepMounted>
          {
            menuOptions.map((option, i) => {
              return (<MenuItem key={`${option.label}`} classes={{ root: classes.menuItem }}
                onClick={(e) => { handleMenuItemClick(e, i); setValue(1); }}
                component={Link}
                to={option.path}
                
                selected={selectedIndex === i}>{option.label}</MenuItem>);
            })
          }
        </Menu>
        <Button className={classes.button} variant="contained" color="secondary" component={Link} to="/estimate" onClick={() => setValue(5)}>
          Free Estimate
        </Button>
      </Tabs>
    )
  }

  const Drawer = (<React.Fragment>

    <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} anchor={'right'} classes={{ paper: classes.drawer }}
      open={openDrawer} onOpen={() => setOpenDrawer(true)} onClose={() => { setOpenDrawer(false) }} >
      <div className={classes.toolbarMagrgin} />
      <List disablePadding >
        {
          TabDatas.map(tabData => (
            (<ListItem key={`${tabData.label}`} selected={value === tabData.activeIndex}
              classes={{ selected: classes.drawerItemSelected }} divider button onClick={() => { setOpenDrawer(false); setValue(tabData.activeIndex); }} component={Link} to={tabData.path}>
              <ListItemText className={classes.drawerItem} disableTypography>{tabData.label}</ListItemText>
            </ListItem>)
          ))
        }
        <ListItem key="free-stimate" classes={{ root: classes.drawerItemEstimate }} divider button onClick={() => setOpenDrawer(false)} component={Link} to="/">
          <ListItemText className={classes.drawerItem} disableTypography>Free Estimate</ListItemText>
        </ListItem>
      </List>
    </SwipeableDrawer>

    <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.drawerIconContainer}>
      <MenuIcon className={classes.drawerIcon} />
    </IconButton>
  </React.Fragment>);



  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters>
            <Button className={classes.logoContainer} component={Link} to="/" ><img className={classes.logo} alt="company logo" src={logo} /></Button>
            {
              matches ? Drawer : renderTabs()
            }
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMagrgin} />
    </React.Fragment>
  );
}

export default Header;