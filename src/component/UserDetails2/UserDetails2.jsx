import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {

    const user=use(userPromise);
    console.log(user);

    return (
        <div>
            <h2>{user.name}</h2>
            <p>Website: {user.website}</p>
        </div>
    );
};

export default UserDetails2;