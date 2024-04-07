import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import './video.css'

export default function Video() {
    // const videoId = 'K4TOrB7at0Y';
    // const videoOpts = { width: '60%', height: '100%' };

    useEffect(() => {
        //Get the height of the header element
        const headerHeight = document.getElementById('header').offsetHeight;
        document.documentElement.style.setProperty('--headerHeight', headerHeight + 'px');
      }, []);

    return (
        // <YouTube className="demo-vid" videoId={videoId} opts={videoOpts} />
        <div className='player-wrapper'>
            <ReactPlayer
                className='demo-vid'
                url='videos/eval2023-c.mp4'
                width='100%'
                height='100%'
                controls={true}
            />
        </div>
    );
}