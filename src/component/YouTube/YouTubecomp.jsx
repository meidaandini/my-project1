import React from 'react';
import './YouTubecomp.css';
import image from './gmbr.jpg';

const YouTubeComp = () => {
    return ( 
    <div className='youtube-wrapper'>
        <div className='img-thumb'>
                <img src={image} />
            <p className='time'>6.56</p>
        </div>
        <p className='title'>title here</p>
        <p className='desc'>desc here</p>
    </div>
    )
}

export default YouTubeComp;