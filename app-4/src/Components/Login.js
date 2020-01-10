import React, {Component} from 'react'

class Login extends Component{
    constructor(){
        super();
        this.state = {
            userName: '', 
            password: ''
        }
          
    }

    handleUserName(val){
        this.setState({userName: val})

    }

    handlePassword(val){
        this.setState({password: val})

    }

    handleLogin(){
        alert(`Username: ${this.state.userName} Password: ${this.state.password}`)

    }



    render(){
        return(
            <div>
                <input onChange= {(e) => {this.handleUserName(e.target.value)}}></input>
                <input onChange= {(e) => {this.handlePassword(e.target.value)}}></input>
                <button onClick= {() => {this.handleLogin()}}>Login</button>
            </div>
        )
    }
}

export default Login;