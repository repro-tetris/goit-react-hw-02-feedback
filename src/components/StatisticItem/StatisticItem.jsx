import { StyledItem } from "./StatisticItem.styled";
export const StatisticItem = ({ title, value }) => {
  return (
    <StyledItem>
      {title}:<span>{value}</span>
    </StyledItem>
  );
};
