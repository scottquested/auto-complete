import { User } from "../../types/user";

export interface SearchResultsProps {
	data: User[];
	isLoading: boolean;
	queryString: string;
	isError: boolean;
}
