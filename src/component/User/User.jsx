import React, { Suspense, useState } from 'react';
import { Link, Navigate } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({ user }) => {
    const [showInfo, setShowInfo] = useState(false);
    const [visitHome, setVisitHome] = useState(false);

    const { name, email, phone, id } = user;

    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());

    const userStyle = {
        border: '2px solid red',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px'
    }

    if (visitHome) {
        return <Navigate to='/'></Navigate>
    }  

    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
            <button onClick={() => (setShowInfo(!showInfo))}>{showInfo ? 'Hide' : 'Show'} info</button>
            {
                showInfo && <Suspense fallback={<div>Loading...</div>}>
                    <UserDetails2 userPromise={userPromise}></UserDetails2>
                </Suspense>
            }
            <button onClick={()=>setVisitHome(true)}>Visit Home</button>
        </div>
    );
};

export default User;