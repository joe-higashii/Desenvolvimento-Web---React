// import { registroRowProps } from "../../types/PropTypes";

export default function RegistroRow() {
  const { data, semana, descricao, categoria, valor, tipo } = props;

  function getColor(tipo) {
    let color;

    if (tipo === "Deposito") {
      color = "bg-indigo-400";
    } else if (tipo === "Saque") {
      color = "bg-orange-400";
    } else if (tipo === "Transferencia") {
      color = "bg-blue-500";
    } else {
      color = "bg-white";
    }

    return color;
  }

  return (
    <div className={`flex justify-between items-center p-2 ${getColor(tipo)}`}>
      <span className="w-1/6 truncate">{data.slice(0, 10)}</span>
      <span className="w-1/6 truncate">{semana}</span>
      <span className="w-1/6 truncate">{descricao}</span>
      <span className="w-1/6 truncate">{categoria}</span>
      <span className="w-1/6 truncate">{"R$ " + (valor / 100).toFixed(2).replace(".", ",")}</span>
      <span className="w-1/6 truncate">{tipo}</span>
    </div>
  );
}
