import React from 'react';
import ReactDOM from 'react-dom';
import FormEvent from "./component/event-1";
import FormTwo from "./component/event-2";
import './index.css';

class FirstComponent extends React.Component{
    
    constructor(props) {
        super();
        
        this.state={
            firstName:"",
            lastName:""
        }
        
    }

    

    render() {
        
        

        return (
            <div>
                <h1>Hello React</h1>
                < FormEvent />
                < FormTwo />
                
                
            
            </div>
            );
    }
}

ReactDOM.render(<FirstComponent />,document.getElementById("root"))