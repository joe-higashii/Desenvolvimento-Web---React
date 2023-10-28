import { useState } from "react";
import Modal from "react-modal";
import ModalDepositForm from "../../../../components/ModalDepositForm/ModalDepositForm.jsx";
import ModalSaqueForm from "../../../../components/ModalSaqueForm/ModalSaqueForm.jsx";
import ModalTransferenciaForm from "../../../../components/ModalTransferenciaForm/ModalTransferenciaForm.jsx";

Modal.setAppElement("#root");

export default function AdicionarDeposito() {
  const { setDepositoModal, depositoModal } = props;
  const [toggleDepositSaque, setToggleDepositSaque] = useState("deposito");

  function depositoModalClose() {
    setDepositoModal(false);
  }

  return (
    <>
      <AdicionarDepositoCSS />
      <Modal
        isOpen={depositoModal}
        onRequestClose={depositoModalClose}
        contentLabel="example label"
        overlayClassName="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        className="modal-content bg-white rounded-lg shadow-lg p-12"
      >
        {toggleDepositSaque === "saque" && (
          <>
            <h1 className="text-3xl font-bold mb-4">Saque</h1>
            <div className="flex space-x-4">
              <button
                className="flex-1 rounded-md py-2 text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-200"
                onClick={() => setToggleDepositSaque("deposito")}
              >
                Deposito
              </button>
              <button
                className="flex-1 rounded-md py-2 text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-200"
                onClick={() => setToggleDepositSaque("transferencia")}
              >
                Transferencia
              </button>
              <button
                className="flex-1 rounded-md py-2 text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-200"
                onClick={() => setToggleDepositSaque("saque")}
              >
                Saque
              </button>
            </div>
            <ModalSaqueForm />
          </>
        )}
        {toggleDepositSaque === "deposito" && (
          <>
            <h1 className="text-3xl font-bold mb-4">Deposito</h1>
            <div className="flex space-x-4">
              <button
                className="flex-1 rounded-md py-2 text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-200"
                onClick={() => setToggleDepositSaque("deposito")}
              >
                Deposito
              </button>
              <button
                className="flex-1 rounded-md py-2 text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-200"
                onClick={() => setToggleDepositSaque("transferencia")}
              >
                Transferencia
              </button>
              <button
                className="flex-1 rounded-md py-2 text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-200"
                onClick={() => setToggleDepositSaque("saque")}
              >
                Saque
              </button>
            </div>
            <ModalDepositForm />
          </>
        )}
        {toggleDepositSaque === "transferencia" && (
          <>
            <h1 className="text-3xl font-bold mb-4">Transferencia</h1>
            <div className="flex space-x-4">
              <button
                className="flex-1 rounded-md py-2 text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-200"
                onClick={() => setToggleDepositSaque("deposito")}
              >
                Deposito
              </button>
              <button
                className="flex-1 rounded-md py-2 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                onClick={() => setToggleDepositSaque("transferencia")}
              >
                Transferencia
              </button>
              <button
                className="flex-1 rounded-md py-2 text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-200"
                onClick={() => setToggleDepositSaque("saque")}
              >
                Saque
              </button>
            </div>
            <ModalTransferenciaForm />
          </>
        )}
      </Modal>
    </>
  );
}
