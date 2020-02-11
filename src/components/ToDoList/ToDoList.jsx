import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ToDoItem from '../ToDoItem';

const getFilteredTasks = (tasksList, filterName) => {
  switch(filterName) {
    case('active'):
      return tasksList.filter(({ done }) => done === false);
    case('done'):
      return tasksList.filter(({ done }) => done === true);
    default:
      return tasksList;
  }
}

const mapStateToProps = (state) => {
  const { currentFilter, searchValue, toDoList } = state;
  const filteredTasks = getFilteredTasks(toDoList, currentFilter);

  if (!searchValue) {
    return ({
      toDoList: filteredTasks
    });
  }

  return ({
    toDoList: filteredTasks.filter(({ text }) => text.toLocaleLowerCase().includes(searchValue) )
  });
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 520,
    backgroundColor: theme.palette.background.paper,
    margin: 'auto',
  },
}));

const ToDoList = (props) => {
  const { toDoList } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="ul" aria-label="to do list">
      {toDoList.map((currentTask) => {
          const { id } = currentTask;
          return <ToDoItem key={id} { ...currentTask } />;
        })}
      </List>
    </div>
  );
}

export default connect(mapStateToProps)(ToDoList);