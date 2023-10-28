import Plus from "../../../assets/plus.svg";
// import { LeftTopProps } from "../../../types/PropTypes";

export default function LeftTop() {
  const { filtros, keyWordFilter, setkeyWordFilter, alterEstadoDeFiltro } = props;

  return (
    <div className="rounded-md shadow-md p-4 mb-4 bg-white">
      <h2 className="text-gray-600 text-sm font-medium mb-2">Categorias</h2>
      <div className="flex flex-wrap justify-start -mx-2 mt-2">
        {filtros.map((e) => (
          <button
            key={e}
            className={`${
              keyWordFilter.includes(e) ? "bg-purple-700 text-white" : "bg-white"
            } rounded-full px-4 py-2 mx-2 mb-2 flex items-center space-x-1 hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-200`}
            onClick={() => alterEstadoDeFiltro(e)}
          >
            <span className="text-sm">{e}</span>
            <img src={Plus} alt="plus icon" className="h-4 w-4" />
          </button>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          className="rounded-full px-4 py-2 bg-white hover:bg-purple-600 text-purple-700 focus:outline-none focus:ring focus:ring-purple-200"
          onClick={() => setkeyWordFilter([""])}
        >
          Limpar Filtros
        </button>
      </div>
    </div>
  );
}
