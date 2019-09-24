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
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(e) {
    e.preventDefault()
    try {
      if(this.state.listItem.task){
        await this.setState(prev => ({
          ...prev,
          todoList: 
          [...prev.todoList, {
            ...prev.listItem,
            id: prev.idCreator
          }],
          idCreator: prev.idCreator+1
        }))
      }
    }
    catch (err) {
      console.log(err)
    }    
    this.clearForm()
    
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

  render() {
    return (
      <div>
        <TodoForm 
          item={this.state.listItem} 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}
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
