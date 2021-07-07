import React, {Component} from 'react'
import styles from './Blocks.module.css'

class Advertisement extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className={styles.adLevel}></div>
    }
}
export default Advertisement