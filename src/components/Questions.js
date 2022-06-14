/* 
1. What is unidirectional data flow in React?
When you update a value in state it is then reflected DOM but beforE you do that the DOM is not updating the state.

2. What is the difference between props and state?
State is when a component defines data locally within itself and props is when that same data gets passed down to another 
component. State can be changed and manipulated whereas props cannot

3. What does it mean to lift state up?
Different components can subscribe to the same state. These components can be put together as siblings inside another
components that "lifts" on top of them. That way they're the same children of the same parent

4. What's the difference between a controlled component and an uncontrolled component?
An uncontrolled component is one where you do not bind a state. A controlled component is bound to data. To get a value out of an uncontrolled component
you can use refs and basic js. A ref is essentially the escape patch you can attach to the underlying input. Ex.: ref={inputRef} to get value: 
const val = inputRef.current.value

5. What are refs in React?
Allows you to manipulate and interact with the underlying DOM node by referencing the data. It's mainly used when you want to set a focus to an input.

6. What are keys and why are they inportant when trying to render lists in React?
A way for React to identify each individual item with an array. 

7. What is context?
Context is a mechanism that allows us to pass data from one component down to another compoonent. It's similar to props but a key difference is that
props only goes down to the next component parent -> child. Context can go as many commponents deep within a tree as it wants to.

8. Build a counter with the number 0 on the right along with a button. When you press the button the counter increments

import * as React from "react";
import './App.css';

const {useState} = React;

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>
        {counter}
      </p>
      <button onClick={() =>setCounter(counter + 1)}>Increase Counter</button>
    </div>
  );
}

export default App;



9. Display JSON data from an API

import * as React from "react";
import axios from "axios";
import './App.css';

const {useEffect, useState} = React;

const fetchRandomData = () => {
  return axios.get('https://randomuser.me/api')
  .then(({data}) => {
    console.log(data);
    return JSON.stringify(data);
  })
  .catch(err => {
    console.error(err)
  })
}

export default function App() {
  const [randomUserDataJSON, setRandomUserDataJSON] = useState('');

  useEffect(() => {
      fetchRandomData().then(randomData => {
        setRandomUserDataJSON(randomData || 'No user data foound');
      });
      
  }, [])
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <p>{randomUserDataJSON}</p>
    </div>
  );
}


10. Display actual attributes from the API (like the pictures, name, etc. )








*/