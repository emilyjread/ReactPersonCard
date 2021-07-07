import React, {Component} from 'react'
import styles from './Blocks.module.css'

class Blocks extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className={styles.appLevel}>
            {this.props.children}
        </div>
    }
}
export default Blocks