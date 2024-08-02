import { createPortal } from "react-dom";
import { IoCloseSharp } from "react-icons/io5";
import modalStyles from "../../styles/modals/modal.module.css";
import { PrimaryButton, SecondaryButton } from "../buttons/Buttons";

export function Modal({
  title,
  children,
  onClose,
  onCancel,
  onSubmit,
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
        <div className={modalStyles.modal_footer}>
          <SecondaryButton label="Cancel" type="button" clickEvt={onCancel} />
          <PrimaryButton
            label="Create Campaign"
            type="submit"
            clickEvt={onSubmit}
          />
        </div>
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
      <form></form>
    </Modal>
  );
}
