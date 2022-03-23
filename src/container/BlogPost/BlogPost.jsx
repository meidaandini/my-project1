import React, { Component, Fragment } from "react";
import Post from "../../component/Post/Post";
import './BlogPost.css';
import axios from 'axios';


class BlogPost extends Component {
    state = {
        post: [],
        author: []
    }

    componentDidMount(){
        // fetch('http://localhost:3000/posts')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post: json
        //     })
        // })
        axios.get('http://localhost:3004/posts')
        .then((res)=>{
            console.log(res.data);
            this.setState({
                post: res.data,
            })
        })
    }

    render() {
        return (
            <Fragment>
                <p className="section-title">Blog Post</p>
                {
                    this.state.post.map(post => {
                    return <Post key={post.id} title={post.title} desc={post.body} />
                    })
                }
               
            </Fragment>
        )
    }
}

export default BlogPost;