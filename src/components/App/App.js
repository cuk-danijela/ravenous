import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';
import Loading from '../../components/Loading/Loading';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      loading: false
    };
    this.searchYelp = this.searchYelp.bind(this);
    this.handleLoading = this.handleLoading.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({businesses: businesses});
      this.handleLoading();
    });
  }

  handleLoading(){
    this.setState({ loading: !this.state.loading});
  }

  render() {
    return (
      <div className="App">
        
        <SearchBar searchYelp={this.searchYelp} loading={this.handleLoading}/>
        { !!this.state.loading && <Loading /> }
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;