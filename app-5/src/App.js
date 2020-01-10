import React, {Component} from 'react';
import IMG from './Components/IMG'

class App extends Component {
  constructor(){
    super();
    this.state= {
      src: 'https://via.placeholder.com/150'
      
    }
  }
  render(){
  return (
    <div className="App">
      <IMG src= {this.state.src} />
    </div>
  );
}
}

export default App;
