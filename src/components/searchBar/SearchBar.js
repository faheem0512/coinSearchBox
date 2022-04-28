import React from "react";
import "./SearchBar.css";

export default class SearchBar extends React.PureComponent {
  render() {
    return <input className="search-bar" type="text" {...this.props} />;
  }
}
