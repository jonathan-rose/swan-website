import React from 'react';
import YouTube from 'react-youtube';
import './video.css'

export default function Video () {
    const videoId = 'K4TOrB7at0Y';

    return(
        <div>
            <YouTube videoId={videoId} />
        </div>
    );
}