import React, {Component} from 'react'
import styles from './Blocks.module.css'

class Subcontent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className={styles.subLevel}></div>
    }
}
export default Subcontent