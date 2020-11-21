import React from 'react'

class Clock extends React.Component{
    /*
    this render represent once 
    render() {
        return (
            <div>

                <h1>Class Clock</h1>
                <h4>{this.props.date.toLocaleTimeString()}</h4>

            </div>
        )
    }*/
    constructor(props){
        super(props)
        //assign state.date = new Date()
        this.state = {
            date: new Date(),
            clock: true
        }
        this.timerId = this.timerId.bind(this);
        //this.componentWillUnmount = this.componentWillUnmount.bind(this)
        this.handleClick = this.handleClick.bind(this);
    }
    timerId(){
        setInterval(() => {
            this.trick() 
         }, 1000);

    }
    handleClick(){
        //if clock === true 
        if(this.state.clock) {
            //hide "showClock"Id 
            document.getElementById("showClock").style.display = 'none';
            document.getElementById("clockBtn").innerHTML = "CLOCK";
            //and set clock = fault
            this.setState({
                clock: !true
            })

        }else{
            document.getElementById("showClock").style.display = 'block';
            document.getElementById("clockBtn").innerHTML = "STOP CLOCK";
            this.setState({
                clock: true
            })    
        }
        
    }   
    //creat lifecycle 
    componentDidMount() {
        this.timerId() 
    }
    //stop lifecycle
    
    componentWillUnmount() {
        clearInterval(this.timerId())
    }
    trick() {
        this.setState({
            date: new Date()
        })
    }
    render() {
       
        return (
            <div id ="clock" className='items'>

                
                <h4 id="showClock">{this.state.date.toLocaleTimeString()}</h4>
                <button id='clockBtn' onClick={this.handleClick}>STOP CLOCK</button>
                    

            </div>
        )
}
}
export default Clock