import { createContext, useEffect, useState } from "react";

export const SearchContext = createContext();
const SEARCH_USERS_URL = "https://api.github.com/search/users?q=";
const HYF_REPOS_URL = "https://api.github.com/users/HackYourFuture-CPH/repos";

const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);
  const [hyfRepos, setHyfRepos] = useState([]);

  useEffect(() => {
    if (query === "") {
      setUsers([]);
      setError('');
      return;
    }

    setIsLoading(true);
    fetch(SEARCH_USERS_URL + query)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`Error code ${response.status}`);
            }
        })
        .catch(er => {
            setError(er.toString());
        })
        .then(data => {
            if (data) {
              setUsers(data.items);
              setError('');
            }
        })
        .finally(() => setIsLoading(false));
  }, [query]);

  useEffect(() => {
      fetch(HYF_REPOS_URL)
        .then(response => response.json())
        .then(data => setHyfRepos(data));
  }, []);

  const contextValue = {
      isLoading,
      error,
      users,
      hyfRepos
  }

  return (
    <>
      <h1>Github user searcher</h1>
      <input
        type="text"
        placeholder="Search for user"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <SearchContext.Provider value={contextValue}>
        {children}
      </SearchContext.Provider>
    </>
  );
};

export default SearchProvider;
