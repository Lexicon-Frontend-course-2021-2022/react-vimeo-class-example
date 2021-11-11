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

    this.state = {
      videos: [], selected: null, pagers: null
    };

  }


  /** @brief onTermSubmit */
  onSearchFormSubmit = (term, page = 1) => {

    vimeo.search(term, page)
      .then(res => {

        /* Create pager data */
        const pagers = {};

        /* Stash first, previous, next, last */
        for (const item in res.paging) {
          const url = new URL('http://nowhere' + res.paging[item]);

          pagers[item] = res.paging[item] ?
            parseInt(url.searchParams.get('page'))
            : null;

        }

        /* Stash current search term */
        pagers.term = term;

        /* Stash current page */
        pagers.page = page;

        this.setState({
          videos: res.data,
          selected: res.data[0],
          pagers
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

    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchFormSubmit} />
        <div className="ui grid">
          <div className="ui row">

            <div className="eleven wide column">
              <VideoDetail video={this.state.selected} />
            </div>

            <div className="five wide column">
              <VideoItems onPage={this.onSearchFormSubmit} onVideoSelect={this.onVideoSelect} pagers={this.state.pagers} videos={this.state.videos} />
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
