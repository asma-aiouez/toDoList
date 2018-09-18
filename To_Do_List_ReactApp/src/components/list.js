import React, { Component } from 'react'
import ListItem from './list_item'
class List extends Component{

  render(){

    return (
      <div>
      {this.props.toDoList.map((todo, index) => {
        return (
            <ListItem
              key={index}
              index={index}
              value={todo.value}
              todo={todo}
              handleDelete={this.props.handleDelete}
              handleEdit={this.props.handleEdit}
            />
        );
      })
      }

      </div>
    );
  }

}

export default List
