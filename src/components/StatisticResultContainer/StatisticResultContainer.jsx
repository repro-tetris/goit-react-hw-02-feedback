import { Component } from "react";
import { StatisticResultEntity } from "../StatisticResultEntity/StatisticResultEntity";

class StatisticResultContainer extends Component {
  render() {
    const keys = Object.keys(this.props.items);
    const { items } = this.props;
    return keys.map((key) => (
      <StatisticResultEntity key={key} title={key} value={items[key]} />
    ));
  }
}

export default StatisticResultContainer;
