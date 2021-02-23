import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
const container = {
  border: "2px solid rgba(0, 0, 0, .5)",
  borderRadius: '5px',
  width: "50%",
  margin: "15px auto"
}

const button = {
  backgroundColor: 'rgba(0,0,0,.5)',
  padding: '10px 30px',
  borderRadius: '5px',
  border: 0,
  color: '#fff',
  cursor: 'pointer',
  margin: "20px 0"
}
const friends = [
  {
    name: 'Fahim',
    age: 19
  },
  {
    name: 'HrDelwar',
    age: 19
  },
  {
    name: "Amir",
    age: 20
  }
]

function App() {
  const orange = {
    color: 'orange'
  }
  const heading = {
    textTransform: 'capitalize',
    margin: "5rem 0 2rem 0",
    color: "rgba(0,0,0,.7)"
  }
  const person = {
    name: 'Hero alom',
    type: 'funny person'
  }
  return (
    <div className="App" style={{ margin: '0 0 50px 0' }}>
      <header className="App-header">
        <h1 style={orange}>React JSX</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h2 style={{ color: 'cyan' }}>Welcome To React </h2>
      </header>
      <h1 style={heading}>object property use JSX</h1>
      <h3><a href="#">{person.name} </a>is a <a href="#">{person.type}</a>.</h3>
      <button style={button}>Simple button</button>
      <h1 style={heading}>Component! Similar look and similar data</h1>
      <Singer></Singer>
      <Singer></Singer>
      <Singer></Singer>
      <Singer></Singer>
      <h1 style={heading}>Component! Similar look and different data</h1>
      <Person name={person.name} type={person.type + "🤣"} qty="Best funny" btn="Hero ^_^" ></Person>
      <Person name="Dr.Mahfuzur Rahman" type="Singer 🐸" qty="Best " btn="Dr.Litu ಠ_ಠ" ></Person>
      <Person name="Eva Rahman" type="Singer🙄" qty="Kokil konthi" btn="Kokil konthi (•_•)"></Person>

      <h1 style={heading}>static Component! Pass object statically</h1>
      <Friends friends={friends[0]}></Friends>
      <Friends friends={friends[1]}></Friends>
      <Friends friends={friends[2]}></Friends>

      <h1 style={heading}>Dynamic Component! Pass object dynamically</h1>
      {friends.map(friend => <Friends friends={friend}></Friends>)}
      <h1 style={heading}>react State</h1>
      <Counter></Counter>
      <h1 style={heading}>API data useEffect</h1>
      <Users></Users>
    </div>
  );
}


function Singer() {

  return (
    <div className="" style={container} >
      <h2>Dr.Mahfuzur Rahman</h2>
      <p>Best singer of the year</p>
      <button style={button}>Details</button>
    </div>
  );
}

function Person(props) {
  return (
    <div className="" style={container}>
      <h2>{props.name} is a {props.type}</h2>
      <p>{props.qty} singer of the year...🤣</p>
      <button style={button}>More About {props.btn}</button>
    </div>
  );
}


function Friends(props) {
  const { name, age } = props.friends;
  return (
    <div className="" style={container}>
      <h2>Name: {name}💛</h2>
      <p>Age: {age}</p>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(7)
  return (
    <div className="" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button title="decrement" onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
      <h2 style={{ margin: '0 20px', color: 'rgba(0,0,0,.5)' }}>Count: {count < 10 ? '0' + count : count}</h2>
      <button title="increment" onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div className="">
      <h2>Dynamic users</h2>
      {users.map(user =>
        <div style={container}>
          <h3>{user.name}</h3>
          <p><a href={'mailto:'+ user.email}>{user.email}</a></p>
          <p><a  target="_blank" href={"https://www."+user.website}>{user.website}</a></p>
        </div>)}
    </div>
  )
}
export default App;
