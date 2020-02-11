import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

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
  const { onFilterChange } = props;

  const filterOnClick = (filterName) => () => {
    setActiveElement(filterName);
    onFilterChange(filterName);
  }

  const getFilterColor = (filterName, buttonName) => filterName === buttonName ? 'primary' : 'default';

  const renderFilterButtons = filters.map((filterValue) => {
    return <Button key={filterValue} color={getFilterColor(activeElement, filterValue)} onClick={filterOnClick(filterValue)}>{filterValue}</Button>
  });

  return (
    <div className={classes.root}>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        {renderFilterButtons}
        {/* <Button color={getFilterColor(activeElement, 'all')} onClick={filterOnClick('all')}>all</Button>
        <Button color={getFilterColor(activeElement, 'active')} onClick={filterOnClick('active')}>active</Button>
        <Button color={getFilterColor(activeElement, 'done')} onClick={filterOnClick('done')}>done</Button> */}
      </ButtonGroup>
    </div>
  );
}

export default FilterButtons;