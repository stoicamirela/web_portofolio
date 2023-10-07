// import logo from './logo.svg';
import logo from "./assets/images/GD.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
