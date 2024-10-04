import React from 'react';
import { Card, CardContent, Typography, Chip, List, ListItem, ListItemIcon, ListItemText, Box } from '@material-ui/core';
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
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  icon: {
    fontSize: '2.5rem',
    color: theme.palette.primary.main,
  },
  logo: {
    height: '30px',
    objectFit: 'contain',
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

  // Determine if the "Recommended" chip should be displayed based on the tool's category or ID
  const showRecommendedChip = ['Enablement', 'Analytics'].includes(tool.category) || tool.id === 'abeam-einvoicing';

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Box className={classes.header}>
          <div className={classes.icon}>{tool.icon}</div>
          <img src={tool.logo} alt={`${tool.provider} logo`} className={classes.logo} />
        </Box>
        <Typography variant="h6" className={classes.title}>
          {tool.title}
        </Typography>

        {/* Conditionally render the "Recommended" chip based on category or specific tool ID */}
        {showRecommendedChip && (
          <Chip label="Recommended" color="primary" variant="outlined" className={classes.chip} />
        )}

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
