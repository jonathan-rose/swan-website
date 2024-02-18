import React from 'react';
import YouTube from 'react-youtube';
import './video.css'

export default function Video () {
    const videoId = 'K4TOrB7at0Y';

    return(
        <div className='video-container'>
            <YouTube className="demo-vid" videoId={videoId} />
        </div>
    );
}