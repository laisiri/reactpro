import React from 'react';
import ReactDOM from 'react-dom';
import FuncCompo from './component/FuncCompo'
import ClassCompo from './component/ClassCompo'
import Clock from './component/Clock'
import Class2Compo from './component/Class_2Compo'
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
            <div className='index-container'>

                < FuncCompo />
                < ClassCompo />
                < Clock />
                <Class2Compo />
                
            
            </div>
            );
    }
}

ReactDOM.render(<FirstComponent />,document.getElementById("root"))