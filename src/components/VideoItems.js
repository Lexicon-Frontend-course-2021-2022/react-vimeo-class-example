/* ============================================================================
 * Imports
 * ========================================================================= */
import React from 'react';
import VideoItem from './VideoItem';

/* ============================================================================
 * Function component
 * ========================================================================= */
const VideoItems = ({ videos, onVideoSelect }) => {

  console.log(videos);

  const renderVideos = videos.map(video => {

    return (
      <VideoItem key={video.resource_key} onVideoSelect={onVideoSelect} video={video} />
    );

  });

  return <div className="ui relaxed divided list">{renderVideos}</div>


}

/* ============================================================================
 * Exports
 * ========================================================================= */
export default VideoItems;