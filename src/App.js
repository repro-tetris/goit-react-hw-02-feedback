import React from "react";
import { Section } from "./components/Section/Section";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "./components/Statistics/Statistics";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => Object.values(this.state).reduce((a, b) => a + b);

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    return total === 0 ? 0 : Math.round((good * 100) / total);
  };

  handleButton = (feedbackEntity) => {
    this.setState((prevState) => {
      return {
        [feedbackEntity]: prevState[feedbackEntity] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleButton}
          />
        </Section>
        {total > 0 && (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </div>
    );
  }
}

export default App;
