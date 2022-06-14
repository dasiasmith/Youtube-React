// Fetch the API and display as a string in react
//https://randomuser.me/api
import * as React from "react";
import axios from "axios";
import './App.css';

const {useEffect, useState} = React;

const fetchRandomData = (pageNumber) => {
  return axios.get(`https://randomuser.me/api?page=${pageNumber}`)
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
  const [nextPageNumber, setNextPageNumber] = useState(1);
  const [userInfos, setUserInfos] = useState([]);

  const fetchNextUser = () => {
    fetchRandomData(nextPageNumber).then(randomData => {
      if (randomData === undefined) return;

      const newUserInfos = [
        ...userInfos,
        ...randomData.results,
      ]
      setUserInfos(newUserInfos)
      setNextPageNumber(randomData.info.page + 1)
    });
  }

  useEffect(() => {
      fetchNextUser();      
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => {fetchNextUser()}}>Fetch Next User</button>
      {
        userInfos.map((userInfo, idx) => (
          <div>
          <p>{getFullUserName(userInfo)}</p>
          <img src={userInfo.picture.thumbnail} alt='user avi'/>
          </div>
        ))
      }
    </div>
  );
}