import React from 'react';
import { Card, CardContent, Typography, Chip, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    border: `2px dashed ${theme.palette.primary.main}`,
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: theme.shadows[4],
    },
  },
  content: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  icon: {
    fontSize: '2.5rem',
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  title: {
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  description: {
    marginBottom: theme.spacing(2),
  },
  chip: {
    alignSelf: 'flex-start',
    marginBottom: theme.spacing(2),
  },
  benefitsList: {
    padding: 0,
  },
  benefitItem: {
    paddingLeft: 0,
  },
  benefitIcon: {
    minWidth: 'auto',
    marginRight: theme.spacing(1),
    color: theme.palette.success.main,
  },
}));

function ToolCard({ tool }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <div className={classes.icon}>{tool.icon}</div>
        <Typography variant="h6" className={classes.title}>
          {tool.title}
        </Typography>
        <Chip label="Optional Tool" color="primary" variant="outlined" className={classes.chip} />
        <Typography variant="body2" className={classes.description}>
          {tool.description}
        </Typography>
        <List className={classes.benefitsList}>
          {tool.benefits.map((benefit, index) => (
            <ListItem key={index} className={classes.benefitItem}>
              <ListItemIcon className={classes.benefitIcon}>
                <CheckCircleOutlineIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={benefit} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default ToolCard;
