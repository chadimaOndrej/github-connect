import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../routes/home'; 
import PublicRepos from '../routes/publicRepos'


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" exact component={Home}/>
                <Route path="/:handle" exact component={PublicRepos}/>
            </BrowserRouter>
        );
    }
}

export default App;