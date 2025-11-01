import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    console.log(user);
    const { website, name } = user;

    return (
        <div>
            <h3>This is User Details</h3>
            <h2>Name: {name}</h2>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;