import React from "react";
import SearchBar from "../../components/searchBar";
import ResultListViewer from "../../components/resultListViewer";

import "./SearchPage.css";

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      searchData: [],
      isLoadingData: false
    };
  }

  searchData = async (searchText) => {
    const responsePromise = await fetch(
      `https://www.coinbase.com/api/v2/assets/search?query=${searchText}&limit=10`
    );
    const response = await responsePromise.json();
    this.setState({
      searchData: response.data,
      isLoadingData: false
    });
  };

  onChange = (e) => {
    const { value: searchText } = e.target;
    if (!searchText) {
      this.setState({
        searchText,
        searchData: []
      });
    }
    this.setState({
      searchText,
      isLoadingData: true
    });
    this.searchData(searchText);
  };

  render() {
    const { searchText, searchData } = this.state;
    return (
      <div className="main-pane">
        <SearchBar value={searchText} onChange={this.onChange} />
        <ResultListViewer data={searchData} />
      </div>
    );
  }
}

export default SearchPage;
