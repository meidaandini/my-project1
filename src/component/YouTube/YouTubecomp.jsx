import React from 'react';
import './YouTubecomp.css';
import image from './gmbr.jpg';

const YouTubeComp = (props) => {
    return ( 
    <div className='youtube-wrapper'>
        <div className='img-thumb'>
                <img src={image} />
            <p className='time'>6.56</p>
        </div>
        <p className='title'>{props.title}</p>
        <p className='desc'>desc here</p>
    </div>
    )
}

export default YouTubeComp;