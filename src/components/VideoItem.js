import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onSelected}) =>{

  return (
  	<div onClick={() => onSelected(video) } className=" video-item item">
  	<img className="ui image" alt = {video.snippet.title} src = {video.snippet.thumbnails.default.url} />
  	<div className ="content">
  	<div className= "header"> {video.snippet.title} </div>
  	</div>
  	 </div>
  	);

};

	export default VideoItem;