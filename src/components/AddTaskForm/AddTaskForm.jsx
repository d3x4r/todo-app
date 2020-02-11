import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  search: {
    flexGrow: '1',
  }

}));

const AddTaskForm = (props) => {
  const { onTaskAdd } = props;
  const [currentText, setTaskText] = useState('');
  const [valid, setValidState] = useState(false);
  const classes = useStyles();

  const onTextInput = ({ target: { value }}) => {
    setTaskText(value);
  }

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    if (currentText === '') {
      setValidState(true);
      return;
    }
    setValidState(false);
    onTaskAdd(currentText);
    setTaskText('');
  }

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={onFormSubmit}>
      <TextField
        onChange={onTextInput}
        className={classes.search}
        id="outlined-basic"
        label={valid ? 'the input must not be empty' : "New task text"}
        variant="outlined"
        value={currentText}
        required
        error={valid}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary">
        Add task
      </Button>
    </form>
  );
};

export default AddTaskForm;