import React from "react";
import TableHeader from "../generic/TableHeader";
import CustomersList from "./CustomersList";

export function CustomersByMonthTable() {
    const columns = ["Customer ID", "# Transactions", "Points", "Amount ($)"];
    const customers = [{"customerId": "1", "name" : "R1", "points": 125, "amount" : 100}, {"customerId": "2", "name" : "R2", "points": 125, "amount" : 100}];

    return (
        <div className="wrapper-div">
            <h3>Customers by Month</h3>
            <select>
                <option selected>--All--</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
            </select>
            <table>
                <TableHeader columns={columns}/>
                <CustomersList customers={customers}/>
            </table>
        </div>
    )
}