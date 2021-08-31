const countTotalFeedback = (items) =>
  Object.values(items).reduce((a, b) => a + b);

export const StatisticResultTotal = ({ items }) => {
  return (
    <p>
      Total:<span>{countTotalFeedback(items)}</span>
    </p>
  );
};
