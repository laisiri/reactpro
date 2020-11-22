import React from 'react';
import ReactDOM from 'react-dom';
import FuncCompo from './component/FuncCompo'
import Class2Compo from './component/Class_2Compo'
import Main from './component/main'
import './index.css';
import FoodList from './component/foodList';

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
                < FoodList />
                < Main />
                < Class2Compo />
                
            
            </div>
            );
    }
}

ReactDOM.render(<FirstComponent />,document.getElementById("root"))