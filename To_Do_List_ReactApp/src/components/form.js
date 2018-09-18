import React, { Component} from 'react'


export default class Form extends Component{

  render() {
    return (
      <form onSubmit={(event) => this.props.handleSubmit(event)}>
        <input
          onChange={(event) => this.props.handleChange(event)}
          value={this.props.inputValue}
         />
         <button
            type="submit"
            className="btn btn-primary"
          >
            ADD
          </button>
      </form>

    );
  }
}
