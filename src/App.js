import logo from './logo.svg';
import './App.css';
const container = {
  border:"2px solid rgba(0, 0, 0, .5)",
  borderRadius:'5px',
  width:"50%",
  margin:"15px auto"
}

const button ={
  backgroundColor:'rgba(0,0,0,.5)',
  padding:'10px 30px',
  borderRadius:'5px',
  border:0,
  color:'#fff',
  cursor:'pointer',
  margin:"20px 0"
}
function App() {
  const orange = {
    color: 'orange'
  }
  const heading = {
    textTransform:'capitalize',
    margin:"5rem 0 2rem 0",
    color:"rgba(0,0,0,.7)"
  }
  const person = {
    name:'Hero alom',
    type: 'funny person'
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={orange}>React JSX</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h2 style={{ color: 'cyan' }}>Welcome To React </h2>
        <h3>{person.name} is a {person.type} .</h3>
        <button style={button}>Simple button</button>
      </header>
      <h1 style={heading}>Component! Similar look and similar data</h1>
      <Singer></Singer>
      <Singer></Singer>
      <Singer></Singer>
      <Singer></Singer>
      <h1 style={heading}>Component! Similar look and different data</h1>
      <Person name={person.name} type={person.type +"🤣"} qty="Best funny" btn="Hero ^_^" ></Person>
      <Person name="Dr.Mahfuzur Rahman" type="Singer 🐸" qty="Best " btn="Dr.Litu ಠ_ಠ" ></Person>
      <Person name="Eva Rahman" type="Singer🙄" qty="Kokil konthi" btn="Kokil konthi (•_•)"></Person>
    </div>
  );
}


function Singer(){
 
  return(
    <div className="" style={container} >
      <h2>Dr.Mahfuzur Rahman</h2>
      <p>Best singer of the year</p>
      <button style={button}>Details</button>
    </div>
  );
}

function Person(props){
  return(
    <div className="" style={container}>
        <h2>{props.name} is a {props.type}</h2>
        <p>{props.qty} singer of the year...🤣</p>
        <button style={button }>More About {props.btn}</button>
    </div>
  );
}
export default App;
