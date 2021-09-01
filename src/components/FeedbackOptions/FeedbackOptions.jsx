import StatisticButton from "../StatisticButton/StatisticButton";
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttons = Object.keys(options);
  return (
    <div>
      {buttons.map((button) => {
        return (
          <StatisticButton
            key={button}
            title={button}
            onClick={() => {
              onLeaveFeedback(button);
            }}
          />
        );
      })}
    </div>
  );
};
