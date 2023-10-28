import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../api/api";
// import { RegistroType } from "../../types/PropTypes.jsx";
import PerfilPhoto from "../../assets/photo.svg";
import LeftIcon from "../../assets/leftIcon.svg";
import Filter from "../../assets/icons8-filtro-48 1.png";
import Logo from "../../components/Logo/Logo";
import LeftTop from "../Main/LefTop/LefTop";
import LeftBottom from "./LeftBottom/LeftBottom.jsx";
import Right from "./right/Right.jsx";
import EditarPefil from "./modals/EditarPerfil/EditarPerfil.jsx";
import AdicionarDeposito from "./modals/AdicionaDeposito/AdicionaDeposito.jsx";

export default function MainPage() {
  const [perfilModal, setPerfilModal] = useState(false);
  const [filtros] = [
    "Alimentação",
    "Assinatura e Serviços",
    "Casa",
    "Compras",
    "Cuidados pessoais",
    "Educação",
    "Contas",
    "Farmacia",
    "Lazer",
  ];
  const [depositoModal, setDepositoModal] = useState(false);
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [keyWordFilter, setkeyWordFilter] = useState([""]);
  const [registros, setRegistros] = ([]);
  const [numeroDaConta, setNumeroDaConta] = useState(0);
  const [userName, setUserName] = useState("");

  async function listarExtrato() {
    try {
      const contas = await api.get("/contas?bank_password=Cubos123Bank");

      const conta = contas.data.rows.find((account) => {
        return (
          account.user.email === localStorage.getItem("userLogin") ||
          account.user.cpf === localStorage.getItem("userLogin")
        );
      });

      setUserName(conta.user.name);

      const response = await api.get(
        `/contas/extrato?accountNumber=${
          conta.accountNumber
        }&password=${localStorage.getItem("userPassword")}`
      );

      setRegistros(
        response.data.deposit
          .concat(response.data.withdrow)
          .concat(response.data.transfer)
      );
      setNumeroDaConta(conta.accountNumber);
    } catch (error) {
      return toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  function exibirSomaDosDepositos() {
    const registrosFiltrados = registros.filter(
      (registro) =>
        registro.type === "Deposito" ||
        (registro.type === "Transferencia" &&
          registro.recipientAccountNumber === numeroDaConta)
    );

    let sum = 0;
    if (registrosFiltrados.length > 0) {
      for (const cada of registrosFiltrados) {
        sum += Number(cada.value);
      }
    }

    return String((sum / 100).toFixed(2));
  }

  function exibirSomaDosSaques() {
    const registrosFiltrados = registros.filter((registro) => {
      return (
        registro.type === "Saque" ||
        (registro.type === "Transferencia" &&
          registro.originAccountNumber === numeroDaConta)
      );
    });

    let sum = 0;
    if (registrosFiltrados.length > 0) {
      for (const cada of registrosFiltrados) {
        sum += Number(cada.value);
      }
    }

    return String((sum / 100).toFixed(2));
  }

  function alterEstadoDeFiltro(value) {
    const a = [...keyWordFilter];
    a.push(value);
    setkeyWordFilter(a);
  }

  useEffect(() => {
    listarExtrato();
  }, []);

  return (
    <>
      <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-teal-500 to-indigo-500">
        <EditarPefil
          setPerfilModal={setPerfilModal}
          perfilModal={perfilModal}
        />
        <AdicionarDeposito
          setDepositoModal={setDepositoModal}
          depositoModal={depositoModal}
        />
        <header className="w-full px-8 py-4 flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-4">
            <img
              className="h-10 cursor-pointer"
              onClick={() => setPerfilModal(true)}
              src={PerfilPhoto}
              alt="Perfil"
            />
            <span className="text-white text-lg">{userName}</span>
            <Link to="/" className="cursor-pointer">
              <img className="h-6" src={LeftIcon} alt="Left Icon" />
            </Link>
          </div>
        </header>
        <div className="w-full max-w-screen-xl mt-8 bg-white rounded-t-3xl flex flex-col items-center">
          <button
            onClick={() => setFilterIsOpen(!filterIsOpen)}
            className="Filter-button bg-gray-200 p-2 rounded-lg shadow-md hover:bg-gray-300 transition duration-300 flex items-center gap-2"
          >
            <img className="w-5 h-5" src={Filter} alt="Filter Icon" />
            Filtrar
          </button>
          <div className="w-full flex flex-col lg:flex-row items-start justify-between p-8">
            <div className={`lg:w-1/2 w-full lg:mr-4 lg:mb-0 mb-4 ${filterIsOpen ? "lg:block" : "lg:hidden"} transition duration-300`}>
              <LeftTop
                filtros={filtros}
                keyWordFilter={keyWordFilter}
                setkeyWordFilter={setkeyWordFilter}
                alterEstadoDeFiltro={alterEstadoDeFiltro}
              />
              <LeftBottom registros={registros} keyWordFilter={keyWordFilter} />
            </div>
            <Right
              exibirSomaDosDepositos={exibirSomaDosDepositos}
              exibirSomaDosSaques={exibirSomaDosSaques}
              setDepositoModal={setDepositoModal}
            />
          </div>
        </div>
      </div>
    </>
  );
}
