import './agenda.css';
import { useState, useEffect } from 'react';
import apagar from './img\\iconesTeclado\\excluir.png';
import ligar from './img\\iconesTeclado\\whatsapp.png';
import AddCtt from './img\\iconesMenu\\adicionar-amigo.png';
import deleteCtt from './img\\iconesMenu\\ExcluirContato.png';
import updateCtt from './img\\iconesMenu\\atualizar.png';
import listaCtt from './img\\iconesMenu\\agenda.png';
import voltar from './img\\iconesMenu\\volte.png';
import perfil from './img\\iconesMenu\\perfil.png';
import iconeAtualizar from './img\\iconesMenu\\contatos.png';
import iconeDiscar from './img\\iconesMenu\\teclado.png';
import iconeDeletar from './img\\iconesMenu\\apagar.png';
import iconeConfirma from './img\\iconesMenu\\marca-de-verificacao.png'
import AdicionarCtt from './ComponentsAgenda/addCtt';
import UpdateContato from './ComponentsAgenda/attCtt';
import MenuPadrao from './ComponentsAgenda/menu';
import AttCttCampos from './ComponentsAgenda/attCttCampos';
import ListarContatos from './ComponentsAgenda/listarCtt';
import DeletarContato from './ComponentsAgenda/deleteContato';
import tarefasIcon from './img/iconesMenu/lista-de-afazeres.png';
import mensagemIcon from './img/iconesMenu/balao-de-bate-papo.png';
import TarefasMenuScreen from './ComponentsAgenda/tarefas/tarefasMenu';
import AddTarefa from './ComponentsAgenda/tarefas/addTarefas';
import ListaTarefas from './ComponentsAgenda/tarefas/listarTarefas';
import MensagemMenu from './ComponentsAgenda/mensagem/mensagens';
import listarMensagemIcon from './img/iconesMenu/mensagens-de-texto.png';
import enviarMensagensIcon from './img/iconesMenu/enviado.png';
import EnviarMensagem from './ComponentsAgenda/mensagem/enviaMensagem';
import ListarMensagens from './ComponentsAgenda/mensagem/listaMensagem';
import iconeSair from './img/iconesMenu/sair.png';

