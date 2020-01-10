import React, {Component} from 'react'

class IMG extends Component{
    constructor(){
        super();
        this.state= {}
    }

    render(){
        return(
            <div>
                <img src= {this.props.src}  />
            </div>
        )
    }
    
}

export default IMG