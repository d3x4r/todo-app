import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../../actions';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const mapDispatchToProps = { setFilter };

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const filters = ['all', 'active', 'done'];

const FilterButtons = (props) => {
  const classes = useStyles();
  const [activeElement, setActiveElement] = useState('all');
  const { setFilter } = props;

  const filterOnClick = (filterName) => () => {
    setActiveElement(filterName);
    setFilter(filterName);
  }

  const getFilterColor = (filterName, buttonName) => filterName === buttonName ? 'primary' : 'default';

  const filterButtons = filters.map((filterValue) => {
    return <Button key={filterValue} color={getFilterColor(activeElement, filterValue)} onClick={filterOnClick(filterValue)}>{filterValue}</Button>
  });

  return (
    <div className={classes.root}>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        {filterButtons}
      </ButtonGroup>
    </div>
  );
}

export default connect(undefined, mapDispatchToProps)(FilterButtons);