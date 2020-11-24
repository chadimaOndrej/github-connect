import React from 'react';
import Header from '../../components/header';
import RepoList from '../../components/repoList';

const PublicRepos = props => {
    const { handle } = props.match.params;

    return (
        <>
            <Header>Public Repository for&nbsp;<strong>{handle}</strong></Header>
            <RepoList handle={handle} />
        </>
    );
}

export default PublicRepos;
