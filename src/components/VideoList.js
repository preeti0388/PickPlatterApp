import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onMySelection}) => {

const myvideoList = videos.map((video) => {  
  return <VideoItem key = {video.id.videoId} onSelected={onMySelection} video = {video}/> ;
	});


     return (

      <div className="ui relaxed divided list"> {myvideoList} </div>

      )
   };

export default VideoList;