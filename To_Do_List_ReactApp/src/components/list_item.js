import React, { Component } from 'react'

class ListItem extends Component {
  constructor(){
       super();
       this.state = {
          clicked: false,
          isEditing:false,
          newTask:''

       }
       this.renderItem=this.renderItem.bind(this);
       this.renderForm=this.renderForm.bind(this);

   }
  changeStyle(){
    console.log("clicked")
    this.setState({clicked: !this.state.clicked})
  }

  renderItem(){
    return (
      <li className="list-item">
          <span style={{textDecoration: this.state.clicked ? "line-through" : "none"}} onClick={this.changeStyle.bind(this)}>
            {this.props.todo.value}
          </span>
          <button
            className="btn btn-primary"
            onClick={() =>{
              this.setState({isEditing: !this.state.isEditing});
            }
            }
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() =>
              this.props.handleDelete(this.props.index)
            }
          >
            Delete
          </button>
        </li>
    )
  }

  handleUpdatedTask(event) {
    this.setState({newTask:event.target.value})
  }
  renderForm(){
    return(
      <form>
        <input type="text" defaultValue={this.props.todo.value} onChange={event => this.handleUpdatedTask(event)}/>
        <button type="submit"
          onClick={(event) =>{
            event.preventDefault();
            this.props.handleEdit(this.state.newTask, this.props.index);
            this.setState({isEditing: !this.state.isEditing});
          }}
          >
          Submit
        </button>
      </form>
    )

  }

  render(){
    const isEditing = this.state.isEditing;
    return (
      <section>
        {
          isEditing ? this.renderForm() : this.renderItem()
        }
        </section>
      );
  }

}
export default ListItem
