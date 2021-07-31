import './App.css';
import AttackSimulator from './Components/AttackSimulator';
import CryptoTable from './Components/CryptoTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Crypto Crew</h1>
      </header>
      <body className="App-body">
        <div className="App-divider"/>
        <div>
          <div className="simulator-container">
            <AttackSimulator/>
            <button className="simulator-button">
              Simulate Attack
            </button>
          </div>
            <div className="currency">
              <b>Total Cryptocurrency</b>
              <p>Currency Amount</p>
          </div>
        </div>
        <div className="App-divider"/>
        <h3>CryptoCurrency Transactions</h3>
        <CryptoTable/>
      </body>
      <footer className="App-footer">

      </footer>
    </div>
  );
}

export default App;
