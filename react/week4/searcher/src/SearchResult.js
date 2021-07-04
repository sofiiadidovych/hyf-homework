import {useContext} from 'react';
import {SearchContext} from './SearchContext';

const SearchResult = () => {
    const searchContext = useContext(SearchContext);
    const searchResult = searchContext.error.length > 0
        ? <p>{searchContext.error}</p>
        : <UserList />;

    return (
        <div>
            {searchContext.isLoading
                ? 'Loading...'
                : searchResult
            }
        </div>
    )
}

const UserList = () => {
    const searchContext = useContext(SearchContext);
    const {users} = searchContext;

    return (
        <div>
            {users === undefined || users.length === 0
                ? 'No users'
                : <ul>
                    {users.map(user => {
                        return <li key={user.id}>{user.login}</li>
                    })}
                </ul>
            }
        </div>
    )
}

export default SearchResult;