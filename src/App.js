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
    id: 1,
    name: 'Fahim',
    age: 19
  },
  {
    id: 2,
    name: 'HrDelwar',
    age: 19
  },
  {
    id: 3,
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
      <h1 style={heading}>API data! Random user</h1>
      <RandomUser></RandomUser>
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
      {friends.map(friend => <Friends friends={friend} key={friend.id}></Friends>)}
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

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div className="">
      <h2>Dynamic users</h2>
      {users.map(user => <DisplayUsers user={user} key={user.id}></DisplayUsers>)}
    </div>
  )
}

const DisplayUsers = props => {
  return (
    <div style={container}>
      <h3>{props.user.name}</h3>
      <p><a href={'mailto:' + props.user.email}>{props.user.email}</a></p>
      <p><a target="_blank" href={"https://www." + props.user.website}>{props.user.website}</a></p>
    </div>
  )
}

const RandomUser = () => {
  const [randomUser, setRandomUser] = useState({ name: '', email: '', location: '', gender: '', picture: '', phone: '', dob: '' });
  let { gender, email, location, name, picture, phone, dob } = randomUser;
  useEffect(async () => {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    setRandomUser(data.results[0]);
  }, [])
  if(name){
    return (
      <div className="" style={container}>
        <div className=""><img style={{ borderRadius: '50%', marginTop: '20px' }} src={picture.large} alt="" /></div>
        <h2 style={{marginBottom:'0'}}>{name.title} {name.first} {name.last} </h2>
        <p>Gender: <small style={{color:'#0009',fontSize:'16px',textTransform:'capitalize'}}>{gender}</small></p>
        <p>Age: <small style={{color:'#0009',fontSize:'16px'}}>{dob.age}</small></p>
        <p style={{marginTop:'10px'}}>Email: <a href={'mailto:' + email}> {email}</a></p>
        <p>Phone: <a href={'tel:' + phone}>{phone}</a></p>
        <p>Location : {location.city}, {location.country}.</p>
      </div>
    )
  }else{
    return '';
  }
 
}

export default App;
