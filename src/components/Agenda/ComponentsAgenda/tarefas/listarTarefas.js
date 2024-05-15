import { useState } from 'react';
import iconeAtualizaTarefa from './img/atualizar.png'
import iconeApagaTarefa from './img/excluirTarefa.png'

function ListaTarefas({ voltar, mudarConteudoMenu, listaContato, deletaTarefa, attTarefa, confirmacao, iconeConfirma, tarefasIcon }) {
    const [idAttTarefa, setIdAttTarefa] = useState(0);
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [data, setData] = useState(null);
    const [tela, setTela] = useState('Ctts');

    return (
        <div>
            {tela === 'Ctts' && (
                <div className='NovoMenu'>
                    <button className='buttonVoltar' onClick={() => mudarConteudoMenu("tarefas")}>
                        <img src={voltar} alt='' width={"60%"} />
                    </button>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                        <img alt='' src={iconeApagaTarefa} width={'10%'}></img>
                        <p>Clique para apagar tarefa</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                        <img alt='' src={iconeAtualizaTarefa} width={'10%'}></img>
                        <p>Clique para atualizar tarefa</p>
                    </div>

                    {listaContato.map(element => (
                        element.tarefaContato.map(tarefas => (
                            <div key={element.id} className='Contatos'>
                                <p>Tarefa: {tarefas.nomeTarefa}</p>
                                <p>Descrição: {tarefas.descricaoTarefa}</p>
                                <p>Data: {tarefas.dataTarefa}</p>
                                <p>Pessoa: {element.nome}</p>
                                <p>Número: {element.numero}</p>
                                <div style={{ display: 'flex' }}>
                                    <button onClick={() => deletaTarefa(tarefas.idTarefa)}>
                                        <img alt='' src={iconeApagaTarefa} width={'60%'}></img>
                                    </button>
                                    <button onClick={() => { setTela('attTarefas'); setIdAttTarefa(tarefas.idTarefa) }}>
                                        <img alt='' src={iconeAtualizaTarefa} width={'60%'}></img>
                                    </button>
                                </div>
                            </div>
                        ))
                    ))}
                </div>
            )}

            {tela === 'attTarefas' && (
                <div className="NovoMenu">
                    <button className='buttonVoltar' onClick={() => setTela('Ctts')}>
                        <img src={voltar} alt='' width={"60%"} />
                    </button>
                    <div className='containerCampos'>
                        <img src={tarefasIcon} alt='' width={"30%"} />
                        <input placeholder='Digite o título da tarefa' type='text' onChange={(e) => setTitulo(e.target.value)}></input>
                        <input placeholder='Digite a data' type='date' onChange={(e) => setData(e.target.value)}></input>
                        <input placeholder='Digite a descrição' type='text' onChange={(e) => setDescricao(e.target.value)}></input>
                        <button onClick={() => attTarefa(idAttTarefa, titulo, descricao, data)}>Atualizar</button>
                        {confirmacao === true && (
                            <div className='confirmacao'>
                                <p>Tarefa atualizada</p>
                                <img src={iconeConfirma} alt='' width={'30%'} />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
export default ListaTarefas;