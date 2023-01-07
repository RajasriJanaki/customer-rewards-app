import React from 'react';

const TransactionsList = ({ transactions }) => {

    return (
        <>
            {transactions ? transactions.map((transaction) => {
                return (
                    <tr key={transaction.transactionId}>
                        <td>{transaction.transactionId}</td>
                        <td>{transaction.dateTime}</td>
                        <td>{transaction.amount}</td>
                        <td>{((transaction.amount > 100) ? (transaction.amount - 100)*2 : 0) 
                            + ((transaction.amount > 50) ? 50 : 0)}</td>
                    </tr>
                )
            }): null}
        </>
    )
}

export default TransactionsList;