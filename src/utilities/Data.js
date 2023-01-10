import { reducedMonths } from "../config/dateConfig";
import { findRewards } from "./rewards";
import { API_URL_BASE } from "../config/apiConfig";
/**
 * @returns Transactions all time
 */
export function getTransactions() {
  return fetch(API_URL_BASE+"transactions");
}

/**
 * @returns Customers
 */
export function getCustomers() {
    return fetch(API_URL_BASE+"customers");
}

/**
 * 
 * @param {number} month month
 * @param {number} year year
 * @returns If the given month/year is in the 3 month range
 */
function isInRange(month, year) {
  for (let i=0; i<reducedMonths.length; i++){
    if (month === Number(reducedMonths[i]["month"]) && year === Number(reducedMonths[i]["year"])) {
      return true;
    }
  }
  return false;
}

/**
 * 
 * @param {object} acc Accumulated data
 * @param {object} cur Current data
 * @returns Groups transactions by customers
 */
function groupByCustomer(transactions){
  return transactions.reduce(function (acc, cur){
    const idx = acc.findIndex((el) => el.customerId === cur.customerId);
    const transactionMonth = Number(cur["datetime"].split("-")[1]) - 1;
    const transactionYr = Number(cur["datetime"].split("-")[0]);
    const obj = {
      customerId: cur.customerId
    };
  
    if (idx < 0) {
      obj.children = [];
      if (isInRange(transactionMonth, transactionYr)) obj.children.push(cur);
      acc.push(obj);
    } else {
      if (isInRange(transactionMonth, transactionYr))
        acc[idx].children.push(cur);
    }
  
    return acc;
  }, []);
}

/**
 * 
 * @param {list} transactions 
 * @returns Sets rewards for each transaction using the helper function
 */
function calculateTransactionRewards(transactions){
  transactions = transactions.map((t) => {
    t = {...t, "rewards": findRewards(t["amount"])};
    return t;
  });
  return transactions;
}

/**
 * 
 * @param {list} transactions All time transactions
 * @param {number} selectedMonth Month to be used for filtering
 * @returns Transactions within 3 months including current month
 */
export function filterTransactions(transactions, month, year) {

  let groupedTransactions = calculateTransactionRewards(transactions);
  groupedTransactions = groupByCustomer(groupedTransactions);

  groupedTransactions = groupedTransactions.map((t) => {
    const totalPoints = t.children.reduce((acc, curr) => {
      acc = acc + curr["rewards"];
      return acc;
    }, 0);

    const monthlyPoints = t.children.reduce((acc, curr) => {
      let transactionMonth = Number(curr["datetime"].split("-")[1]) - 1;
      let transactionYr = Number(curr["datetime"].split("-")[0]);
      if (transactionMonth === month && transactionYr === year) {
        acc = acc + curr["rewards"];
       
      }
      return acc;
    }, 0);
    
    return {
      customerId: t.customerId,
      total: totalPoints,
      monthly: monthlyPoints
    };
  });
  
  return groupedTransactions;
}