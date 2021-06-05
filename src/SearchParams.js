const SearchParams = () => {
  const location = "Seattle, WA";

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Seattle, WA"
          ></input>
        </label>
        <button>Find pets</button>
      </form>
    </div>
  );
};

export default SearchParams;
