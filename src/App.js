import React from 'react';
import './App.css';
import { CustomersByMonthTable } from './components/customers/CustomersByMonthTable';
import { TransactionsTable } from './components/transactions/TransactionsTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Customer Rewards Program</h1>
      </header>
      <main>
        <div className='App-container'>
          <TransactionsTable />
          <CustomersByMonthTable />
        </div>
      </main>
    </div>
  );
}

export default App;
