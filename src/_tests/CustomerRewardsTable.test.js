import { screen, render } from "@testing-library/react";
import { CustomersRewardsTable } from "../components/customers/CustomersRewardsTable";
import testFetch from "./testData";

beforeEach(() => {
  jest.spyOn(window, "fetch").mockImplementation(testFetch);
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("renders CustomerByMonth table", async () => {
    render(<CustomersRewardsTable />);
    expect(screen.getByText("Customers Rewards by Month")).toBeInTheDocument();
    expect(screen.getByText("Monthly Rewards")).toBeInTheDocument();
    expect(await screen.findByText('1')).toBeInTheDocument();
    expect(await screen.findByText('1778')).toBeInTheDocument();
    expect(await screen.findByText('2317')).toBeInTheDocument();
});