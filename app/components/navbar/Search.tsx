const Search = () => {
  return (
    <div className=" hidden md:flex flex-1">
      <input
        type="text"
        className="py-2 px-3 border-none outline-none flex flex-1 "
        placeholder="Search"
      />
      <button className="bg-orange-800 text-sm p-2 border-transparent">
        Search
      </button>
    </div>
  );
};

export default Search;
