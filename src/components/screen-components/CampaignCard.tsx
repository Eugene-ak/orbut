import Logos from "/images/avatar-string.png";
import { TbEdit } from "react-icons/tb";
import cardStyles from "../../styles/molecules/campaign-card.module.css";
import { ActionButton } from "../buttons/Buttons";

export default function CampaignCard() {
  return (
    <div className={cardStyles.card}>
      <div>
        <img src={Logos} alt="" />
        <ActionButton>
          <TbEdit />
          <span>Edit</span>
        </ActionButton>
      </div>
      <p>15 steps to automate your campaigns with Rancard</p>
      <div>Status: Not started</div>
      <div></div>
      <div>Last updated: April 10, 2024</div>
    </div>
  );
}
