import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {

    const post= useLoaderData();
    
    
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }

    const {id, title, body} = post;
    return (
        <div>
            <h2>This is Post Details</h2>
            <h3>{title}</h3>
            <p>{body}</p>
            <p>Post Id: {id}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;