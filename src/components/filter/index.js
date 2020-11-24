import React, { useState, useEffect } from 'react';
import FormInput from '../../ui/formInput';
import FormCheckbox from '../../ui/formCheckbox';

import { FilterBar, FilterContainer } from './filter-styled';

const Filter = ({results, newResults, filteredResult}) => {
    const [term, setTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [sortType, setSortType] = useState(false);

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
            if (item.name.toLowerCase().search(debouncedTerm) != '-1') {
                filteredItems.push(item);
            }
        }
        sortType ? filteredResult(filteredItems.reverse()) : filteredResult(filteredItems);
    }, [debouncedTerm]);


    useEffect(() => {
        let reverseResults = [...newResults];
        filteredResult(reverseResults.reverse());
    }, [sortType]);

    return (
        <FilterBar>
            <FilterContainer>
                <FormInput 
                    name="findRepos" 
                    onInputChange={e => setTerm(e.target.value)} 
                />
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