import React from "react";
import TableHeader from "../generic/TableHeader";
import TransactionsList from "./TransactionsList";
import { getTransactions } from "../../utilities/Data";
import { useState, useEffect } from "react";

export function TransactionsTable() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
      async function fetchTransactionData() {
        try {
          const response = await getTransactions();
          if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
          }
          const data = await response.json();
          return data;
        } catch (error) {
          console.error(`Could not get transaction data: ${error}`);
        }
      }

      fetchTransactionData().then(data => setTransactions(data));
    }, []);
    
    const columns = ["ID","Datetime", "Customer ID", "Amount ($)", "Points"]
    return (
        <div className="wrapper-div">
            <h3>Transactions</h3>
            <table style={{marginTop :"20px"}}>
                <TableHeader columns={columns}/>
                <TransactionsList transactions={transactions}/>
            </table>
        </div>
    )
}