import React, { Component } from 'react';
import Form from './form'
import List from './list'
import ListItem from './list_item'
import _ from 'lodash'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      todoCounter:0,
      inputValue:"",
      toDoList: [ ]
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ inputValue:event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();//page won't refresh
    const newTodo = {
      value: this.state.inputValue,
      done: false
    };
    const toDoList = this.state.toDoList;
    toDoList.push(newTodo);
    this.setState({toDoList:toDoList, inputValue:""}); // reset the form
  }

  handleDelete(index){
    //console.log("before ", index);
    var array = [...this.state.toDoList]; // make a separate copy of the array
    array.splice(index, 1); // delete the item with index
    this.setState({ toDoList: array });
    //console.log("after ", this.state.toDoList);

  }

  handleEdit(value, index){
    var array = [...this.state.toDoList]; // make a separate copy of the array
    array[index]={value};
    this.setState({ toDoList: array });
  }

  render() {
    return (
      <div>
        <Form
          handleChange={this.handleChange}
          inputValue={this.state.inputValue}
          handleSubmit={this.handleSubmit}
        />

        <List
          toDoList={this.state.toDoList}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}
