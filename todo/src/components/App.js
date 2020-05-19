import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import List from './List';

class App extends Component {

  state = {
    title:'',
    content: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({title:'', content: ''})
  }
  render() {
    return (
      <div className="ui container">
        <form className="ui form">
          <input type="text" id="title" value={this.state.title} placeholder="title" onChange={this.handleChange}/>
          <br/>
          <input type="text" id="content" value={this.state.content} placeholder="content" onChange={this.handleChange}/>
          <br/>
          <button  className="ui button" type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
        <List />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {item: state.data.item }
}
export default connect(mapStateToProps, { addTodo })(App);

