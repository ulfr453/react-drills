import React, {Component} from 'react';
import logo from "./logo.svg";
import "./App.css";
import ToDo from './Component/ToDo'

class App extends Component {
  constructor(){
    super();
    this.state= {
      list: [],
      input: ''

    };
  

  this.handleTask = this.handleTask.bind(this);
}

  handleInputChange(value){
    this.setState({ input: value })
  }


  handleTask(){
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    })
  }
  



  render(){
    let list = this.state.list.map((element, index)=> {
      return < ToDo key={indez} task={element} />
    })
  
    return (
    <div className="App">
     <h1>My to-do list:</h1>

<div>
  <input
    value={this.state.input}
    placeholder="Enter new task"
    onChange={e => this.handleInputChange(e.target.value)}
  />

  <button onClick={this.handleTask}>Add</button>
</div>

<br />

{list}
    </div>
  );
}
}
export default App;
