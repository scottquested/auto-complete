import { ChangeEvent } from "react";
import SearchInput from "./components/SearchInput";
import SearchResults from "./components/SearchResults";
import useFetchData from "./hooks/useFetchData";

import "./App.css";

const App = () => {
	const { data, isLoading, isError, setQueryString, queryString } =
		useFetchData();

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setQueryString(value);
	};

	return (
		<div className="auto-complete">
			<div className="auto-complete__results">
				<span>Search for names</span>
				<span>{data && `${data.length} results`}</span>
			</div>
			<SearchInput onChange={onChange} />
			<SearchResults
				data={data || []}
				isLoading={isLoading}
				isError={isError}
				queryString={queryString || ""}
			/>
		</div>
	);
};

export default App;
