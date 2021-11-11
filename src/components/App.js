/* ============================================================================
 * Imports
 * ========================================================================= */
import React from 'react';

/* ============================================================================
 * Components
 * ========================================================================= */
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoItems from './VideoItems';

/* ============================================================================
 * Vimeo API
 * ========================================================================= */
import vimeo from '../api/vimeo';

/* ============================================================================
 * App class
 * ========================================================================= */
/** @brief App class */
class App extends React.Component {


  /** @brief constructor */
  constructor(props) {

    super(props);

    this.state = { videos: [], selected: null };

  }


  /** @brief onTermSubmit */
  onSearchFormSubmit = term => {

    vimeo.search(term)
      .then(res => {
        this.setState({
          videos: res.data,
          selected: res.data[0]
        });
      })
      .catch(err => {
        console.log("Vimeo API error: ", err);
      });

  };


  /** @brief onVideoSelect */
  onVideoSelect = video => {
    this.setState({ selected: video });
  };


  /** @brief Render component */
  render() {

    console.log("Render: ", this.state);

    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchFormSubmit} />
        <div className="ui grid">
          <div className="ui row">

            <div className="eleven wide column">
              <VideoDetail video={this.state.selected} />
            </div>

            <div className="five wide column">
              <VideoItems onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>

          </div>
        </div>
      </div>
    );

  }

}

/* ============================================================================
 * Exports
 * ========================================================================= */
export default App;
