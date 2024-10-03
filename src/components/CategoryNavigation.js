import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
  },
}));

function CategoryNavigation({ categories, activeCategory, onCategoryChange }) {
  const classes = useStyles();

  return (
    <Tabs
      value={activeCategory}
      onChange={(_, newValue) => onCategoryChange(newValue)}
      indicatorColor="primary"
      textColor="primary"
      variant="fullWidth"
      className={classes.root}
    >
      {categories.map((category) => (
        <Tab key={category} label={category} value={category} />
      ))}
    </Tabs>
  );
}

export default CategoryNavigation;