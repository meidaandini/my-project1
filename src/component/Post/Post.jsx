import React from 'react';
import foto from './gambar/gmbr.jpg';

const Post = (props) => {
    return(
        <div className='post'>
            <div className='img-thumb'>
                <img src={foto} alt="gambar" />
            </div>
            <div className='content'>
                <p className='title'>{props.title}</p>
                <p className='desc'>{props.desc}</p>
            </div>
        </div>
    )
}

export default Post;