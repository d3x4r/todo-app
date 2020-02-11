export const taskAdd = (task) => ({
  type: 'TASK_ADD',
  payload: {
    task
  },
});

export const taskRemove = (id) => ({
  type: 'TASK_REMOVE',
  payload: {
    id
  }
});

export const taskToggleState = (id) => ({
  type: 'TASK_TOGGLE_STATE',
  payload: {
    id
  }
});

export const setFilter = (filterName) => ({
  type: 'SET_FILTER',
  payload: {
    filterName
  }
});


export const setSearchValue = (value) => ({
  type: 'SET_SEARCH',
  payload: {
    value
  }
});