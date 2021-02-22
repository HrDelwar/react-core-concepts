import logo from './logo.svg';
import './App.css';
let orange = {
  color: 'orange'
}
let button ={
  backgroundColor:'rgba(0,0,0,.5)',
  padding:'10px 30px',
  borderRadius:'5px',
  border:0,
  color:'#fff'
}

const person = {
  name:'Hero alom',
  type: 'funny'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{ color: 'darkBlue' }}>Welcome to react </h1>
        <h2 style={orange}>Welcome to react </h2>
        <h3>{person.name} is a {person.type} person.</h3>
        <button style={button}>Simple button</button>
      </header>
    </div>
  );
}

export default App;
