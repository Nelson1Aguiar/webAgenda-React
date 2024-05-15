const MenuPadrao = ({ AddCtt, updateCtt, listaCtt, deleteCtt, mudarConteudoMenu, setScreen, tarefasIcon, mensagemIcon, iconeSair }) => {
  return (
    <div id="Menu" className="Menu">
      <h1 style={{ marginBottom: '0' }}>AGENDA</h1>
      <div className="opcoes">
        <button className="primeiraOp" id="addCtt" onClick={() => mudarConteudoMenu("AddContato")}>
          <p>Adicionar Contato</p>
          <img src={AddCtt} alt='' width={'50%'} />
        </button>
        <button id="attCtt" onClick={() => mudarConteudoMenu("AttContato")}>
          <p>Atualizar Contato</p>
          <img src={updateCtt} alt='' width={'50%'} />
        </button>
      </div>
      <div className="opcoes">
        <button id="ListarCtt" onClick={() => mudarConteudoMenu("ListarContato")}>
          <p>Listar Contatos</p>
          <img src={listaCtt} alt='' width={'50%'} />
        </button>
        <button id="apagarCtt" onClick={() => mudarConteudoMenu("DeleteContato")}>
          <p>Apagar Contato</p>
          <img src={deleteCtt} alt='' width={'50%'} />
        </button>
      </div>
      <div className="opcoes">
        <button id="tarefas" onClick={() => mudarConteudoMenu("tarefas")}>
          <p>Tarefas</p>
          <img src={tarefasIcon} alt='' width={'50%'} />
        </button>
        <button id="tarefas" onClick={() => mudarConteudoMenu("mensagens")}>
          <p>Mensagens</p>
          <img src={mensagemIcon} alt='' width={'50%'} />
        </button>
      </div>

      <div className="opcoes ultimas">
        <button id="sair" onClick={() => setScreen('login')}>
          <p>Sair</p>
          <img src={iconeSair} alt='' width={'50%'} />
        </button>
      </div>
    </div>
  )
}
export default MenuPadrao;