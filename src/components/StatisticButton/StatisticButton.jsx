import { Button } from "./StatisticButton.styled";

export const StatisticButton = ({ title, onClick }) => {
  return <Button onClick={() => onClick()}>{title}</Button>;
};
