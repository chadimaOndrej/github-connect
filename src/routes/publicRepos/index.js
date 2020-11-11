import React, {useEffect, useState} from 'react';
import Header from '../../components/header';
import RepoCard from '../../components/repoCard';
import github from '../../apis/github';

import { GridLayout } from './publicRepos-styled';

const PublicRepos = props => {
    const { handle } = props.match.params;
    const [results, setResults] = useState([]);

    useEffect(() => {
        const search = async () => {
            const { data } = await github.get(`/${handle}/repos`);
            console.log('request data', data, handle);
            setResults(data);
        };
        search();
    },[]);

    const contentToShow = () => {
        console.log('contentToShow', results)
        if (results) {
            return publicReposToShow;
        } else {
            return <h2>No public repos!!!</h2>;
        }
    }
    
    const publicReposToShow = results.map( (item, index) => {
        return <RepoCard key={index} data={item} />
    });

    return (
        <>
            <Header>Public Repository for&nbsp;<strong>{handle}</strong></Header>
            <GridLayout>
                {contentToShow()}
            </GridLayout>
        </>
    );
}

export default PublicRepos;
