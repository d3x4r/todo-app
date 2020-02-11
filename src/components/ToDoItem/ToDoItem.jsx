import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DoneIcon from '@material-ui/icons/Done';
import ActiveIcon from '@material-ui/icons/FitnessCenter'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles(theme => ({
  root: {
    '& > svg': {
      margin: '50px',
    },
  },
  icon: {
    minWidth: 'auto',
    marginRight: theme.spacing(2),
  },
  text: {
    cursor: 'pointer',
    '&:hover': {
      transition: 'all 0.3s',
      paddingLeft: '10px',
    },
    transition: 'all 0.3s',
    '&:active': {
      opacity: 0.7,
    },
  }
}));

const ToDoItem = (props) => {
  const { text, done, onTaskDelete, id, onTaskStateToggle } = props;
  const classes = useStyles();

  const renderIcon = () => {
    return done ? <DoneIcon /> : <ActiveIcon style={{ color: green[500] }} /> ;
  };

  const renderText = () => {
    return done ? <ListItemText
                    className={classes.text}
                    onClick={onTaskStateToggle(id)}
                    style={{ color: 'gray' }}
                    >
                    <s>{text}</s>
                  </ListItemText>
                  : 
                  <ListItemText
                    className={classes.text}
                    onClick={onTaskStateToggle(id)}
                    >
                    {text}
                  </ListItemText>;
  };
  
  return (
    <Slide in={true} mountOnEnter unmountOnExit>
      <ListItem className={classes.root}>
        <ListItemIcon className={classes.icon}>
          {renderIcon()}
        </ListItemIcon>
        {renderText()}
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={onTaskDelete(id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Slide>
  );
}

export default ToDoItem;