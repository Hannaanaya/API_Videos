import React from 'react';

const VideoDetails = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/${videoId}`;

    return (
        <div className='Video-detail col-md-8'>
            <div>
                <iframe src={url} frameborder="0"></iframe>
            </div>
            <div className='details'>
                <div>{video.snippet.tittle}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
}

export default VideoDetails;