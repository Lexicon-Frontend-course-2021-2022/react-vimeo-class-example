/* ============================================================================
 * Imports
 * ========================================================================= */
import React from 'react';
import './VideoItem.css';

/* ============================================================================
 * Function component
 * ========================================================================= */
const VideoItem = ({ video, onVideoSelect }) => {

  return (

    <div className="item video-item" onClick={() => onVideoSelect(video)}>
      <img
        className="ui image"
        src={video.pictures.base_link}
        alt={video.name}
      />

      <div className="content">
        <div className="header">{video.name}</div>
      </div>

    </div>
  );

}

/* ============================================================================
 * Exports
 * ========================================================================= */
export default VideoItem;