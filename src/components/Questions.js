/* 
1. What is unidirectional data flow in React?
When you update a value in state it is then reflected DOM but before you do that the DOM is not updating the state.

2. What is the difference between props and state?
State is when a component defines data locally within itself and props is when that same data gets passed down to another 
component. State can be changed and manipulated whereas props cannot

3. What does it mean to lift state up?
Different components can subscribe to the same state. These components can be put together as siblings inside another
component that "lifts" on top of them. That way they're the same children of the same parent

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
---------------------------------------------------------------------------------------------------------------------------------------------------------------
8. What's the difference between var, let, and const?
Var declarations are globally scoped (can be declared outside a function) or locally scoped. If you have a condition that changes var in a function it can 
change the var everywhere else which you may not want.
Let is block scoped (lives in {}). A variable declared in a block with let is only available for use within that block. Let can be updated but not re-declared.
Variable declared with the const maintain constant values. Const are also block scoped but cannot be updated or re-declared. 

9. What is React State Management?
It's basically a js data structure. State represent the value of dynamic properties of a React component at a given instance. Redux is a js library
for managing and centralizing application state. It hold all states of an application. Each component can access the stored state w/o sending it from
one component to another. The 3 building parts are actions, store, and reducers. 
Actions - send data from your application to your store
Reducers - specify how the application's state changes in response to actions sent to the store
Store - holds the application state

10. Explain React component Lifecycle.
Mounting (constructor, render, componentDidMount) - done when an instance of a components is being created and inserted into the DOM
Updating (render, componentDidUpdate) - An update can be caused by changes to props or state. Occurs when a component is being re-rendered
Unmounting (componentWillUnmount) - This method is called when a component is being removed from the DOM

11. What is test driven development?
A practice that focuses on creating unit test cases before developing

12. Say that you've got 10 million integer and you need to count how many of each integer exists--would a list, set, or map be most efficient?
A map, more specifically a hash map. Hash maps produce a value which can be used as an index for the key in the hash table which makes indexing faster

13. Following up, what is the time complexity to find a specific integer key-value pair in a map?
O(n)

14. Find anagrams
var isAnagram = function(s, t) {
    if(t.length!==s.length) {
        return false
    }
    let map = {};
    for(let char of s) {
        if(map[char]) map[char]++
        else map[char]=1;
    }
    for (let char of t){
        if(!map[char]) return false;
        else map[char]--;
    }
    return true;
};

Alternative solution

function isAnagram(a,b) {
    if(a.length!==b.length) {
        return false
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2) {
        return true;
    } else {
        return false;
    }
}

15. What's the difference between sql and nosql?
SQL - All data is displayed in tables, rows, columns and data is related to each other via keys. SQL is essentially a relational database (mysql)
NoSQL - Doesn't follow standard sql language and doesn't really rely on relational data. For example mongoDB is a document database which essentially stores everything in
a document with JSON data rather than in a table. It adds a little bit of flexibility. 

16. How to remove duplicates from an array.
let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
})
console.log(uniqueChars);

17. How does an API work?
Application Programming Interface; the messenger that delivers your request to the provider from which you're requesting from and delivers the response back to you. 

18. Build a React countdown timer.

import CountDown from './Countdown';
function App(0) {
    let onTimesup = () => {
        alter('Time's up!'0)
    }
    return (
        <div className="App">
        <header className="App-header">
        <div>
        <CountDown
            onTimesups={onTimesup}
            duration={60}
        />
        </div>
        </header>
       </div>     
    );
}
export default App;

CountDown.js
import React from 'react'
export default class CountDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.duration ? props.duration : 5,
        }
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            let { count } = this.state;
            this.setState({
                count: count - 1
            })
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.count !== this.state.count && this.state.count === 0) {
            clearInterval(this.timer);
            if (this.props.onTimesup) {
                this.props.onTimesup();
            }
        }
    }

    fmtMSS(s) { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s }


    render() {
        let { count } = this.state;
        return (
            <>
                {this.fmtMSS(count)}
            </>
        )
    }
}

8a. Build a counter with the number 0 on the right along with a button. When you press the button the counter increments

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



9a. Display JSON data from an API

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


10a. Display every user name and every user image Assume there may be more than one user in this results
array.

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


11a. Add another button to load more that grabs another user and appends to existing data


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


  







*/