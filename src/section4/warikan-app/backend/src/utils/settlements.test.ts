import { calculateSettlements } from "./settlements";
import { Expense, Settlement } from "../type";

describe("calculateSettlements", () => {
	it("清算リストが算出される", () => {
		const expenses: Expense[] = [
			{
				groupName: "group1",
				expenseName: "支出1",
				payer: "一郎",
				amount: 300,
			},
			{
				groupName: "group1",
				expenseName: "支出2",
				payer: "二朗",
				amount: 100,
			}
		];
		const groupMembers = ["一郎", "二朗", "三郎"];

		const expectedSettlements: Settlement[] = [
			{ from: "二朗", to: "一郎", amount: 34 },
			{ from: "三郎", to: "一郎", amount: 133 },
		];

		const result = calculateSettlements(expenses, groupMembers);
		expect(result).toEqual(expectedSettlements);
	})
})
