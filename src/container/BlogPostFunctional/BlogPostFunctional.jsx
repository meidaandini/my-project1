import React, { Component, Fragment, useState, useEffect } from "react";
import Post from "../../component/Post/Post";
import './BlogPostFunctional.css';
import axios from 'axios';

const BlogPostFunctional = () => {
    const [posts, setPosts] = useState(null)
    useEffect(() => {
        console.log(posts)
        if (posts === null) {
            axios.get('http://localhost:3004/posts')
                .then((result) => {
                    console.log(result.data);
                    setPosts(result.data)
                })
        }
    })
    return (
        <Fragment>
            <p className="section-title">Blog Post</p>
            {
                posts ? posts.map(post => {
                return <Post key={post.id} title={post.title} desc={post.body} />
                }) : 'Memuat data ...'
            }
           
        </Fragment>
    )
}

export default BlogPostFunctional;