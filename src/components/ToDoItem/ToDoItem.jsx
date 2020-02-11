import React from 'react';
import { connect } from 'react-redux';
import { taskRemove, taskToggleState } from '../../actions';

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

const mapDispatchToProps = { taskRemove, taskToggleState };

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
      transition: 'padding-left 0.3s',
      paddingLeft: '10px',
    },
    transition: 'padding-left 0.3s',
    '&:active': {
      opacity: 0.7,
    },
  }
}));

const renderIcon = (done) => {
  return done ? <DoneIcon /> : <ActiveIcon style={{ color: green[500] }} /> ;
};

const ToDoItem = (props) => {
  const { text, done, id, taskRemove, taskToggleState } = props;
  const classes = useStyles();

  const onTaskDelete = (id) => () => {
    taskRemove(id);
  }

  const onTaskToggleState = (id) => () => {
    taskToggleState(id);
  }

  const renderText = () => {
    return done ? <ListItemText
                    className={classes.text}
                    onClick={onTaskToggleState(id)}
                    style={{ color: 'gray' }}
                    >
                    <s>{text}</s>
                  </ListItemText>
                  : 
                  <ListItemText
                    className={classes.text}
                    onClick={onTaskToggleState(id)}
                    >
                    {text}
                  </ListItemText>;
  };
  
  return (
    <Slide in={true} mountOnEnter>
      <ListItem className={classes.root}>
        <ListItemIcon className={classes.icon}>
          {renderIcon(done)}
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

export default connect(undefined, mapDispatchToProps)(ToDoItem);