import { screen, render } from "@testing-library/react";
import { TransactionsTable } from "../components/transactions/TransactionsTable";
import testFetch from "./testData";

beforeEach(() => {
    jest.spyOn(window, "fetch").mockImplementation(testFetch);
});

afterEach(() => {
    jest.restoreAllMocks();
});

test("Renders transactions table", async () => {
    render(<TransactionsTable />);
    expect(screen.getByText('Points')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveTextContent(/Transactions/);
    expect(await screen.findByText('2023-01-03T02:03:07.404Z')).toBeInTheDocument();
    expect(await screen.findByText('113.19')).toBeInTheDocument();
    expect(await screen.findByText('76')).toBeInTheDocument();
    
});