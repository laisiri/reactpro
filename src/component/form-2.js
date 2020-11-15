import React from 'react';

 
function FormTwo(props) {
     let c = () => {
         
        document.getElementById('my').innerHTML = 
        document.getElementById("birthDate").value;

     }
     
        
    return (
        <div>
            <label>Birth Date:</label>
            <input id="birthDate" type='date' />
            <button onClick={c} value="click">click</button>
            <p id="my"></p>
            <p>myname: {props.name}</p>
        
        </div>
    )
}


export default FormTwo