import { renderHighlight } from "./utils";
import { SearchResultsItemProps } from "./SearchResultsItem.types";

import "./SearchResultsItem.css";

const SearchResultsItem = ({ user, queryString }: SearchResultsItemProps) => {
	return (
		<div key={user.id} className="auto-complete__list__item">
			{renderHighlight(user.name, queryString)}
		</div>
	);
};

export default SearchResultsItem;
