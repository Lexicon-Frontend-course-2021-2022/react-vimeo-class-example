/* ============================================================================
 * Imports
 * ========================================================================= */
import React from 'react';
import VideoItem from './VideoItem';

import './VideoItems.css';

/* ============================================================================
 * Function component
 * ========================================================================= */
const VideoItems = ({ videos, pagers, onPage, onVideoSelect }) => {

  const renderVideos = videos.map(video => {

    return (
      <VideoItem key={video.resource_key} onVideoSelect={onVideoSelect} video={video} />
    );

  });

  const renderPagers = (pagers) => {

    // <div className="ui button pager blue"
    // onClick={() => onPage(pagers.term, pagers.next)}>&lt;&lt;</div>

    const mapping = {
      'first': '<<',
      'previous': '<',
      'next': '>',
      'last': '>>'
    }

    const renderButton = (item) => {

      let disabled = false;

      /* Disable pagers 'first' and 'previous' if first page */
      if ((item === 'first' || item === 'previous') && pagers.page === 1) {
        disabled = true;
      }

      /* Disable pagers 'next' and 'last' if last page */
      if ((item === 'last' || item === 'next') && pagers.page === pagers.last) {
        disabled = true;
      }

      if (disabled) {
        return <div className={`ui button pager disabled`}>{mapping[item]}</div>
      } else {
        return (
          <div className={`ui button pager blue`}
            onClick={() => onPage(pagers.term, pagers[item])}
          >{mapping[item]}</div>
        );
      }
    };

    if (pagers) {
      return (
        <div className="video-pager">
          {renderButton('first')}
          {renderButton('previous')}
          <div className="pager-text">{pagers.page}/{pagers.last}</div>
          {renderButton('next')}
          {renderButton('last')}
        </div >
      );
    } else {
      return;
    }

  };

  return (
    <div>
      {renderPagers(pagers)}

      <div className="ui relaxed divided list">{renderVideos}</div>
    </div >
  );



}

/* ============================================================================
 * Exports
 * ========================================================================= */
export default VideoItems;