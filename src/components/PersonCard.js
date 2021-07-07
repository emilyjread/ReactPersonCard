import React, {Component} from 'react'

class PersonCard extends Component{
    constructor(props){
        super(props)
        this.state={
            age: this.props.age
        }

    }
    increaseAge =()=>{
        this.setState({
            age: this.state.age+1
        }
        )
        console.log(this.state.age)

    }

    render(){
        return <div>
            <h1>{this.props.firstname} {this.props.lastname}</h1>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {this.props.haircolor}</p>
            <button onClick={()=> {this.increaseAge()}}>Birthday Button for {this.props.firstname} {this.props.lastname}</button>
        </div>
    }
}

export default PersonCard