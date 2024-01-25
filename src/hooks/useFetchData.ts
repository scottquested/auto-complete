import { useEffect, useState } from "react";
import { fetchNames } from "../api";
import { User } from "../types/user";

const useFetchData = () => {
	const [queryString, setQueryString] = useState<string | null>(null);
	const [data, setData] = useState<User[]>();
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			if (!queryString?.length) {
				setData([]);
				return;
			}

			setIsError(false);
			setIsLoading(true);

			try {
				const result = await fetchNames(queryString);
				setData(result);
			} catch (error) {
				setIsError(true);
			}

			setIsLoading(false);
		};

		// Debounce the fetch so we don't hit it too often
		// Half a second should be ok for user to stop typing
		const timeout = setTimeout(() => {
			fetchData();
		}, 500);

		return () => {
			clearTimeout(timeout);
		};
	}, [queryString]);

	return { data, isLoading, isError, setQueryString, queryString };
};

export default useFetchData;
