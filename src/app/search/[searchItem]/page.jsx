import Results from "@/components/Results";


export default async function page({params}) {
    const searchItem = params.searchItem;

    if (!searchItem || searchItem.trim() === '') {
        return <div>No search query provided</div>;
      }
    
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${searchItem}&language=en-US&page=1&include_adult=false`);
    const data = await res.json();
    const results = data.results;

  return (
    <div>
        {results.length === 0  && <div className="flex justify-center mt-56">
            <h1 >No Result found for the keyword: <span className="dark:text-amber-600 text-amber-300">{searchItem}</span></h1>

            </div> }
        {results && <Results results={results} />}
    </div>
  )
}
