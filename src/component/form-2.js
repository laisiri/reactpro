import React from 'react';

 
function FormTwo(props) {
     let ageCal = () => {

        const yearsPatt = /\d{4}/g; 
        const birthYear = document.getElementById("birthDate").value.match(yearsPatt);
        const result = new Date().getFullYear() - birthYear;
        document.getElementById("Age").innerHTML = result;

     }
     
        
    return (
        <div>
            <label>Birth Date:</label>
            <input id="birthDate" type='date' />
            <button onClick={ageCal} value="click">click</button>
            <p className='items'>Age:</p>
            <p id="Age"></p>
            
        
        </div>
    )
}


export default FormTwo