import React from 'react';

const CustomersList = ({ customers }) => {

    return (
        <tbody>
            {customers ? customers.map((customer) => {
                return (
                    <tr key={customer.customerId}>
                        <td>{customer.customerId}</td>
                        <td>{customer.name}</td>
                        <td>{customer.points}</td>
                        <td>{customer.amount}</td>
                    </tr>
                )
            }): null}
        </tbody>
    )
}

export default CustomersList;