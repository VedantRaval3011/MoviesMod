"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue) {
      router.push(`/search/${searchValue}`);
    } else {
      router.push(`/`);
    }
  };
  return (
    <div className="flex justify-center mt-3">
      <form onSubmit={handleSubmit} className="flex justify-center w-3/4">
        <input
          type="text"
          placeholder="Search Movies..."
          className="bg-slate-50 dark:bg-neutral-300 text-black p-2 w-4/5 shadow-lg focus:border-x-2 rounded-l-lg"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <button
          type="submit"
          className="text-center dark:bg-amber-600 bg-amber-200  outline-0 rounded-r-lg p-2"
        >
          Search
        </button>
      </form>
    </div>
  );
}
