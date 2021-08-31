import React, { Component } from "react";
import StatisticButton from "../StatisticButton/StatisticButton";

class StaticticButtons extends Component {
  render() {
    const buttons = Object.keys(this.props.buttons);
    return (
      <div>
        {buttons.map((button) => {
          return (
            <StatisticButton
              key={button}
              title={button}
              onClick={() => {
                this.props.onClick(button);
              }}
            />
          );
        })}
      </div>
    );
  }
}

export default StaticticButtons;
