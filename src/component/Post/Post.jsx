import React from 'react';
import{Link} from 'react-router'

const Post = ({post}) => {

    const postStyle = {
        border: '2px solid red',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px'
    }

    const {id, title, body} = post
    return (
        <div style={postStyle}>
            <h2>{title}</h2>
            <p>{body}</p>
            <Link to={`/posts/${id}`}>Show Details</Link>
        </div>
    );
};

export default Post;