/* ============================================================================
 * Imports
 * ========================================================================= */
import React from 'react';
//import DOMPurify from 'DOMPurify'

/* ============================================================================
 * Function Component
 * ========================================================================= */
const VideoDetail = ({ video }) => {

  if (!video) {
    return <div>Loading...</div>;
  }

  // const videoSource = `https://youtube.com/embed/${video.id.videoId}`;

  return (
    <div>

      <div className="ui embed"
        dangerouslySetInnerHTML={{ __html: video.embed.html }}
      >

        {/* <iframe src={videoSource} title={video.snippet.title} /> */}
      </div>

      <div className="ui segment">
        <h4 className="ui header">{video.name}</h4>
        <p>{video.description}</p>
      </div>

    </div>
  );
};
/* ============================================================================
 * Exports
 * ========================================================================= */
export default VideoDetail;