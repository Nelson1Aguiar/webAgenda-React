import { useState } from "react";
import React from "react";
import iconeAdicionar from './img/mais.png';

function AddTarefa({ voltar, mudarConteudoMenu, contatosFiltrados, buscar, confirmacao, iconeConfirma, tarefasIcon, novaTarefa, setContatoAddTarefa }) {
    const [tela, setTela] = useState('Ctts');
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [data, setData] = useState(null);

    return (
        <div>
            {tela === 'Ctts' && (
                <div className='NovoMenu'>
                    <button className='buttonVoltar' onClick={() => mudarConteudoMenu("tarefas")}>
                        <img src={voltar} alt='' width={"60%"} />
                    </button>
                    <div className='containerInputFiltro'>
                        <input placeholder='Digite o nome, número ou e-mail' type='text' onChange={buscar}></input>
                    </div>
                    {contatosFiltrados.map(contato => (
                        <div key={contato.id} className='Contatos'>
                            <p>Nome: {contato.nome}</p>
                            <p>Número: {contato.numero}</p>
                            {contato.email && <p>Email:{contato.email}</p>}
                            <button onClick={() => { setTela("Campos"); setContatoAddTarefa(contato.numero) }}>
                                <img alt='' src={iconeAdicionar} width={"60%"} />
                            </button>
                        </div>
                    ))}
                </div>
            )}
            {tela === "Campos" && (
                <div className="NovoMenu">
                    <button className='buttonVoltar' onClick={() => { setTela("Ctts"); setContatoAddTarefa('') }}>
                        <img src={voltar} alt='' width={"60%"} />
                    </button>
                    <div className='containerCampos'>
                        <img src={tarefasIcon} alt='' width={"30%"} />
                        <input placeholder='Digite o título da tarefa' type='text' onChange={(e) => setTitulo(e.target.value)}></input>
                        <input placeholder='Digite a data' type='date' onChange={(e) => setData(e.target.value)}></input>
                        <input placeholder='Digite a descrição' type='text' onChange={(e) => setDescricao(e.target.value)}></input>
                        <button onClick={() => novaTarefa(titulo, data, descricao)}>Adicionar</button>
                        {confirmacao === true && (
                            <div className='confirmacao'>
                                <p>Tarefa salva</p>
                                <img src={iconeConfirma} alt='' width={'30%'} />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
export default AddTarefa;