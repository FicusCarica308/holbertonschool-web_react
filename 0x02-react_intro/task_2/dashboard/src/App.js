import holbertonLogo from './holberton-logo.jpg';
import './App.css';
import {getFullYear, getFooterCopy} from './utils.js';

function App() {
  return (
    <div>
      <div className='App-header'>
        <img src={holbertonLogo} className="holberton-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <form>
          <label for="email">Email:</label>
          <input type="email" name="email" id="email"></input>
          <label for="password">Password:</label>
          <input type="text" name="password" id="password"></input>
          <button>OK</button>
        </form>
      </div>
      <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
