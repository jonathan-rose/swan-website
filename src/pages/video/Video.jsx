import React from 'react';
import YouTube from 'react-youtube';
import './video.css'

export default function Video() {
    const videoId = 'K4TOrB7at0Y';
    const videoOpts = { width: '60%', height: '100%' };

    return (
        <YouTube className="demo-vid" videoId={videoId} opts={videoOpts} />
    );
}