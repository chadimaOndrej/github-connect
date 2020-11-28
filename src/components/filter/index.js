import React, { useState, useEffect } from 'react';
import FormInput from '../../ui/formInput';
import FormCheckbox from '../../ui/formCheckbox';

import { FilterBar, FilterContainer, FilterError, FilterErrorText } from './filter-styled';

const Filter = ({results, newResults, filteredResult}) => {
    const [term, setTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [sortType, setSortType] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const timerId = setTimeout(() => {
          setDebouncedTerm(term.toLowerCase());
        }, 800);
    
        return () => {
          clearTimeout(timerId);
        };
    }, [term]);

    useEffect(() => {
        let filteredItems = [];
        for( let item of results) {
            if (item.name.toLowerCase().search(debouncedTerm) !== -1) {
                filteredItems.push(item);
            }
        }
        sortType ? filteredResult(filteredItems.reverse()) : filteredResult(filteredItems);
    }, [debouncedTerm]);


    useEffect(() => {
        let reverseResults = [...newResults];
        filteredResult(reverseResults.reverse());
    }, [sortType]);

    const validateText = values => {
        if (/[^A-Za-z0-9_-]+/i.test(values)){
            setError('No allowed characters');
        } else {
            setTerm(values);
            if (error.length) setError('');
        }
    };

    return (
        <FilterBar>
            <FilterContainer>
                <FilterError>
                    <FormInput 
                        name="findRepos" 
                        placeholder="Find repository"
                        onInputChange={e => validateText(e.target.value)}
                    />
                    {error ? <FilterErrorText>{error}</FilterErrorText> : null}
                </FilterError>
                <FormCheckbox 
                    name="stargazers_sort" 
                    label="Lowest stargazers count"
                    onChange={e => setSortType(e.target.checked)}
                    value={sortType}
                />
            </FilterContainer>
    </FilterBar>
    );
}

export default Filter;