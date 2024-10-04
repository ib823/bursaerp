import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  icon: {
    marginLeft: theme.spacing(1),
    transition: 'transform 0.3s',
  },
  iconExpanded: {
    transform: 'rotate(180deg)',
  },
}));

function KeyImprovements({ category, improvements }) {
  const classes = useStyles();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={classes.root}>
      <motion.div
        className={classes.header}
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Typography variant="h5">Key Improvements for {category}</Typography>
        <ExpandMoreIcon
          className={`${classes.icon} ${isExpanded ? classes.iconExpanded : ''}`}
        />
      </motion.div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <List>
              {improvements.map((improvement, index) => (
                <ListItem key={index}>
                  <ListItemText primary={improvement} />
                </ListItem>
              ))}
            </List>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default KeyImprovements;