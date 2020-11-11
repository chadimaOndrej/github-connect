import React from 'react';
import { Card, CardHeading, CardSubHeading, CardParagraph } from './repoCard-styled';

const RepoCard = props => {
    const {id, name, stargazers_count, description } = props.data;

    return (
        <Card key={id}>
            <CardHeading>{name}</CardHeading>
            <CardSubHeading>Number of stars: {stargazers_count}</CardSubHeading>

            <CardSubHeading>Repository description:</CardSubHeading>
            <CardParagraph>{description}</CardParagraph>
        </Card>
    );
}

export default RepoCard;
