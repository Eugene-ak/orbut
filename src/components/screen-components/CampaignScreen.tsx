import { ActionButton } from "../buttons/Buttons";
import { TbFilter } from "react-icons/tb";
import { RxArrowTopRight } from "react-icons/rx";
import { GoPlusCircle } from "react-icons/go";
import pageStyles from "../../styles/pages/campaign.module.css";
import SummaryCard from "./SummaryCard";
import CampaignCard from "./CampaignCard";
import { useState } from "react";
import { AddModal } from "../modals/Modal";

export default function CampaignScreen() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className={pageStyles.section}>
      <h1>Your total revenue</h1>
      <h2>GH&#8373;6,609,234.00</h2>
      <div className={pageStyles.content}>
        <div className={pageStyles.btn_container}>
          <ActionButton customBtnStyles={pageStyles.action_btn}>
            <TbFilter />
            <span>Select dates</span>
          </ActionButton>
          <ActionButton customBtnStyles={pageStyles.action_btn}>
            <TbFilter />
            <span>Filter</span>
          </ActionButton>
        </div>
        <div className={pageStyles.summary_card_container}>
          <SummaryCard
            title="New Suscriptions"
            value="875"
            percentage="24%"
            direction="up"
          />
          <SummaryCard
            title="New Orders"
            value="500"
            percentage="17%"
            direction="down"
          />
          <SummaryCard
            title="Average Revenue"
            value="GH&#8373;8,673"
            percentage="24%"
            direction="up"
          />
        </div>
      </div>
      <div className={pageStyles.campaign_details}>
        <div className={pageStyles.campaign_header}>
          <h3>Recent Campaigns</h3>
          <span>
            <a href="#">View all</a>
            <RxArrowTopRight />
          </span>
        </div>
        <div className={pageStyles.campaign_list}>
          <div className={pageStyles.list_group}>
            <div>
              <h6>Draft</h6>
              <span>1</span>
            </div>
            <CampaignCard />
            <ActionButton
              customBtnStyles={pageStyles.add_btn}
              clickEvt={handleModal}
            >
              <GoPlusCircle />
              <span>Add Campaign</span>
            </ActionButton>
            {isModalOpen && (
              <AddModal
                onClose={handleModal}
                onCancel={handleModal}
                onSubmit={handleModal}
              />
            )}
          </div>
          {/* </div> */}
          <div className={pageStyles.list_group}>
            {/* <div className={pageStyles.campaign_list}> */}
            <div>
              <h6>In progress</h6>
              <span>2</span>
            </div>
            <CampaignCard />
            <CampaignCard />
          </div>
          {/* </div> */}
          <div className={pageStyles.list_group}>
            {/* <div className={pageStyles.campaign_list}> */}
            <div>
              <h6>Complete</h6>
              <span>1</span>
            </div>
            <CampaignCard />
          </div>
        </div>
      </div>
    </section>
  );
}
