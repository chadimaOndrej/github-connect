import React from 'react';
import { StyledHeader, HeaderLogo } from './header-styled';
import GithubLogo from '../../assets/images/GitHub-Mark-64px.png';

const Header = props => {
    return (
        <StyledHeader>
            <HeaderLogo src={GithubLogo} />
            {props.children}
        </StyledHeader>
    );
}

export default Header;
