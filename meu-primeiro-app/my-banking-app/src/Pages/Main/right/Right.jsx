// import { rightProps } from "../../../types/PropTypes";
import Button from "../../../components/Button/Button.jsx";
import Right from "./Right.jsx";

export default function RightComponent() {
  const { exibirSomaDosDepositos, exibirSomaDosSaques, setDepositoModal } =
    props;
  return (
    <Right className="rounded-lg shadow-md p-4">
      <h2 className="text-lg font-bold mb-2">Resumo</h2>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p>Entradas</p>
          <span>{"R$ " + exibirSomaDosDepositos().replace(".", ",")}</span>
        </div>
        <div className="flex justify-between">
          <p>Saídas</p>
          <span className="text-orange-500">
            {"R$ " + exibirSomaDosSaques().replace(".", ",")}
          </span>
        </div>
        <hr className="opacity-20" />
        <div className="flex justify-between">
          <p>Saldo</p>
          <span className="text-blue-500">
            {"R$ " +
              String(
                (
                  Number(exibirSomaDosDepositos()) -
                  Number(exibirSomaDosSaques())
                ).toFixed(2)
              ).replace(".", ",")}
          </span>
        </div>

        <div onClick={() => setDepositoModal(true)}>
          <Button text="Deposite Aqui" widthflex="100%" />
        </div>
      </div>
    </Right>
  );
}
