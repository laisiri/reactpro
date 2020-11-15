import React from 'react';
import ReactDOM from 'react-dom';
import FormTwo from "./component/form-2";
import FormOne from "./component/form-1";
import './index.css';
class FirstComponent extends React.Component{
    //How control input with state
    constructor(props) {
        super();
        //1.assign state input
        this.state={
            input:""
        }
        //2.bind function to this
        this.handleChange = this.handleChange.bind(this);

    }

    //creat function for up to date this.state.input
    handleChange(event) {
    this.setState({
        input: event.target.value
    })
    }

    render() {
        const indexStyle = {
            
            color:"#558000",
            fontSize:"30px",
            fontFamily:"Georgia",
            backgroundColor:"#d5ff80"
        }
        

        return (
            <div>
                <h1 style={indexStyle}>Hello React!</h1>

                <FormOne input={this.state.input} handleChange={this.handleChange}/> 

                <FormTwo name="Mee" />
            
            </div>
            );
    }
}

ReactDOM.render(<FirstComponent />,document.getElementById("root"))