import React from 'react';
import video from 'src/assets/logo.mp4'
import './test.css'

const VideoPlayer = () => {
	return (
		<div className='main'>
			<video src={video} autoPlay loop muted/>
			<div className="content">
			</div>
		</div>
	)
};

export default VideoPlayer;