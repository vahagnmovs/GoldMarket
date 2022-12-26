import React from 'react';
import video from 'src/style/img/video.png';
import 'src/style/components/_banner.scss';

const Video = () => {
	return (
	  <video muted autoPlay loop width="100%">
		<source src="/viddeo/videoo.mp4" type="video/mp4"/>
	  </video>
	);
  };
  
  export default Video;