function MensagemMenu({voltar, mudarConteudoMenu, listarMensagemIcon, enviarMensagensIcon}){
    return(
        <div id="Menu" className="Menu">
        <button className='buttonVoltar principal' onClick={() => mudarConteudoMenu("AGENDA")}>
            <img src={voltar} alt='' width={"60%"} />
        </button>
        <h1>Mensagens</h1>
        <div className="opcoes">
            <button id="addMensagem" onClick={() => mudarConteudoMenu('enviaMensagem')} >
                <p>Enviar mensagem</p>
                <img src={enviarMensagensIcon} alt='' width={'50%'} />
            </button>
            <button id="listarMensagens" onClick={() => mudarConteudoMenu("listaMensagem")} >
                <p>Listar mensagens</p>
                <img src={listarMensagemIcon}  alt='' width={'50%'} />
            </button>
        </div>
    </div>
    )
}
export default MensagemMenu