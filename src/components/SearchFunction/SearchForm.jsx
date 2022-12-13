const SearchForm = (props) => {

    const handleSubmit = props.handleSubmit;

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="search" placeholder="Recherche" />
            <button type="submit">Search</button>
        </form >
    )
}

export default SearchForm
