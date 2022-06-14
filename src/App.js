// Fetch the API and display as a string in react
//https://randomuser.me/api
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


