// import { EditarPerfilCSS } from "./EditarPerfil";
import ModalPerfilForm from "../../../../components/ModalPerfilForm/ModalPerfilForm.jsx";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function EditarPerfil() {
  const { setPerfilModal, perfilModal } = props;

  function perfilModalClose() {
    setPerfilModal(false);
  }

  return (
    <>
      <EditarPerfilCSS />
      <Modal
        isOpen={perfilModal}
        onRequestClose={perfilModalClose}
        contentLabel="example label"
        overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        className="modal-content bg-white rounded-lg shadow-lg p-12"
      >
        <h1 className="text-3xl font-bold mb-8">Editar Perfil</h1>
        <ModalPerfilForm />
      </Modal>
    </>
  );
}
