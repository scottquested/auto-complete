import { User } from "../types/user";

const fetchNames = async (query: string): Promise<User[]> => {
	const res = await fetch("data/names.json", {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	});
	const data = await res.json();

	// I would expect this to be done on the server side with a query param
	// this would then return the filtered data
	const filterData = data.filter((user: User) => {
		return user.name.toLowerCase().includes(query.toLowerCase());
	});

	return filterData;
};

export { fetchNames };
