import React from 'react';

import TodoForm from "./components/TodoComponents/TodoForm"
import TodoList from "./components/TodoComponents/TodoList"
import CompletedList from "./components/TodoComponents/CompletedList"
import Search from "./components/TodoComponents/Search"
import moment from "moment"




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
        completedOn: '',
        isEdit: false
      },
      isShowing: false,
      darkMode: true
    }
  }
  componentDidMount(){
    const completedList = !!localStorage.getItem('completedList') ? JSON.parse(localStorage.getItem('completedList')) : []
    const todoList = !!localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : []
    const isShowing = localStorage.getItem('isShowing') ? JSON.parse(localStorage.getItem('isShowing')) : false
    const darkMode = localStorage.getItem('darkMode') ? JSON.parse(localStorage.getItem('darkMode')) : true
    darkMode && this.toggleDarkMode()
    this.setState({ completedList, todoList, isShowing, darkMode });
  }
  toggleEdit = event=> {
    let id = event.target.getAttribute('name')
    if(id==='form') id=event.target[0].getAttribute('name')
    this.setState(prev => ({
      todoList: prev.todoList.map(
        el =>`${el.id}`===`${id}` 
        ? {
          ...el, 
          isEdit: !el.isEdit,
        } 
        : el
      )
    }))
    
  }

  toggleDarkMode =()=>{
    const body = document.querySelector('body')
    const app = document.querySelector('.app-container')
    const items = document.querySelector('.items-container')
    const textBox = document.querySelectorAll("input[type='text']")
    textBox.forEach(box=> box.classList.toggle('dark-mode-text'))
    items.classList.toggle('dark-mode-list')
    body.classList.toggle('dark-mode')
    app.classList.toggle('dark-mode')
    this.setState({
      darkMode: !this.state.darkMode
    }, ()=>localStorage.setItem('darkMode', JSON.stringify(this.state.darkMode)))
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
  handleChange = event => {
    const {name, value} = event.target
    if(name==='task'){
      this.setState({
        listItem: {
          [name]: value
        }
      })
    }
    else if(name==='search'){
      this.setState({
        [name]: value
      })
    } 
    else {
      this.setState(prev => ({
        todoList: prev.todoList.map(
          el =>`${el.id}`===`${name}` 
          ? {
            ...el, 
            task: value,
          } 
          : el
        )
      }))
    }
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
        completed: false,
        isEdit: false,
        completedOn: ''
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
          toggleDarkMode={this.toggleDarkMode}
          darkMode={this.state.darkMode}
        />
        <TodoList 
          list={this.state.todoList} 
          handleCheck={this.handleCheck}
          clearCompleted = {this.clearCompleted}
          search={this.state.search}
          handleDelete={this.handleDelete}
          toggleEdit={this.toggleEdit}
          handleChange={this.handleChange}
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
