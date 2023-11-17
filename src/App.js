import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga4'

function App() {
  ReactGA.initialize('G-DYCJHNTKGJ');

  ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search, title: "Home Page" });

  // const logoClick = (value) =>{
  //   ReactGA.event("add_payment_info",value);
  // }

  const handleClick = (event, message) => {
    // 👇️ refers to the image element
    console.log(event.target);

    console.log(message);

    console.log('Image clicked');
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" onClick={logoClick({name: 'Test Logo', currency: 'USD', value: 7.8, items:[{item_id:'1234214', item_name: 'test logo name'}]})}/> */}
        <img src={logo} className="App-logo" alt="logo" onClick={(event) => handleClick(event, 'hello')}/>
        <p onClick={(event) => handleClick(event, 'hello')} >
          Sample site to test GA4 (logo click)
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
