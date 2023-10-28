import React from 'react';
import '../App.css'
import '../Index.css'

const Contato = ({ contato, onEditarClick, onExcluirClick }) => {
  const { id, nome, telefone, temWhatsapp, observacoes } = contato;
  
  return (
    <div className="contato">
      <h3>{nome}</h3>
      <p>Telefone: {telefone}</p>
      <p>Tem Whatsapp: {temWhatsapp ? 'Sim' : 'Não'}</p>
      <p>Observações: {observacoes}</p>
      <button onClick={() => onEditarClick(contato)}>Editar</button>
      <button onClick={() => onExcluirClick(id)}>Excluir</button>
    </div>
  );
};

export default Contato;
