/* ============================================================================
 * Imports
 * ========================================================================= */
import React from 'react';

import './VideoDetail.css';

/* ============================================================================
 * Function Component
 * ========================================================================= */
const VideoDetail = ({ video }) => {

  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div>

      <div className="ui embed" dangerouslySetInnerHTML={{ __html: video.embed.html }} />

      <div className="ui segment">

        <div className="ui grid">
          <div className="ui row">

            <div className="two wide column">
              <div className="user-icon" style={{ backgroundImage: `url(${video.user.pictures.base_link})` }} />
            </div>

            <div className="fourteen wide column">
              <h4 className="ui header">
                {video.name}
              </h4>
              <p className="user-name">{video.user.name}</p>
            </div>
          </div>

        </div>

        <p>{video.description}</p>
      </div>
    </div >
  );
};
/* ============================================================================
 * Exports
 * ========================================================================= */
export default VideoDetail;