function AgendaPacientes({ setScreen, cadastrados }) {
    class Contato {
        constructor(nome, numero, email, tarefa, enviadas, recebidas) {
            this.nomeContato = nome;
            this.numeroContato = numero;
            this.emailContato = email;
            this.tarefaContato = tarefa || [];
            this.mensagensEnviadas = enviadas || [];
            this.mensagensRecebidas = recebidas || [];
        }

        get nome() {
            return this.nomeContato;
        }

        set nome(Nome) {
            this.nomeContato = Nome;
        }
        get numero() {
            return this.numeroContato;
        }

        set numero(Numero) {
            this.numeroContato = Numero;
        }

        get email() {
            return this.emailContato;
        }

        set email(Email) {
            this.emailContato = Email;
        }

        get tarefa() {
            return this.tarefaContato;
        }

        set tarefa(Tarefa) {
            this.tarefaContato = Tarefa;
        }

        get enviadas() {
            return this.mensagensEnviadas;
        }

        set enviadas(Enviadas) {
            this.mensagensEnviadas = Enviadas;
        }

        get recebidas() {
            return this.mensagensRecebidas;
        }

        set recebidas(Recebidas) {
            this.mensagensRecebidas = Recebidas;
        }
    }

    class Tarefa {
        constructor(nome, data, descricao, id) {
            this.nomeTarefa = nome;
            this.dataTarefa = data;
            this.descricaoTarefa = descricao;
            this.idTarefa = id;
        }

        get nome() {
            return this.nomeTarefa;
        }

        set nome(Nome) {
            this.nomeTarefa = Nome;
        }
        get data() {
            return this.dataTarefa;
        }

        set data(Data) {
            this.dataTarefa = Data;
        }

        get descricao() {
            return this.descricaoTarefa;
        }

        set descricao(Descricao) {
            this.descricaoTarefa = Descricao;
        }

        get id() {
            return this.idTarefa;
        }

        set id(Id) {
            this.idTarefa = Id;
        }
    }
    
    class Mensagem {
        constructor(emissor, receptor, conteudo, id) {
            this.emissorMensagem = emissor;
            this.receptorMensagem = receptor;
            this.conteudoMensagem = conteudo;
            this.idMensagem = id;
        }

        get emissor() {
            return this.emissorMensagem;
        }

        set emissor(Emissor) {
            this.emissorMensagem = Emissor;
        }
        get receptor() {
            return this.receptorMensagem;
        }

        set receptor(Receptor) {
            this.receptorMensagem = Receptor;
        }

        get conteudo() {
            return this.conteudoMensagem;
        }

        set conteudo(Conteudo) {
            this.conteudoMensagem = Conteudo;
        }

        get id() {
            return this.idTarefa;
        }

        set id(Id) {
            this.idTarefa = Id;
        }
    }

    const [numero, setNumero] = useState('');
    const [menuSelecionado, setMenuSelecionado] = useState("AGENDA");
    const [nomeCtt, setNomeCtt] = useState('');
    const [numCtt, setNumCtt] = useState('');
    const [email, setEmail] = useState('');
    const [contatosFiltrados, setContatosFiltrados] = useState([]);
    const [confirmacao, setConfirmacao] = useState(false);
    const [cttAtualizar, setCttAtualizar] = useState({ nome: '', numero: '', email: '' });
    const [contatoManipulaTarefa, setContatoManipulaTarefa] = useState('');
    const [incrementIdTarefa, setIncrementIdTarefa] = useState(0);
    const [incrementIdMensagem, setIncrementIdMensagem] = useState(0);


    useEffect(() => {
        setContatosFiltrados(cadastrados.contatosPessoa);
    }, [cadastrados.contatosPessoa]);

    const discar = (value) => {
        setNumero(numero + value);
    }

    const puxaNumero = (value) => {
        setNumero(value);
    }

    const apagarDiscagem = () => {
        var numeroAux = numero;
        numeroAux = numeroAux.slice(0, -1);
        setNumero(numeroAux);
    }

    const mudarConteudoMenu = (novoConteudo) => {
        setMenuSelecionado(novoConteudo);
    };

    const mensagemWpp = () => {
        if (numero.length === 0) {
            alert("Número não digitado!");
            return;
        }
        var wpp = "https://wa.me/55".concat(numero);
        window.location.href = wpp;
    }

    const DigitaNome = (event) => {
        const valor = event.target.value;
        setNomeCtt(valor);
    }

    const DigitaNumero = (event) => {
        const valor = event.target.value;
        setNumCtt(valor);
    }
    const DigitaEmail = (event) => {
        const valor = event.target.value;
        setEmail(valor);
    }

    const CheckLista = () => {
        for (let i = 0; i < cadastrados.contatosPessoa.length; i++) {
            if (cadastrados.contatosPessoa[i].numero === numCtt) {
                return false;
            }
        }
        return true;
    }

    const criarNovoContato = () => {
        var novoContato = new Contato(nomeCtt, numCtt, email);

        const novaListaContatos = [...cadastrados.contatosPessoa, novoContato];
        if (numCtt.length > 0 && nomeCtt.length > 0) {
            if (CheckLista()) {
                cadastrados.contatos = novaListaContatos;
                console.log(cadastrados);

                setConfirmacao(true);

                setTimeout(function () {
                    setConfirmacao(false);
                }, 2000);
            }
            else {
                alert("Número já cadastrado!");
            }
        }
        else {
            alert("Nome e número são obrigatórios!");
        }
    }

    const buscar = (event) => {
        const termo = event.target.value.toLowerCase();

        if (termo.trim() === '') {
            setContatosFiltrados(cadastrados.contatosPessoa);
            return;
        }

        const filtro = [];

        cadastrados.contatosPessoa.forEach(function (contato) {
            if (contato.nome.toLowerCase().includes(termo) || contato.numero.toLowerCase().includes(termo) || contato.email.toLowerCase().includes(termo)) {
                filtro.push(contato);
            }
        });

        setContatosFiltrados(filtro);
    }
    const AtualizarContato = () => {
        const listaNova = [...cadastrados.contatosPessoa];
        for (let i = 0; i < listaNova.length; i++) {
            if (listaNova[i].numero === cttAtualizar.numero) {
                if (numCtt.length > 0 && nomeCtt.length > 0) {
                    if (numCtt !== listaNova[i].numero) {
                        if (CheckLista()) {
                            listaNova[i].numero = numCtt;
                            listaNova[i].nome = nomeCtt;
                            listaNova[i].email = email;
                            setConfirmacao(true);
                            setTimeout(function () {
                                setConfirmacao(false);
                            }, 2000);
                            cadastrados.contatosPessoa = listaNova;
                        }
                        else {
                            alert("Número já cadastrado!");
                        }
                    }
                    else {
                        listaNova[i].numero = numCtt;
                        listaNova[i].nome = nomeCtt;
                        listaNova[i].email = email;
                        setConfirmacao(true);
                        setTimeout(function () {
                            setConfirmacao(false);
                        }, 2000);
                        cadastrados.contatosPessoa = listaNova;
                    }
                }
                else {
                    alert("Nome e número são obrigatórios!");
                }
            }
        }
    }

    const deletarContato = (num) => {
        const listaNova = cadastrados.contatosPessoa.filter((contato) =>
            contato.numero !== num
        );
        cadastrados.contatosPessoa = listaNova;
        setContatosFiltrados(listaNova);
    }

    const novaTarefa = (nome, data, descricao) => {
        var id = incrementIdTarefa;
        var tarefaAux = new Tarefa(nome, data, descricao, id);
        for (let i = 0; i < cadastrados.contatosPessoa.length; i++) {
            if (cadastrados.contatosPessoa[i].numero === contatoManipulaTarefa) {
                cadastrados.contatosPessoa[i].tarefaContato = [...cadastrados.contatosPessoa[i].tarefaContato, tarefaAux];
                setConfirmacao(true);
                id += 1;
                setIncrementIdTarefa(id);
                setTimeout(function () {
                    setConfirmacao(false);
                }, 2000);
            }
        }
        console.log(cadastrados);
    }

    const deletaTarefa = (id) => {
        for (let i = 0; i < cadastrados.contatosPessoa.length; i++) {
            const novasTarefas = cadastrados.contatosPessoa[i].tarefaContato.filter(tarefas => tarefas.idTarefa !== id);
            cadastrados.contatosPessoa[i].tarefaContato = novasTarefas;
        }
        setContatosFiltrados([]);
        setTimeout(function () {
            setContatosFiltrados(cadastrados.contatosPessoa);
        }, 1);
    }

    const attTarefa = (id, nome, data, descricao) => {
        for (let i = 0; i < cadastrados.contatosPessoa.length; i++) {
            for (let j = 0; j < cadastrados.contatosPessoa[i].tarefaContato.length; j++) {
                if (cadastrados.contatosPessoa[i].tarefaContato[j].idTarefa === id) {
                    cadastrados.contatosPessoa[i].tarefaContato[j].nomeTarefa = nome;
                    cadastrados.contatosPessoa[i].tarefaContato[j].dataTarefa = data;
                    cadastrados.contatosPessoa[i].tarefaContato[j].descricaoTarefa = descricao;
                }
            }
        }
        setConfirmacao(true);
        setTimeout(function () {
            setConfirmacao(false);
        }, 2000);
    }

    const enviarMensagem = (emissor, receptor, conteudo) => {
        const mensagem = new Mensagem(emissor, receptor, conteudo, incrementIdMensagem);
        var aux = incrementIdMensagem + 1;
        setIncrementIdMensagem(aux);
        for (let i = 0; i < cadastrados.contatosPessoa.length; i++) {
            if (cadastrados.contatosPessoa[i].numero === emissor) {
                const listaAuxEnviados = cadastrados.contatosPessoa[i].mensagensEnviadas || [];
                cadastrados.contatosPessoa[i].mensagensEnviadas = [...listaAuxEnviados, mensagem];
            }
            if (cadastrados.contatosPessoa[i].numero === receptor) {
                const listaAuxRecebidos = cadastrados.contatosPessoa[i].mensagensRecebidas || [];
                cadastrados.contatosPessoa[i].mensagensRecebidas = [...listaAuxRecebidos, mensagem];
            }
        }
        console.log(cadastrados.contatosPessoa);
        setConfirmacao(true);
        setTimeout(function () {
            setConfirmacao(false);
        }, 2000);
    }

    return (
        <div className="container">
            <div className="teclado">
                <p id="numero">{numero}</p>
                <div className="botao">
                    <button id="1" onClick={() => discar('1')}>1</button>
                    <button id="2" onClick={() => discar('2')}>2</button>
                    <button id="3" onClick={() => discar('3')}>3</button>
                </div>
                <div className="botao">
                    <button id="4" onClick={() => discar('4')}>4</button>
                    <button id="5" onClick={() => discar('5')}>5</button>
                    <button id="6" onClick={() => discar('6')}>6</button>
                </div>
                <div className="botao">
                    <button id="7" onClick={() => discar('7')}>7</button>
                    <button id="8" onClick={() => discar('8')}>8</button>
                    <button id="9" onClick={() => discar('9')}>9</button>
                </div>
                <div className="botao">
                    <button id="numAsterisco" onClick={() => discar('*')}>*</button>
                    <button id="0" onClick={() => discar('0')}>0</button>
                    <button id="numHash" onClick={() => discar('#')}>#</button>
                </div>
                <div className="botao">
                    <button className="ligar" id="ligar" onClick={mensagemWpp}>
                        <img src={ligar} alt='botao de Ligar' />
                    </button>
                    <button className="apagar" id="apagar" onClick={apagarDiscagem}>
                        <img src={apagar} alt='botao de Apagar' />
                    </button>
                </div>
            </div>
            {menuSelecionado === "AGENDA" && (
                <MenuPadrao AddCtt={AddCtt} updateCtt={updateCtt} listaCtt={listaCtt} deleteCtt={deleteCtt} mudarConteudoMenu={mudarConteudoMenu}
                    voltar={voltar} setScreen={setScreen} tarefasIcon={tarefasIcon} mensagemIcon={mensagemIcon} iconeSair={iconeSair} />
            )}

            {menuSelecionado === "AddContato" && (
                <AdicionarCtt DigitaNome={DigitaNome} DigitaNumero={DigitaNumero} DigitaEmail={DigitaEmail} criarNovoContato={criarNovoContato}
                    mudarConteudoMenu={mudarConteudoMenu} voltar={voltar} perfil={perfil} iconeConfirma={iconeConfirma} confirmacao={confirmacao} />
            )}

            {menuSelecionado === "AttContato" && (
                <UpdateContato voltar={voltar} mudarConteudoMenu={mudarConteudoMenu} buscar={buscar} contatosFiltrados={contatosFiltrados}
                    setCttAtualizar={setCttAtualizar} iconeAtualizar={iconeAtualizar} />
            )}

            {menuSelecionado === "AttContatoCampos" && (
                <AttCttCampos DigitaNome={DigitaNome} DigitaNumero={DigitaNumero} DigitaEmail={DigitaEmail} AtualizarContato={AtualizarContato}
                    mudarConteudoMenu={mudarConteudoMenu} voltar={voltar} perfil={perfil} confirmacao={confirmacao} iconeConfirma={iconeConfirma} />
            )}

            {menuSelecionado === "ListarContato" && (
                <ListarContatos voltar={voltar} mudarConteudoMenu={mudarConteudoMenu} listaContato={contatosFiltrados} puxaNumero={puxaNumero}
                    iconeDiscar={iconeDiscar} />
            )}

            {menuSelecionado === "DeleteContato" && (
                <DeletarContato voltar={voltar} mudarConteudoMenu={mudarConteudoMenu} contatosFiltrados={contatosFiltrados} buscar={buscar}
                    iconeDeletar={iconeDeletar} deletarContato={deletarContato} />
            )}

            {menuSelecionado === "tarefas" && (
                <TarefasMenuScreen voltar={voltar} mudarConteudoMenu={mudarConteudoMenu} />
            )}

            {menuSelecionado === "addTarefa" && (
                <AddTarefa voltar={voltar} mudarConteudoMenu={mudarConteudoMenu} contatosFiltrados={contatosFiltrados} buscar={buscar}
                    confirmacao={confirmacao} iconeConfirma={iconeConfirma} tarefasIcon={tarefasIcon} novaTarefa={novaTarefa}
                    setContatoAddTarefa={setContatoManipulaTarefa} />
            )}

            {menuSelecionado === "listarTarefa" && (
                <ListaTarefas voltar={voltar} mudarConteudoMenu={mudarConteudoMenu} listaContato={contatosFiltrados}
                    deletaTarefa={deletaTarefa} setContatoAttTarefa={setContatoManipulaTarefa} attTarefa={attTarefa}
                    menuSelecionado={menuSelecionado} confirmacao={confirmacao} iconeConfirma={iconeConfirma} tarefasIcon={tarefasIcon} />
            )}

            {menuSelecionado === "mensagens" && (
                <MensagemMenu voltar={voltar} mudarConteudoMenu={mudarConteudoMenu} listarMensagemIcon={listarMensagemIcon}
                    enviarMensagensIcon={enviarMensagensIcon} />
            )}

            {menuSelecionado === "enviaMensagem" && (
                <EnviarMensagem voltar={voltar} mudarConteudoMenu={mudarConteudoMenu} contatosFiltrados={contatosFiltrados} buscar={buscar} 
                iconeEnviar={enviarMensagensIcon} iconeMensagem={mensagemIcon} confirmacao={confirmacao} iconeConfirma={iconeConfirma}
                 enviarMensagem={enviarMensagem} />
            )}
            
            {menuSelecionado ==="listaMensagem" &&(
                <ListarMensagens voltar={voltar} mudarConteudoMenu={mudarConteudoMenu} listaContato={contatosFiltrados}/>
            )}
        </div>
    );
}

export default AgendaPacientes;
