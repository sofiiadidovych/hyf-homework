import {useContext} from 'react';
import {SearchContext} from './SearchContext';

const HyfRepos = () => {
    const serchContext = useContext(SearchContext);

    return (
        <div>
            <h1>HYF Repos</h1>
            <ul>
                {serchContext.hyfRepos.map(repo => {
                    return <li key={repo.id}>{repo.name}</li>
                })}
            </ul>
        </div>
    )
}

export default HyfRepos;