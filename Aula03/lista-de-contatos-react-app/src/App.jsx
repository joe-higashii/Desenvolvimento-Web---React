import { Button, Checkbox, Divider, Input, Text, Table, Thead, Tbody, Tr, Th, TableContainer } from '@chakra-ui/react'
import { useState } from 'react'
import Contato from './components/Contato'

function App() {
  const [listaDeContatos, setListaDeContatos] = useState([])

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [temWhatsapp, setWhatsApp] = useState(false)
  const [observacoes, setObservacoes] = useState('')

  const handleChangeNome = (event) => {
    setNome(event.target.value)
  }

  const handleTelefone = (event) => {
    setTelefone(event.target.value)
  }

  const handleObservacoes = (event) => {
    setObservacoes(event.target.value)
  }

  const handleChangeTemWhatsapp = (event) => {
    setWhatsApp(event.target.value)
  }

  const handleLimparFormulario = () => {
    setNome('')
    setTelefone('')
    setWhatsApp(false)
    setObservacoes('')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setListaDeContatos([...listaDeContatos, { nome, telefone, temWhatsapp, observacoes }])

  }

  const handleExcluir = () => {
    setListaDeContatos(listaDeContatos.filter((contato) => contato.telefone !== telefone))

  }

  const handleEditarLista = ({ nome, telefone, temWhathsapp, observacoes }) => {
    setNome(nome)
    setTelefone(telefone)
    setWhatsApp(temWhathsapp)
    setObservacoes(observacoes)

    handleExcluir(telefone)
  }

  return (
    <>
    <form onSubmit={handleSubmit} onReset={handleLimparFormulario}>
      <Text>Nome</Text>
      <Input value={nome} onChange={handleChangeNome}/>

      <Text>Telefone</Text>
      <Input value={telefone} onChange={handleTelefone} />

      <Text>Tem WhatsApp</Text>
      <Checkbox  onChange={handleChangeTemWhatsapp} />

      <Text>Observações</Text>
      <Input value={observacoes} onChange={handleObservacoes} marginBottom={'20px'}/>

      <Button type='submit'>Salvar</Button>
      <Button type='reset'>Limpar Formulário</Button>
      <Divider marginTop={'30px'} />
        <TableContainer>
                <Table size='sm'>
                  <Thead>
                    <Tr>
                      <Th>Nome</Th>
                      <Th>Telefone</Th>
                      <Th>Tem Whatsapp</Th>
                      <Th>Observações</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {listaDeContatos.map((contato) => <Contato contato={contato} handleEditarLista={handleEditarLista} handleExcluir={handleExcluir} />)}
              </Tbody>    
            </Table>
          </TableContainer>
      <hr />
    </form>
    </>
  )
}

export default App
