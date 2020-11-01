import React, { useState, useEffect } from 'react';
import User from '../../components/user';
import github from '../../apis/github';
import SearchBar from '../../components/searchBar';


const Home = () => { 
    const [term, setTerm] = useState('gaearon');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState({});

    useEffect( () => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
            console.log('debouncedTerm', debouncedTerm);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        }
    }, [term]);

    useEffect( () => {
        const search = async () => {
            const { data } = await github.get(`/${debouncedTerm}`);
            console.log('request data', data, debouncedTerm);
            setResults(data);
        };
        search();
    }, [debouncedTerm])

    return (
        <div style={{maxWidth: 920,margin: '0 auto'}}>
            <SearchBar onFormSubmit={(value) => setTerm(value)} />
            <User userData={results} />
        </div>
    );
}

export default Home;