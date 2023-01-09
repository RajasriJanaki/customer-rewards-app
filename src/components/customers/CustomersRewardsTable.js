import React from "react";
import TableHeader from "../generic/TableHeader";
import CustomersRewardList from "./CustomersRewardList";
import { getTransactions, filterTransactions } from "../../utilities/Data"
import { useState,useEffect } from "react";
import {reducedMonths, months } from "../../config/DateConfig"

export function CustomersRewardsTable() {
    const columns = ["Customer ID", "Monthly Rewards", "Total Rewards"];
    const [rewards, setRewards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedMonth, setSelectedMonth] = useState(reducedMonths[2]);

    useEffect(() => {
      async function getCustomerRewards() {
        try {
          const response = await getTransactions();
          if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
          }
          const data = await response
            .json()
            .then((data) => filterTransactions(data, selectedMonth["month"], selectedMonth["year"]));
          return data;
        } catch (error) {
          console.error(`Could not get customer data: ${error}`);
        }
      }
  
      getCustomerRewards().then((data) => {
        setRewards(data);
        setIsLoading(false);
      });
    }, [selectedMonth]);
  

    const handleChange = (event) => {
        setSelectedMonth(reducedMonths[Number(event.target.value)]);
    }

    return (
        <div className="wrapper-div">
            <h3>Customers Rewards by Month</h3>
            <div className={isLoading ? "" : "hidden"}>Loading..</div>
            <select value={reducedMonths.indexOf(selectedMonth)} onChange={handleChange}>
                <option value={0}>{`${months[reducedMonths[0]["month"]]} - ${reducedMonths[0]["year"]} `}</option>
                <option value={1}>{`${months[reducedMonths[1]["month"]]} - ${reducedMonths[1]["year"]} `}</option>
                <option value={2}>{`${months[reducedMonths[2]["month"]]} - ${reducedMonths[2]["year"]} `}</option>
            </select>
            <table>
                <TableHeader columns={columns}/>
                <CustomersRewardList rewards={rewards}/>
            </table>
        </div>
    )
}