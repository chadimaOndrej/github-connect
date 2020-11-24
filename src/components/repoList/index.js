import React, {useEffect, useState} from 'react';
import RepoCard from '../repoCard';
import Filter from '../filter';
import github from '../../apis/github';
import { quicksort } from './repoList-container';

import { GridLayout } from './repoList-styled';

let results = [];

const RepoList = props => {
    const [newResults, setNewResults] = useState([]);

    useEffect(() => {
        const search = async () => {
            const { data } = await github.get(`/${props.handle}/repos`);
            let sortData = quicksort(data);
            results = [...sortData];
            setNewResults(sortData);
        };
        search();
    },[]);

    const contentToShow = () => {
        if (newResults.length) {
            return publicReposToShow;
        } else {
            return <h2>No public repos!!!</h2>;
        }
    }

    const publicReposToShow = newResults.map( (item, index) => {
        return <RepoCard key={index} data={item} />
    });

    return (
        <>
            <Filter 
                results={results}
                newResults={newResults}
                filteredResult={(filterActive) => setNewResults(filterActive)}
            />
            <GridLayout>
                {contentToShow(newResults)}
            </GridLayout>
        </>
    );
}

export default RepoList;
