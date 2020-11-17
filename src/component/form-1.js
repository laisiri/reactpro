import React from 'react'

import styles from './mainStyle.module.css'

function FormOne(props) {

    
        let ageCal = () => {
   
           const yearsPatt = /\d{4}/g; 
           const birthYear = document.getElementById("birthDate").value.match(yearsPatt);
           const result = new Date().getFullYear() - birthYear;
           document.getElementById("Age").innerHTML = result;
   
        }
    return (
        <div className={styles.FormOne} >
        <h4 className={styles.ver}>Form Version  {props.ver}</h4>
        
        <form id='main-input'>

                    

                     {/*input update state.input if you defined with class component you must edit props 
                     to this.props*/}

                     <input type='text' id='inputFirstName' onChange={props.handleChangeFirstName} value={props.firstName}
                     placeholder='Your First Name'/>

                     
                     <input type='text'id='inputLastName' onChange={props.handleChangeLastName} value={props.lastName}
                     placeholder='Your Last Name'/>

                     <label>Birth Date:</label>
                     <input id="birthDate" type='date' />

                     <button onClick={ageCal} value="click">click</button>
                     <p className='items'>Age:</p>
                     <p id="Age"></p>

        </form>
<p id="result"></p>
        </div>
    )

}



export default FormOne