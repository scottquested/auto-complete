import { SearchInputProps } from "./SearchInput.types";

import "./SearchInput.css";

const SearchInput = ({ onChange }: SearchInputProps) => {
	return (
		<input type="text" onChange={onChange} className="auto-complete__input" />
	);
};

export default SearchInput;
