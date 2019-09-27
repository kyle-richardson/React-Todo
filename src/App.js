import React from 'react';

import TodoForm from "./components/TodoComponents/TodoForm"
import TodoList from "./components/TodoComponents/TodoList"
import CompletedList from "./components/TodoComponents/CompletedList"
import Search from "./components/TodoComponents/Search"

import "./components/TodoComponents/Todo.css"


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      search: '',
      completedList: [],
      todoList: [],
      listItem: {
        task: '',
        id: '',
        completed: false
      },
      idCreator: 0,
      isShowing: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(e) {
    e.preventDefault()
    try {
      if(this.state.listItem.task){
        await this.setState(prev => ({
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
    name==='task' 
      ? this.setState({
        listItem: {
          [name]: value
        }
      })
      : this.setState({
          [name]: value
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
      listItem: {
        task: '',
        id: '',
        completed: false
      },
    })
  }

  clearCompleted = ()=> {
    const comp = this.state.todoList.filter(ele => {
      return ele.completed
    })
    const newList = this.state.todoList.filter(ele => {
      return !ele.completed
    })
    this.setState(prev => ({
      completedList: prev.completedList.concat(comp),
      todoList: newList
    }))
  }

  toggleIsShowing = () => {
    this.setState(prev => ({
      isShowing: !prev.isShowing
    }))
  }

  render() {
    return (
      <div className="app-container">
        <Search 
          search ={this.state.search}
          handleChange={this.handleChange}
        />
        <TodoList 
          list={this.state.todoList} 
          handleCheck={this.handleCheck}
          clearCompleted = {this.clearCompleted}
          search={this.state.search}
        />
        <TodoForm 
          item={this.state.listItem} 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}
        />
        <CompletedList 
          completedList={this.state.completedList}
          isShowing={this.state.isShowing}
          toggleIsShowing={this.toggleIsShowing}/>
      </div>
    );
  }
}

export default App;
