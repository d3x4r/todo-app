import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container } from '@material-ui/core';
import FilterButtons from '../FilterButtons';
import Header from '../Header';
import ToDoList from '../ToDoList';
import AddTaskForm from '../AddTaskForm';
import 'typeface-roboto';
import './App.css';

const mapStateToProps = (state) => {
  const { toDoList } = state;
  return { toDoList };
}; 

class App extends Component {
  renderTasksWithFilters = () => {
    return (
      <>
        <FilterButtons />
        <ToDoList />
      </>
    );
  }

  render () {
    const { toDoList } = this.props;

    return (
      <Container maxWidth="sm">
          <Header onSearchInput={this.onSearchInput} />
          {toDoList.length > 0 && this.renderTasksWithFilters()}
          <AddTaskForm />
      </Container>
    );
  }
};

export default connect(mapStateToProps)(App);