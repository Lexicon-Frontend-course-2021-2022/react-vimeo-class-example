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

  const renderButtons = (pagers) => {

    /** @brief Render one button */
    const renderButton = (item) => {

      const icons = {
        'first': 'fast backward',
        'previous': 'backward',
        'next': 'forward',
        'last': 'fast forward'
      }

      /* Return enabled or disabled pager button */
      return (
        ( /* Disable pagers 'first' and 'previous' if on first page */
          ['first', 'previous'].indexOf(item) >= 0
          && pagers.page === pagers.first
        ) ||
        ( /* Disable pagers 'next' and 'last' if on last page */
          ['last', 'next'].indexOf(item) >= 0
          && pagers.page === pagers.last
        )
      )
        ? <i className={`${icons[item]} icon blue disabled`} />
        : <i className={`${icons[item]} icon blue`} onClick={() => onPage(pagers.term, pagers[item])} />;

    };

    /* Render buttons _IF_ we have pager info */
    return pagers ?
      (
        <div className="video-pager">
          {renderButton('first')}
          {renderButton('previous')}
          <div className="pager-text">{pagers.page}/{pagers.last}</div>
          {renderButton('next')}
          {renderButton('last')}
        </div >
      )
      : '';

  };

  return (
    <div>
      {renderButtons(pagers)}

      <div className="ui relaxed divided list">{renderVideos}</div>
    </div >
  );



}

/* ============================================================================
 * Exports
 * ========================================================================= */
export default VideoItems;