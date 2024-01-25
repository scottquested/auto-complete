import { ChangeEvent } from "react";

export interface SearchInputProps {
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
