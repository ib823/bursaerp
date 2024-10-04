import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
    overflowX: 'auto', // Allow horizontal scrolling
  },
  tabs: {
    minWidth: '100%', // Ensure the Tabs stretch across
  },
  tab: {
    [theme.breakpoints.down('sm')]: {
      minWidth: 90, // Set minimum width per tab for mobile devices
    },
    [theme.breakpoints.up('md')]: {
      minWidth: 120, // Wider tabs for desktop
    },
  },
}));

function CategoryNavigation({ categories, activeCategory, onCategoryChange }) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      <Tabs
        value={activeCategory}
        onChange={(_, newValue) => onCategoryChange(newValue)}
        indicatorColor="primary"
        textColor="primary"
        variant={isMobile ? 'scrollable' : 'fullWidth'} // 'scrollable' for mobile, 'fullWidth' for desktop
        scrollButtons="auto" // Adds scroll buttons on mobile
        className={classes.tabs}
        aria-label="Category Navigation"
      >
        {categories.map((category) => (
          <Tab
            key={category}
            label={category}
            value={category}
            className={classes.tab}
          />
        ))}
      </Tabs>
    </div>
  );
}

export default CategoryNavigation;
