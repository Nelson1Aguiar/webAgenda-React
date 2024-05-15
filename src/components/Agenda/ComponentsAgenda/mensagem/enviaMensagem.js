import { useState } from "react";
import React from "react";

function EnviarMensagem({ voltar, mudarConteudoMenu, contatosFiltrados, buscar, iconeEnviar, iconeMensagem, confirmacao, iconeConfirma, enviarMensagem }) {
    const [tela, setTela] = useState('CttsEnviar');
    const [emissor, setEmissor] = useState('');
    const [destinatario, setDestinatario] = useState('');
    const [conteudo, setConteudo] = useState('');

    return (
        <div>
            {tela === 'CttsEnviar' && (
                <div className='NovoMenu'>
                    <button className='buttonVoltar' onClick={() => mudarConteudoMenu("mensagens")}>
                        <img src={voltar} alt='' width={"60%"} />
                    </button>
                    <div className='containerInputFiltro'>
                        <input placeholder='Digite o nome, número ou e-mail' type='text' onChange={buscar}></input>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <p>Escolha quem enviará a mensagem</p>
                    </div>
                    {contatosFiltrados.map(contato => (
                        <div key={contato.id} className='Contatos'>
                            <p>Nome: {contato.nome}</p>
                            <p>Número: {contato.numero}</p>
                            {contato.email && <p>Email:{contato.email}</p>}
                            <button onClick={() => {setTela("CttsReceber"); setEmissor(contato.numero)}}>
                                <img alt='' src={iconeEnviar} width={"60%"} />
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {tela === "CttsReceber" && (
                <div className='NovoMenu'>
                    <button className='buttonVoltar' onClick={() => setTela('CttsEnviar')}>
                        <img src={voltar} alt='' width={"60%"} />
                    </button>
                    <div className='containerInputFiltro'>
                        <input placeholder='Digite o nome, número ou e-mail' type='text' onChange={buscar}></input>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <p>Escolha quem receberá a mensagem</p>
                    </div>
                    {contatosFiltrados.map(contato => (
                        <div key={contato.id} className='Contatos'>
                            <p>Nome: {contato.nome}</p>
                            <p>Número: {contato.numero}</p>
                            {contato.email && <p>Email:{contato.email}</p>}
                            <button onClick={() => {setTela("Campos"); setDestinatario(contato.numero)}}>
                                <img alt='' src={iconeMensagem} width={"60%"} />
                            </button>
                        </div>
                    ))}
                </div>
            )}
            {tela === "Campos" && (
                <div className="NovoMenu">
                    <button className='buttonVoltar' onClick={() => setTela('CttsReceber')}>
                        <img src={voltar} alt='' width={"60%"} />
                    </button>
                    <div className='containerCampos'>
                        <img src={iconeMensagem} alt='' width={"30%"} />
                        <input placeholder='Digite a mensagem' type='text' onChange={(e) => setConteudo(e.target.value)}></input>
                        <button onClick={() => enviarMensagem(emissor,destinatario,conteudo)}>Enviar</button>
                        {confirmacao === true && (
                            <div className='confirmacao'>
                                <p>Mensagem enviada</p>
                                <img src={iconeConfirma} alt='' width={'30%'} />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
export default EnviarMensagem;