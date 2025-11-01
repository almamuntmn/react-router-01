import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {

    const post= useLoaderData();
    console.log(post);

    const {id, title, body} = post;
    return (
        <div>
            <h2>This is Post Details</h2>
            <h3>{title}</h3>
            <p>{body}</p>
            <p>Post Id: {id}</p>
        </div>
    );
};

export default PostDetails;