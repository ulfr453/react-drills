import React, {Component} from 'react'
import ToDo from './'

class App extends Component{
  constructor(){
    super();
    this.state= {
      message: ''

    }
  }

  handleChange(value){
    this.setState({message: value})
  }

  render(){
    return(
      <div>
          <input onChange= {(e)=> this.handleChange(e.target.value)}></input>
          <p>{this.state.message}</p>


      </div>
    )
  }




}

export default App