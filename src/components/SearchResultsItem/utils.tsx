/**
 * Renders a highlight for the search results
 *
 * @param {string} name - The name of the person
 * @param {string} queryString - The query string
 * @returns {JSX.Element} - The JSX element
 *
 * @example
 * renderHighlight("John Doe", "doe");
 * outputs <span>John <mark>Doe</mark></span>
 */
export const renderHighlight = (name: string, queryString: string | null) => {
	const parts = name.split(new RegExp(`(${queryString})`, "gi"));
	return (
		<span>
			{parts.map((part, i) =>
				part.toLowerCase() === queryString?.toLowerCase() ? (
					<mark key={`${part}-${i}`}>{part}</mark>
				) : (
					part
				)
			)}
		</span>
	);
};
