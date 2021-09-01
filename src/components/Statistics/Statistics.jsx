import { StatisticItem } from "../StatisticItem/StatisticItem";

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatisticItem title="Good" value={good} />
      <StatisticItem title="Neutral" value={neutral} />
      <StatisticItem title="Bad" value={bad} />
      <StatisticItem title="Total" value={total} />
      <StatisticItem title="Positive feedback" value={positivePercentage} />
    </>
  );
};
