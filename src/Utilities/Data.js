  /**
   * @returns Transactions in the last 3 months
   */
  export function getTransactions() {
    return fetch("https://63b793e34d97e82aa3c070b6.mockapi.io/api/transactions");
  }
  
  /**
   * @param {integer} id
   * @returns Transaction(s) of a customer
   */
  export function getCustomerTransactions(id) {
    return fetch(`https://63b793e34d97e82aa3c070b6.mockapi.io/api/transactions/?custId=${id}`);
  }

/**
 * @returns Customers
 */
export function getCustomers() {
    return fetch("https://63b793e34d97e82aa3c070b6.mockapi.io/api/customers");
  }