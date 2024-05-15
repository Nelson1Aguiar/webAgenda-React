import iconeAdicionaTarefa from './img/adicionar-tarefa.png'
import iconeListaTarefa from './img/tarefa.png'

function TarefasMenuScreen({ voltar, mudarConteudoMenu }) {
    return (
        <div id="Menu" className="Menu">
            <button className='buttonVoltar principal' onClick={() => mudarConteudoMenu("AGENDA")}>
                <img src={voltar} alt='' width={"60%"} />
            </button>
            <h1>Tarefas</h1>
            <div className="opcoes">
                <button id="addTarefa" onClick={() => mudarConteudoMenu('addTarefa')} >
                    <p>Adicionar Tarefa</p>
                    <img src={iconeAdicionaTarefa} alt='' width={'50%'} />
                </button>
                <button id="listarTarefa" onClick={() => mudarConteudoMenu("listarTarefa")} >
                    <p>Listar
                        <br></br>
                        Tarefas</p>
                    <img src={iconeListaTarefa} alt='' width={'50%'} />
                </button>
            </div>
        </div>
    )
}
export default TarefasMenuScreen;