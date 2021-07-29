import './App.css';
//import BehaviorGraph from './Components/BehaviorGraph';
import CryptoTable from './Components/CryptoTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Crypto Crew</h1>
      </header>
      <body className="App-body">
        <div className="graph-container">
          <p>simulation here</p>
          <button>Simulate Attack</button>
        </div>
        <div className="crypto-table-container">
          <p>Crypto transactions here</p>
          <CryptoTable/>
        </div>
      </body>
      <footer className="App-footer">

      </footer>
    </div>
  );
}

export default App;
