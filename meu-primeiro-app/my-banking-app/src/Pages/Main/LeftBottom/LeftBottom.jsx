import { useState, useEffect } from "react";
// import { RegistroType } from "../../../types/PropTypes";
import RegistroRow from "../../../components/RegistroRow/RegistroRow";

export default function LeftBottom() {
  const { registros, keyWordFilter } = props;
  const [orderDateDesc, setOrderDateDesc] = useState(false);
  const [orderValueDesc, setOrderValueDesc] = useState(false);

  function handleSortByDate() {
    registros.sort((a, b) => {
      return orderDateDesc ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
    });
    setOrderDateDesc(!orderDateDesc);
  }

  function handleSortByValue() {
    registros.sort((a, b) => {
      return orderValueDesc ? b.value - a.value : a.value - b.value;
    });
    setOrderValueDesc(!orderValueDesc);
  }

  return (
    <div className="rounded-md shadow-md p-6 h-1/2 w-full bg-white">
      <div className="flex items-center space-x-4 mb-4">
        <span className="w-1/6 cursor-pointer" onClick={handleSortByDate}>
          Data
        </span>
        <span className="w-1/6">Dia da Semana</span>
        <span className="w-1/6">Descrição</span>
        <span className="w-1/6">Categoria</span>
        <span className="w-1/6 cursor-pointer" onClick={handleSortByValue}>
          Valor
        </span>
        <span className="w-1/6">Tipo</span>
      </div>
      <hr className="w-11/12 mx-auto border border-gray-300 mb-4" />
      <div className="flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        {registros
          .filter((element) => keyWordFilter.length < 2 || keyWordFilter.includes(element.category))
          .map((element, index) => {
            return (
              <RegistroRow
                key={index}
                data={element.date}
                semana={element.day}
                descricao={element.discription}
                categoria={element.category}
                valor={element.value}
                tipo={element.type}
              />
            );
          })}
      </div>
    </div>
  );
}
