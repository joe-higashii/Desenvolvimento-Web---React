import { Button, Tr, Td} from '@chakra-ui/react'

import React from 'react'

function Contato({ contato, handleEditarLista, handleExcluir }) {
  const { nome, telefone, temWhathsapp, observacoes } = contato

  return (
    <Tr>
        <Td>{nome}</Td>
        <Td>{telefone}</Td>
        <Td>{temWhathsapp ? 'Sim' : 'Não'}</Td>
        <Td>{observacoes ?? '-'}</Td>
        <Td><Button onClick={ () => { handleEditarLista(contato) }} marginRight={'10px'}>Editar</Button><Button onClick={() => { handleExcluir(telefone) }}>Excluir</Button></Td>
    </Tr>
  )
}

export default Contato