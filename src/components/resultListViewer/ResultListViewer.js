import React from "react";
import "./ResultListViewer.css";

export default class ResultListViewer extends React.PureComponent {
  renderRow = (rowData) => {
    const { id, name, percent_change } = rowData;
    const isNoChange = percent_change === 0;
    return (
      <div className="row-wrapper" key={id}>
        <span className="row-entity-name">{name}</span>
        <span
          className={`row-entity-percentage-change ${
            isNoChange ? "" : percent_change > 0 ? "green" : "red"
          }`}
        >
          {!isNoChange && `${percent_change.toFixed(2)}%`}
        </span>
      </div>
    );
  };

  render() {
    const { data } = this.props;
    if (!data || data.length < 1) {
      return null;
    }
    return (
      <div className="result-container">
        {data.map((rowData, index) => this.renderRow(rowData, index))}
      </div>
    );
  }
}
