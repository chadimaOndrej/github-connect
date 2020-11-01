import React, {useEffect, useState} from 'react';
import github from '../../apis/github';


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
    
const publicReposToShow = results.map( (item) => {
    console.log(item);
    return (
        <div key={item.id}>
            <h3>{item.name}</h3>
            <h5>Number of stars: {item.stargazers_count}</h5>
            <p>{item.description}</p>
        </div>);
    });
    return (
        <div style={{maxWidth: 920,margin: '0 auto'}}>
            {contentToShow()}
        </div>
    );
}

export default PublicRepos;