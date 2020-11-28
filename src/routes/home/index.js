import React, { useState, useEffect } from 'react';
import User from '../../components/user';
import github from '../../apis/github';
import SearchBar from '../../components/searchBar';
import Header from '../../components/header';

const Home = () => { 
    const [debouncedTerm, setDebouncedTerm] = useState('gaearon');
    const [results, setResults] = useState({});
    const [fetchError, setFetchError] = useState(false);

    useEffect( () => {
        const search = async () => {
            try {
                const { data } = await github.get(`/${debouncedTerm}`);
                setResults(data);
            }
            catch(error) {
                setFetchError(true);
                alert(`User ${debouncedTerm} no exist! Please try another name.`);
            }
        };
        search();
    }, [debouncedTerm])

    return (
        <>
            <Header>
                <SearchBar onFormSubmit={(value) => setDebouncedTerm(value)} fetchError={fetchError}/>
            </Header>
            <div style={{maxWidth: 920,margin: '0 auto'}}>
                <User userData={results} />
            </div>
        </>
    );
}

export default Home;