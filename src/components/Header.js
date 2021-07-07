import React, {Component} from 'react'
import styles from "./Blocks.module.css"

class Header extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className={styles.headerLevel}>
        </div>
    }
}
export default Header