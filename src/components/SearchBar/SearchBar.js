import React from 'react';
import './SearchBar.css';
import loading from '../Loading/Loading';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    }
      return '';
  }

  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption});
  }

  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  handleLocationChange(event) {
    this.setState({ location: event.target.value});
  }

  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    this.props.loading();
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  };

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (<li className={this.getSortByClass(sortByOptionValue)}
        key={sortByOptionValue}
        onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
        {sortByOption}
      </li>);
    });
  }

  render() {
    return (
      <div className="SearchBar">
          <h1>ravenous</h1>
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Restaurants" onChange={this.handleTermChange} onKeyPress={this.handleKeyPress} />
          <input placeholder="Location" onChange={this.handleLocationChange} onKeyPress={this.handleKeyPress} />
        </div>
        <div className="SearchBar-submit">
          <button className="button" onClick={this.handleSearch}> Let's Go</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;