import React from "react";
import TableHeader from "../generic/TableHeader";
import TransactionsList from "./TransactionsList";

export function TransactionsTable() {
    const columns = ["ID","Datetime", "Customer ID", "Points", "Amount ($)"]
    return (
        <div className="wrapper-div">
            <h3>Transactions</h3>
            <table style={{marginTop :"20px"}}>
                <TableHeader columns={columns}/>
                <TransactionsList/>
            </table>
        </div>
    )
}