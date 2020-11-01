import React from 'react';
import { Link } from 'react-router-dom';
import { UserCard, UserAvatar, UserContent, UserName, UserDesc } from './user-styled';

const User = ({ userData }) => {
    console.log(userData);
    if (!userData) {
        return <div>Loading...</div>;
      }
    
    return (
        <UserCard>
            <div>
                <UserAvatar src={userData.avatar_url} title={userData.name} />
            </div>
            <UserContent>
                <UserName>{userData.name}</UserName>
                <UserDesc>Public repositories: {userData.public_repos}</UserDesc>
                <UserDesc>{userData.bio}</UserDesc>
                <Link to={`/${userData.login}`} >Show public repos</Link>
            </UserContent>
        </UserCard>
    );
}

export default User;