import React from 'react'
//import ReactDOM from 'react-dom'
import styles from './mainStyle.module.css'

function FormOne(props) {
    return (
        <div className={styles.FormOne} >
        <h4 className={styles.ver}>Form Version  {props.ver}</h4>
        <form id='main-input'>

                     <label>Name:</label>
                     {/*input update state.input*/}
                     <input id='inputInMain' onChange={props.handleChange} value={props.input}/>
                     <p>{props.input}</p>
        </form>
<p id="result"></p>
        </div>
    )

}



export default FormOne