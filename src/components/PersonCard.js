import React, {Component} from 'react'

class PersonCard extends Component{
    constructor(props){
        super(props)


    }

    render(){
        return <div>
            <h1>{this.props.firstname} {this.props.lastname}</h1>
            <p>Age: {this.props.age}</p>
            <p>Hari Color: {this.props.haircolor}</p>
        </div>
    }
}

export default PersonCard