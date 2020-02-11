import { combineReducers } from 'redux';
import uniqueId from 'lodash.uniqueid';

const toDoList = (state = [], action) => {
  switch (action.type) {
    case('TASK_ADD'): {
      const { task } = action.payload;
      const newTask = {
        text: task,
        id: uniqueId(),
        done: false,
      };
      return [newTask, ...state];
    }

    case ('TASK_REMOVE'): {
      const { id } = action.payload;
      return state.filter((task) => task.id !== id);
    }

    case ('TASK_TOGGLE_STATE'): {
      const { id } = action.payload;
      return state.map((task) => {

        if (task.id !== id) return task;

        const { done } = task;
        return ({
          ...task,
          done: !done,
        });
      });
    }

    default: {
      return state;
    }
  }
};

const currentFilter = (state = '', action) => {
  switch (action.type) {
    case('SET_FILTER'): {
      const { filterName } = action.payload;
      return filterName;
    }

    default: {
      return state;
    }
  }
};

const searchValue = (state = '', action) => {
  switch (action.type) {
    case('SET_SEARCH'): {
      const { value } = action.payload;
      return value.toLowerCase();
    }

    default: {
      return state;
    }
  }
};

export default combineReducers({
  toDoList,
  currentFilter,
  searchValue
});