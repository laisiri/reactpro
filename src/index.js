import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date:new Date()};
   
  }
  
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick(); 
    },1000) 
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () =>  this.setState({date: new Date()})
  
  render() {
    
    return (
      <div>
        <h1>Hello React!</h1>
        <p>It's time {this.state.date.toLocaleTimeString()}.</p>
        <button type = 'button' 
                onClick={this.componentWillUnmount.bind(this)}>stop timer</button>
      </div>

    )
  }
}
ReactDOM.render(<Clock />, document.getElementById('root')
);

