import Logos from "/images/avatar-string.png";
import { TbEdit } from "react-icons/tb";
import cardStyles from "../../styles/molecules/campaign-card.module.css";
import { ActionButton } from "../buttons/Buttons";
import { useState } from "react";
import { EditModal } from "../modals/Modal";

export default function CampaignCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className={cardStyles.card}>
      <div>
        <img src={Logos} alt="" />
        <ActionButton clickEvt={handleModal}>
          <TbEdit />
          <span>Edit</span>
        </ActionButton>
        {isModalOpen && <EditModal onClose={handleModal} onCancel={handleModal} onSubmit={handleModal} />}
      </div>
      <p>15 steps to automate your campaigns with Rancard</p>
      <div>Status: Not started</div>
      <div></div>
      <div>Last updated: April 10, 2024</div>
    </div>
  );
}
