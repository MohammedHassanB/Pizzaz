import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handelSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handelSubmit}>
      <input
        placeholder="Search Order Number #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:w-28 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-offset-1 placeholder:sm:w-64 sm:focus:w-72"
      ></input>
    </form>
  );
}

export default SearchOrder;
