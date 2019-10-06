import React from 'react';

import TodoForm from "./components/TodoComponents/TodoForm"
import TodoList from "./components/TodoComponents/TodoList"
import CompletedList from "./components/TodoComponents/CompletedList"
import Search from "./components/TodoComponents/Search"
import moment from "moment"

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
        completed: false,
        completedOn: ''
      },
      isShowing: false
    }
  }

  handleSubmit=(e)=> {
    e.preventDefault()
    try {
      if(this.state.listItem.task){
        this.setState(prev => ({
          todoList: 
          [...prev.todoList, {
            ...prev.listItem,
            id: new Date().getTime()
          }],
        }), ()=> localStorage.setItem('todoList', JSON.stringify(this.state.todoList)))
      }
    }
    catch (err) {
      console.log(err)
    }    
    this.clearForm()
    
    
  }
  componentDidMount(){
    const completedList = !!localStorage.getItem('completedList') ? JSON.parse(localStorage.getItem('completedList')) : []
    const todoList = !!localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : []
    const isShowing = localStorage.getItem('isShowing') ? JSON.parse(localStorage.getItem('isShowing')) : false
    this.setState({ completedList, todoList, isShowing });
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
    const id = event.target.getAttribute('name')
    this.setState(prev => ({
      todoList: prev.todoList.map(
        el =>`${el.id}`===`${id}` 
        ? {
          ...el, 
          completed: !el.completed,
          completedOn: moment().format('lll')
        } 
        : el
      )
    }), ()=> localStorage.setItem('todoList', JSON.stringify(this.state.todoList)))
    
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
    }), ()=>{
      localStorage.setItem('todoList', JSON.stringify(this.state.todoList));
      localStorage.setItem('completedList', JSON.stringify(this.state.completedList));
    })
    

  }

  handleDelete = event => {
    const id = event.target.getAttribute('name')
    const type = event.target.className
    if(type==="delete"){
      const newList = this.state.todoList.filter(ele => `${ele.id}` !==`${id}`)
      this.setState({
        todoList: newList
      }, ()=>localStorage.setItem('todoList', JSON.stringify(this.state.todoList)))
      
    }
    if(type==="comp-delete") {
      const newList = this.state.completedList.filter(ele => `${ele.id}` !==`${id}`)
      this.setState({
        completedList: newList
      }, ()=> localStorage.setItem('completedList', JSON.stringify(this.state.completedList)))
      
    }
  }

  toggleIsShowing = () => {
    this.setState(prev => ({
      isShowing: !prev.isShowing
    }), ()=> localStorage.setItem('isShowing', JSON.stringify(this.state.isShowing)))
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
          handleDelete={this.handleDelete}
        />
        <TodoForm 
          item={this.state.listItem} 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}
        />
        {this.state.completedList.length>0 && 
        <CompletedList
          handleDelete = {this.handleDelete} 
          completedList={this.state.completedList}
          isShowing={this.state.isShowing}
          toggleIsShowing={this.toggleIsShowing}
          search={this.state.search}
        />}
      </div>
    );
  }
}

export default App;
