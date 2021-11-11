/* ============================================================================
 * Imports
 * ========================================================================= */
import React from 'react';

/* ============================================================================
 * Class SearchBar 
 * ========================================================================= */
/** @brief Class SearchBar  */
class SearchBar extends React.Component {

  /** @brief constructor */
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  /** @brief onFormSubmit() */
  onFormSubmit = e => {
    e.preventDefault();

    /* Only search of we have a search term... */
    if (this.state.term) {

      /* Stash this.state.term to bubble it */
      const term = this.state.term;
      this.props.onFormSubmit(term);

      /* Empty this.state.term to reset search term */
      this.setState({ term: '' });
    }

  };

  /** @brief onInputChange() */
  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  /** @brief Render component */
  render() {

    return (

      <div className="ui segment searchbar">
        <form onSubmit={this.onFormSubmit} className="ui form">

          <div className="field">
            <label>Video search</label>
            <input type="text" value={this.state.term} onChange={this.onInputChange} placeholder="Search..."></input>
          </div>

        </form>
      </div>

    );

  }

}

/* ============================================================================
 * Exports
 * ========================================================================= */
export default SearchBar;