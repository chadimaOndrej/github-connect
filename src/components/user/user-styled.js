import styled from 'styled-components';

export const UserCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 20px;
    margin: 15px;
    border: 1px solid #ccc;
`;

export const UserAvatar = styled.img`
    width: 200px;  
    height: 200px;
`;

export const UserContent = styled.div`
    padding-left: 20px;

`;

export const UserName = styled.h4`
    font-size: 24px;
    font-weight: bold;
`;

export const UserDesc = styled.p`
    color: #444;
`;