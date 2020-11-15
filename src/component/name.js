import React from 'react'
//import ReactDOM from 'react-dom'

function year(birthYear) {
    const date = new Date();
    return date.getFullYear() - birthYear;
}

function Name (props) {
//const date = new Date();
return (
    <>
        <h2> {props.firstName}  {props.lastName}</h2>
        <h3> Birth year{props.birthYear} age: {year(props.birthYear)}</h3>
    </>
)


}

export default Name