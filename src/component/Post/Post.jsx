import React from 'react';
import{Link} from 'react-router'

const Post = ({post}) => {

    const {id, title, body} = post
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <Link to={`/posts/${id}`}>Show Details</Link>
        </div>
    );
};

export default Post;