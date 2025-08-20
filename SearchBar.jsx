export default function SearchBar ({ query, onChange}) {
    return (
        <input
        type="text"
        className="search-input"
        placeholder="Search by title or author..."
        value={query}
        onChange={e=>onChange(e.target.value)}
        />
    )
}