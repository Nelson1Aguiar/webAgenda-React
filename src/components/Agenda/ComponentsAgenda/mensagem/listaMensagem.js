function ListarMensagens({ voltar, mudarConteudoMenu, listaContato }) {
    return (
        <div className='NovoMenu'>
            <button className='buttonVoltar' onClick={() => mudarConteudoMenu("mensagens")}>
                <img src={voltar} alt='' width={"60%"} />
            </button>
            {listaContato.map(element => (
                element.mensagensEnviadas.map(mensagens => (
                    <div key={element.id} className='Contatos'>
                        <p>Enviou: {mensagens.emissorMensagem}</p>
                        <p>Recebeu: {mensagens.receptorMensagem}</p>
                        <p style={{flexWrap:"wrap"}}>Mensagem: {mensagens.conteudoMensagem}</p>
                    </div>
                ))
            ))}
        </div>
    )
}
export default ListarMensagens;