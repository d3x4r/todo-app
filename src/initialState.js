import uniqueId from 'lodash.uniqueid';

export default {
  toDoList: [
    { text: 'first task', id: uniqueId(), done: true },
    { text: 'second task', id: uniqueId(), done: false },
    { text: 'third task', id: uniqueId(), done: false },
  ],
  currentFilter: 'all',
  searchValue: '',
};