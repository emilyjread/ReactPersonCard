import React, {Component} from 'react'
import styles from './Blocks.module.css'

class Navigation extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className={styles.navLevel}></div>
    }
}
export default Navigation