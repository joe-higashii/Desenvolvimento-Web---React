import React, { useState, useEffect } from 'react';
import '../App.css';
import '../Index.css';

const ContatosForm = ({ onSubmit, contatoEditando }) => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [temWhatsapp, setTemWhatsapp] = useState(false);
  const [observacoes, setObservacoes] = useState('');

  useEffect(() => {
    if (contatoEditando) {
      setNome(contatoEditando.nome || '');
      setTelefone(contatoEditando.telefone || '');
      setTemWhatsapp(contatoEditando.temWhatsapp || false);
      setObservacoes(contatoEditando.observacoes || '');
    }
  }, [contatoEditando]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nome, telefone, temWhatsapp, observacoes });
    setNome('');
    setTelefone('');
    setTemWhatsapp(false);
    setObservacoes('');
  };

  const limparFormulario = () => {
    setNome('');
    setTelefone('');
    setTemWhatsapp(false);
    setObservacoes('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nome:</label>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
      <label>Telefone:</label>
      <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
      <label>Tem Whatsapp:</label>
      <input type="checkbox" checked={temWhatsapp} onChange={() => setTemWhatsapp(!temWhatsapp)} />
      <label>Observações:</label>
      <textarea value={observacoes} onChange={(e) => setObservacoes(e.target.value)} />
      <button type="submit">{contatoEditando ? 'Salvar Edição' : 'Salvar'}</button>
      <button type="button" onClick={limparFormulario}>Limpar Formulário</button>
    </form>
  );
};

export default ContatosForm;
