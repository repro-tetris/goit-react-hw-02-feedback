import React from "react";
import StaticticButtons from "./components/StaticticButtons/StaticticButtons";
import StatisticResultContainer from "./components/StatisticResultContainer/StatisticResultContainer";
import { StatisticResultTotal } from "./components/StatisticResultTotal/StatisticResultTotal";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButton = (statisticEntity) => {
    this.setState((prevState) => {
      return {
        [statisticEntity]: prevState[statisticEntity] + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <StaticticButtons buttons={this.state} onClick={this.handleButton} />
        <h2>Statistics</h2>
        <StatisticResultContainer items={this.state} />
        <StatisticResultTotal items={this.state} />
      </div>
    );
  }
}

export default App;
