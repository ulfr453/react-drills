import React, {Component} from 'react'
import Login from './Components/Login'

class App extends Component {
  constructor(){
    super();
    this.state = {
      userName: '', 
      password: ''}
    
  }

  


  render(){
    return (
      <div>
        <Login password= {this.state.password} userName= {this.state.userName} />
      
      </div>
    )
  }

}

export default App
