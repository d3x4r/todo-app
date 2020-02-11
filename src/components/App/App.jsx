import React, { Component } from 'react';

import { Container } from '@material-ui/core';
import FilterButtons from '../FilterButtons';
import Header from '../Header';
import ToDoList from '../ToDoList';
import AddTaskForm from '../AddTaskForm';
import uniqueId from 'lodash.uniqueid';
import 'typeface-roboto';
import './App.css';

const createTask = (text) => ({
  text,
  id: uniqueId(),
  done: false,
});

class App extends Component {
  state = {
    toDoList: [
      { text: 'first task', id: uniqueId(), done: true },
      { text: 'second task', id: uniqueId(), done: false },
      { text: 'third task', id: uniqueId(), done: false },
    ],
    currentFilter: 'all',
    searchValue: '',
  };

  onTaskAdd = (taskText) => {
    const newTask = createTask(taskText);
    this.setState((state) => {
      const { toDoList } = state;
      return { toDoList: [ newTask, ...toDoList ]};
    });
  };

  onTaskDelete = (targetId) => () => {
    console.log(targetId);
    this.setState((state) => {
      const { toDoList } = state;
      return ({
        toDoList: toDoList.filter(( { id }) => id !== targetId)
        }
      );
    });
  };

  onTaskStateToggle = (targetId) => () => {
    this.setState(({ toDoList }) => {
      const updatedState = toDoList.map((task) => {
        const { id } = task;
  
        if (id !== targetId) return task;

        const { done } = task;
        return ({
          ...task,
          done: !done,
        });
      });

      return ({
        toDoList: updatedState,
      });
    });
  }

  onFilterChange = (filterName) => {
    this.setState((state) => {
      return ({
        currentFilter: filterName,
      });
    });
  }

  getFilteredTasks = () => {
    const { toDoList, currentFilter } = this.state; 
    switch(currentFilter) {
      case('active'):
        return toDoList.filter(({ done }) => done === false);
      case('done'):
        return toDoList.filter(({ done }) => done === true);
      default:
        return toDoList;
    }
  }

  onSearchInput = ({ target: { value }}) => {
    this.setState((state) => ({ searchValue: value.toLocaleLowerCase() }));
  }

  getResultOfData = () => {
    const { currentFilter, searchValue } = this.state;
    const filteredTasks = this.getFilteredTasks(currentFilter);
    if (searchValue === '') {
      return filteredTasks;
    }
    return filteredTasks.filter(({ text }) => text.toLocaleLowerCase().includes(searchValue) );
  }

  renderContent = (tasks) => {
    return (
      <>
        <FilterButtons onFilterChange={this.onFilterChange} />
        <ToDoList todos={tasks} onTaskDelete={this.onTaskDelete} onTaskStateToggle={this.onTaskStateToggle} />
      </>
    );
  }

  render () {
    const { toDoList } = this.state;
    const filteredTasks = this.getResultOfData();

    return (
      <Container maxWidth="sm">
          <Header onSearchInput={this.onSearchInput} />
          {toDoList.length > 0 && this.renderContent(filteredTasks)}
          <AddTaskForm onTaskAdd={this.onTaskAdd} />
      </Container>
    );
  }
};

export default App;