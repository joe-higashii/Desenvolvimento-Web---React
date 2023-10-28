import React, { useState } from 'react';
import Contato from './Contato';
import ContatosForm from './ContatosForm';
import '../App.css';
import '../Index.css';

const ContatosApp = () => {
  const [contatos, setContatos] = useState([]);
  const [contatoEditando, setContatoEditando] = useState(null);

  const adicionarContato = (novoContato) => {
    if (contatoEditando) {
      setContatos(contatos.map((c) => (c.id === contatoEditando.id ? novoContato : c)));
      setContatoEditando(null);
    } else {
      setContatos([...contatos, { ...novoContato, id: Date.now() }]);
    }
  };

  const editarContato = (contato) => {
    setContatoEditando(contato);
  };

  const excluirContato = (id) => {
    setContatos(contatos.filter((contato) => contato.id !== id));
  };

  return (
    <div className="contatos-app">
      <h1>Lista de Contatos</h1>
      <ContatosForm onSubmit={adicionarContato} contatoEditando={contatoEditando} />
      <div className="contatos-lista">
        {contatos.map((contato) => (
          <Contato
            key={contato.id}
            contato={contato}
            onEditarClick={editarContato}
            onExcluirClick={excluirContato}
          />
        ))}
      </div>
    </div>
  );
};

export default ContatosApp;
