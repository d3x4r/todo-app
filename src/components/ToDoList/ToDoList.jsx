// import React from 'react';

// import ToDoItem from '../ToDoItem';

// const ToDoList = (props) => {
//     const { todos } = props;
//     return (
//         <ul>
//             {todos.map((props) => {
//               const { id, ...data } = props;
//               return <ToDoItem key={id} { ...data } />;
//             })}
//         </ul>
//     );
// };

// export default ToDoList;

import React from 'react';

import ToDoItem from '../ToDoItem';


import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 520,
    backgroundColor: theme.palette.background.paper,
    margin: 'auto',
  },
}));

const ToDoList = (props) => {
  const { todos, onTaskDelete, onTaskStateToggle } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="ul" aria-label="to do list">
      {todos.map((currentTask) => {
          const { id } = currentTask;
          return <ToDoItem key={id} { ...currentTask } onTaskDelete={onTaskDelete} onTaskStateToggle={onTaskStateToggle} />;
        })}
      </List>
    </div>
  );
}

export default ToDoList;