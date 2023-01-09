import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './App.css';
import { CustomersRewardsTable } from './components/customers/CustomersRewardsTable';
import { TransactionsTable } from './components/transactions/TransactionsTable';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Customer Rewards Program</h1>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rewards">Rewards</Link>
            </li>
            </ul>
          </nav>
        <main>
          <div className='App-container'>
            <Routes>
              <Route exact path="/" element={<TransactionsTable />}></Route>
              <Route exact path="/rewards" element={<CustomersRewardsTable />}></Route>
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
