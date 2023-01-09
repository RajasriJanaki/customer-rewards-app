import React from 'react';
import { findRewards } from '../../utilities/rewards';

const TransactionsList = ({ transactions }) => {

    return (
        <tbody>
            {transactions ? transactions.map((transaction) => {
                return (
                    <tr key={transaction.id}>
                        <td>{transaction.transactionId}</td>
                        <td>{transaction.datetime}</td>
                        <td>{transaction.customerId}</td>
                        <td>{transaction.amount}</td>
                        <td>{findRewards(transaction.amount)}</td>
                    </tr>
                )
            }): null}
        </tbody>
    )
}

export default TransactionsList;