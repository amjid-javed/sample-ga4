import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga4'

function App() {
  ReactGA.initialize('G-DYCJHNTKGJ');

  ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search, title: "Home Page" });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sample site to test GA4
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
