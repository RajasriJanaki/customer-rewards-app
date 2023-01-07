import React from "react";
import TableHeader from "../generic/TableHeader";
import CustomersList from "./CustomersList";

import { useState } from "react";

export function CustomersByMonthTable() {
    const columns = ["Customer ID", "# Transactions", "Points", "Amount ($)"];
    const customers = [{"customerId": "1", "name" : "R1", "points": 125, "amount" : 100}, {"customerId": "2", "name" : "R2", "points": 125, "amount" : 100}];

    const [month, setMonth] = useState(0);

    const handleChange = (event) => {
        setMonth(event.target.value);
    }

    return (
        <div className="wrapper-div">
            <h3>Customers by Month</h3>
            <select value={month} onChange={handleChange}>
                <option value={0}>--All--</option>
                <option value={1}>January</option>
                <option value={2}>February</option>
                <option value={3}>March</option>
                <option value={4}>April</option>
                <option value={5}>May</option>
                <option value={6}>June</option>
                <option value={7}>July</option>
                <option value={8}>August</option>
                <option value={9}>September</option>
                <option value={10}>October</option>
                <option value={11}>November</option>
                <option value={12}>December</option>
            </select>
            <table>
                <TableHeader columns={columns}/>
                <CustomersList customers={customers}/>
            </table>
        </div>
    )
}