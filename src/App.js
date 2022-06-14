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
    return (data);
  })
  .catch(err => {
    console.error(err)
  })
}

const getFullUserName = (userInfo) => {
  const {name: {first, last}} = userInfo;
  return `${first} ${last}`;
}

export default function App() {
  const [userInfos, setUserInfos] = useState([]);
  const [randomUserDataJSON, setRandomUserDataJSON] = useState('');

  useEffect(() => {
      fetchRandomData().then(randomData => {
        setRandomUserDataJSON(JSON.stringify(randomData) || 'No user data foound');
        setUserInfos(randomData.results)
      });
      
  }, [])
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {
        userInfos.map((userInfo, idx) => (
          <div>
          <p>{getFullUserName(userInfo)}</p>
          <img src={userInfo.picture.thumbnail}/>
          </div>
        ))
      }
      <p>{randomUserDataJSON}</p>
    </div>
  );
}


