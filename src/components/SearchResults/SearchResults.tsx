import { SearchResultsProps } from "./SearchResults.types";
import SearchResultsItem from "../SearchResultsItem";

import "./SearchResults.css";

const SearchResults = ({
	data,
	isLoading,
	queryString,
	isError,
}: SearchResultsProps) => {
	return (
		<>
			{!!data?.length && (
				<div className="auto-complete__list">
					{isLoading && <div>Loading...</div>}
					{data?.map((user) => (
						<SearchResultsItem
							key={user.id}
							user={user}
							queryString={queryString}
						/>
					))}
					{isError && <div>Something went wrong...</div>}
				</div>
			)}
		</>
	);
};

export default SearchResults;
