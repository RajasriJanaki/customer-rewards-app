import { API_URL_BASE } from "../config/apiConfig";

const customers = [
    {
     "createdAt": "2023-01-08T01:55:04.252Z",
     "name": "Darrel Hickle",
     "customerId": 1,
     "id": "1"
    },
    {
     "createdAt": "2023-01-08T02:54:34.858Z",
     "name": "Ms. Samantha Hand",
     "customerId": 2,
     "id": "2"
    },
    {
     "createdAt": "2023-01-07T09:17:26.419Z",
     "name": "Francis Rice",
     "customerId": 3,
     "id": "3"
    },
   ];
  
  const transactions = [
    {
     "customerId": "1",
     "datetime": "2023-01-02T02:03:07.404Z",
     "amount": 964.02,
     "transactionId": 47,
     "id": "1"
    },
    {
     "customerId": "1",
     "datetime": "2022-01-09T14:50:52.671Z",
     "amount": 116.19,
     "transactionId": 68,
     "id": "2"
    },
    {
     "customerId": "1",
     "datetime": "2022-11-12T02:18:57.769Z",
     "amount": 344.3,
     "transactionId": 79,
     "id": "3"
    },
    {
     "customerId": "1",
     "datetime": "2022-12-02T19:23:31.199Z",
     "amount": 32.46,
     "transactionId": 13,
     "id": "4"
    },
    {
     "customerId": "2",
     "datetime": "2022-12-07T04:31:27.765Z",
     "amount": 848.16,
     "transactionId": 84,
     "id": "5"
    },
    {
     "customerId": "2",
     "datetime": "2022-09-23T12:32:28.097Z",
     "amount": 669.23,
     "transactionId": 93,
     "id": "6"
    },
    {
     "customerId": "2",
     "datetime": "2022-01-22T18:37:20.560Z",
     "amount": 670.43,
     "transactionId": 12,
     "id": "7"
    },
    {
     "customerId": "2",
     "datetime": "2022-11-25T04:27:27.536Z",
     "amount": 980.13,
     "transactionId": 14,
     "id": "8"
    },
    {
     "customerId": "2",
     "datetime": "2023-01-02T05:03:42.620Z",
     "amount": 636.43,
     "transactionId": 29,
     "id": "9"
    },
    {
     "customerId": "3",
     "datetime": "2023-01-03T02:03:07.404Z",
     "amount": 113.19,
     "transactionId": 36,
     "id": "10"
    },
   ];

  export default async function testFetch(url) {
    switch (url) {
      case API_URL_BASE+"customers":
        return {
          ok: true,
          status: 200,
          json: async () => customers,
        };
      case API_URL_BASE+"transactions":
        return {
          ok: true,
          status: 200,
          json: async () => transactions,
        };
      default: {
        throw new Error(`Unhandled request: ${url}`);
      }
    }
  }