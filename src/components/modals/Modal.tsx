import { createPortal } from "react-dom";
import { IoCloseSharp } from "react-icons/io5";
import modalStyles from "../../styles/modals/modal.module.css";
// import { PrimaryButton, SecondaryButton } from "../buttons/Buttons";
import CreateCampaignForm from "../screen-components/CreateCampaignForm";
import EditCampaignForm from "../screen-components/EditCampaignForm";

export function Modal({
  title,
  children,
  onClose,
}: {
  title: string;
  children: React.ReactNode;
  onClose: VoidFunction;
  onCancel: VoidFunction;
  onSubmit: VoidFunction;
}) {
  return createPortal(
    <div id="modal-overlay">
      <div className={modalStyles.modal}>
        <div className={modalStyles.modal_header}>
          <h1>{title}</h1>
          <IoCloseSharp onClick={onClose} title="Close" />
        </div>
        {children}
      </div>
    </div>,
    document.getElementById("modal-portal")!
  );
}

export function AddModal({
  onClose,
  onCancel,
  onSubmit,
}: {
  onClose: VoidFunction;
  onCancel: VoidFunction;
  onSubmit: VoidFunction;
}) {
  return (
    <Modal
      title="Create Campaign"
      onClose={onClose}
      onCancel={onCancel}
      onSubmit={onSubmit}
    >
      <p>Add a new campaign by filling in the necessary details</p>
      <CreateCampaignForm customFormStyles={modalStyles.campaign_form} />
    </Modal>
  );
}

export function EditModal({
  onClose,
  onCancel,
  onSubmit,
}: {
  onClose: VoidFunction;
  onCancel: VoidFunction;
  onSubmit: VoidFunction;
}) {
  return (
    <Modal
      title="Update Campaign"
      onClose={onClose}
      onCancel={onCancel}
      onSubmit={onSubmit}
    >
      <p>Edit campaign details by filling in the necessary details</p>
      <EditCampaignForm customFormStyles={modalStyles.campaign_form} />
    </Modal>
  );
}
