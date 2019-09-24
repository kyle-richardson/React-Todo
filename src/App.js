import React from 'react';

import TodoForm from "./components/TodoComponents/TodoForm"
import TodoList from "./components/TodoComponents/TodoList"

import "./components/TodoComponents/Todo.css"


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todoList: [],
      listItem: {
        task: '',
        id: '',
        completed: false
      },
      idCreator: 0
    }
  }

  handleSubmit= e => {
    e.preventDefault()
    if(this.state.listItem.task){
      this.setState({
        ...this.state,
        todoList: 
        [...this.state.todoList, {
          ...this.state.listItem,
          id: this.state.idCreator
        }],
        idCreator: this.state.idCreator+1
      })
    }
    // this.clearForm()
    
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      listItem: {
        ...this.state.listItem,
        [name]: value
      }
    })
  }

  handleCheck = event => {
    const { value} = event.target
    this.setState(prev => ({
      todoList: prev.todoList.map(
        el =>`${el.id}`===`${value}` ? {...el, completed: !el.completed} : el
      )
    }))
  }

  clearForm = () => {
    this.setState({
      ...this.state,
      listItem: {
        task: '',
        id: '',
        completed: false
      },
    })
  }

  clearCompleted = ()=> {
    const newList = this.state.todoList.filter(ele => {
      return !ele.completed
    })
    this.setState(prev => ({
      ...prev,
      todoList: newList
    }))
  }


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
          item={this.state.listItem} 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}
          clearForm={this.clearForm}
        />
        <TodoList 
          list={this.state.todoList} 
          handleCheck={this.handleCheck}
          clearCompleted = {this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
