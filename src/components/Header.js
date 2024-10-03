import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import abeamLogo from '../assets/images/abeam-logo.png';
import bursaLogo from '../assets/images/bursa-logo.png';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.paper,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80, // Set a fixed height for the header
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      height: 120, // Increase height for mobile
      justifyContent: 'center',
    },
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end', // Align logos to the right on desktop
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center', // Center logos on mobile
    },
  },
  logo: {
    height: 50,
    margin: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      height: 40,
    },
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  actions: {
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      top: theme.spacing(1),
      right: theme.spacing(1),
    },
  },
}));

function Header({ darkMode, setDarkMode }) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {!isMobile && (
          <Typography variant="h6" className={classes.title}>
            BURSA Malaysia ERP Transformation
          </Typography>
        )}
        <div className={classes.logoContainer}>
          <img src={bursaLogo} alt="Bursa Logo" className={classes.logo} />
          <img src={abeamLogo} alt="ABeam Logo" className={classes.logo} />
        </div>
        <div className={classes.actions}>
          <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;