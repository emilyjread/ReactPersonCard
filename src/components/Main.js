import React, {Component} from 'react'
import styles from './Blocks.module.css'

class Main extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className={styles.mainLevel}>
            {this.props.children}
        </div>
    }
}
export default Main