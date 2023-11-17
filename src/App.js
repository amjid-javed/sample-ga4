import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga4'

function App() {
  ReactGA.initialize('G-DYCJHNTKGJ');

  ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search, title: "Home Page" });

  const tagClick = (event, value) =>{
    console.log(event.target);

    console.log(value);
    ReactGA.event("add_payment_info",value);
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" onClick={logoClick({name: 'Test Logo', currency: 'USD', value: 7.8, items:[{item_id:'1234214', item_name: 'test logo name'}]})}/> */}
        <img src={logo} className="App-logo" alt="logo"/>
        <p onClick={(event) => tagClick(event, {name: 'Test Logo', currency: 'USD', value: 7.8, items:[{item_id:'1234214', item_name: 'test logo name'}]})} >
          Sample site to test GA4 (click)
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
