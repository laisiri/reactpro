import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name},you are {props.age} years old</p>
    </div>
  )
}

const App = () => {

  const name='Peter';
  const age=20;

  
  return (
    <div>
      <h1>Greeting</h1>
      < Hello name='Geoge' age={26+9}/>
      < Hello name={name} age={age}/>
      
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root')
);

