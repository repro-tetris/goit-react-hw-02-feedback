import { Component } from "react";

class StatisticButton extends Component {
  render() {
    const { title, onClick } = this.props;
    return <button onClick={() => onClick()}>{title}</button>;
  }
}

export default StatisticButton;
