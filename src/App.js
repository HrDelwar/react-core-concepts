import logo from './logo.svg';
import './App.css';

const capitalize = {
  textTransform:'capitalize',
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
 
  const person = {
    name:'Hero alom',
    type: 'funny'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{ color: 'cyan' }, capitalize}>Welcome to react </h1>
        <h2 style={orange,capitalize}>react JSX</h2>
        <h3>{person.name} is a {person.type} person.</h3>
        <button style={button}>Simple button</button>
      </header>
      <h1 style={capitalize}>Component similar look and similar data</h1>
      <Singer></Singer>
      <Singer></Singer>
      <Singer></Singer>
      <Singer></Singer>
    </div>
  );
}


function Singer(){
  const style = {
    border:"2px solid rgba(0, 0, 0, .5)",
    margin:'10px',
    borderRadius:'5px'
  }
  return(
    <div className="" style={style} >
      <h2>Dr.Mahfuzur Rahman</h2>
      <p>Best singer of the year</p>
      <button style={button}>Details</button>
    </div>
  );
}
export default App;
