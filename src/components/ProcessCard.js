import React from 'react';
import { Card, CardContent, Typography, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: theme.shadows[4],
    },
  },
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
  },
  topSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  icon: {
    fontSize: '2.5rem',
    marginBottom: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(1),
  },
  description: {
    flexGrow: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical',
  },
  chipContainer: {
    marginTop: theme.spacing(2),
  },
  chip: {
    fontWeight: 'bold',
    width: '50%', // Make chip full width
    justifyContent: 'center',
  },
}));

function ProcessCard({ process, onSelect, maxPainPoints }) {
  const classes = useStyles();
  const painPointCount = process.painPoints.length;

  const getPainPointColor = (count) => {
    if (count === 0) return '#4CAF50';
    if (count <= 2) return '#FFC107';
    return '#F44336';
  };

  const getPainPointLabel = (count) => {
    if (count === 0) return 'No Issues';
    if (count === 1) return '1 Pain Point';
    return `${count} Pain Points`;
  };

  return (
    <Card className={classes.card} onClick={() => onSelect(process)}>
      <CardContent className={classes.content}>
        <div className={classes.topSection}>
          <div className={classes.icon}>{process.icon}</div>
          <Typography variant="h6" className={classes.title}>
            {process.title}
          </Typography>
          <Typography variant="body2" className={classes.description}>
            {process.description}
          </Typography>
        </div>
        <div className={classes.chipContainer}>
          <Chip
            label={getPainPointLabel(painPointCount)}
            className={classes.chip}
            style={{ 
              backgroundColor: getPainPointColor(painPointCount), 
              color: 'white',
              width: `${Math.max(100, maxPainPoints * 30)}px` // Adjust width based on max pain points
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default ProcessCard;