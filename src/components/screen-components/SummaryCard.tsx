import { AiOutlineFall } from "react-icons/ai";
import { AiOutlineRise } from "react-icons/ai";
import cardStyles from "../../styles/molecules/summary-card.module.css";

export default function SummaryCard({
  title,
  value,
  percentage,
  direction,
}: {
  title: string;
  value: string;
  percentage: string;
  direction: "up" | "down";
}) {
  return (
    <div className={cardStyles.card}>
      <h6>{title}</h6>
      <div className={cardStyles.figures}>
        <span>{value}</span>
        <span
          className={
            direction === "up"
              ? "bg-app-green bg-opacity-20 text-app-green"
              : "bg-app-red bg-opacity-20 text-app-red"
          }
        >
          {direction === "up" ? <AiOutlineRise /> : <AiOutlineFall />}
          {percentage}
        </span>
      </div>
      <p>Compared to last week</p>
    </div>
  );
}
