import React from 'react';

const CustomersRewardsList = ({ rewards }) => {

    return (
        <tbody>
            {rewards ? rewards.map((customer) => {
                return (
                    <tr key={customer.customerId}>
                        <td>{customer.customerId}</td>
                        <td>{customer.monthly}</td>
                        <td>{customer.total}</td>
                    </tr>
                )
            }): null}
        </tbody>
    )
}

export default CustomersRewardsList;