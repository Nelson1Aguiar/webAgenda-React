import './user.css';
import { useState, useEffect } from 'react';
function Usuario({ setScreen, cadastrados, setCadastrados, setIdLogado, incrementId, setIncrementId }) {
    class Pessoa {
        constructor(nome, senha, email, id, contatos) {
            this.nomePessoa = nome;
            this.senhaPessoa = senha;
            this.emailPessoa = email;
            this.idPessoa = id;
            this.contatosPessoa = contatos || [];
        }

        get nome() {
            return this.nomePessoa;
        }

        set nome(Nome) {
            this.nomePessoa = Nome;
        }
        get senha() {
            return this.senhaPessoa;
        }

        set senha(Senha) {
            this.senhaPessoa = Senha;
        }

        get email() {
            return this.emailPessoa;
        }

        set email(Email) {
            this.emailPessoa = Email;
        }

        get id() {
            return this.idPessoa;
        }

        set id(Id) {
            this.idPessoa = Id;
        }

        get contatos() {
            return this.contatosPessoa;
        }

        set contatos(Contatos) {
            this.contatosPessoa = Contatos;
        }
    }

    const [nomeValue, setNomeValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [senhaValue, setSenhaValue] = useState("");
    const [tela, setTela] = useState('LOGIN');
    const [classe, setClasse] = useState('caixaLogin');
    const [aviso, setAviso] = useState("");

    useEffect(() => {
        console.log(cadastrados);
    }, [cadastrados]);

    const criarConta = () => {
        if (nomeValue.length === 0 || emailValue.length === 0 || senhaValue.length === 0) {
            setAviso("ERROCADASTRO_PREENCHER");
            return;
        }
        for (let i = 0; i < cadastrados.length; i++) {
            if (cadastrados[i].emailPessoa === emailValue) {
                setAviso("ERROCADASTRO");
                return;
            }
        }
        var pessoa = new Pessoa(nomeValue, senhaValue, emailValue, incrementId, []);
        var novoCadastro = [...cadastrados, pessoa];
        var incrementar = incrementId + 1;
        setCadastrados(novoCadastro);
        setIncrementId(incrementar);
        setAviso("");
        mudaTela('LOGIN');
    }

    const logar = () => {
        if (cadastrados.length === 0) {
            setAviso("ERROLOGIN");
            return;
        }
        for (let i = 0; i < cadastrados.length; i++) {
            if (cadastrados[i].email === emailValue && cadastrados[i].senha === senhaValue) {
                setScreen('homePage');
                setIdLogado(cadastrados[i].id);
                setAviso("");
            }
            else {
                setAviso("ERROLOGIN");
            }
        }
    }

    const mudaTela = (Tela) => {
        setEmailValue("");
        setSenhaValue("");
        setNomeValue("");
        setClasse("caixaLogin rotacao");
        setTimeout(function () {
            setClasse("caixaLogin");
        }, 0);
        setTela(Tela);
    }
    return (
        <div className="container">
            {tela === "LOGIN" && (
                <div className={classe}>
                    <h1 className='tituloLogin'>Acesse sua conta</h1>
                    <p className='paragrafoLogin'>E tenha acesso a todos os seus contatos</p>
                    <div className="camposLogin">
                        <label className='labelLogin' htmlFor="email">E-mail</label>
                        <input className='inputsLogin' id="email" placeholder="abc@mail.com" onChange={(e) => setEmailValue(e.target.value)}></input>
                        <br></br>
                        <label className='labelLogin' htmlFor="senha">Senha</label>
                        <input className='inputsLogin' id="senha" placeholder="***********" type='password' onChange={(e) => setSenhaValue(e.target.value)}></input>
                        {aviso === "ERROLOGIN" && (
                            <p className='mensagem'>E-mail e/ou senha incorretos</p>
                        )}
                        <div className='botoes'>
                            <button className='buttonLogin' onClick={logar}>Entrar</button>
                            <button className='buttonLogin' onClick={() => mudaTela("CADASTRO")}>Cadastre-se</button>
                        </div>
                    </div>
                </div>
            )}
            {tela === "CADASTRO" && (
                <div className={classe}>
                    <h1 className='tituloLogin'>Crie sua conta</h1>
                    <p className='paragrafoLogin'>E tenha acesso a todos os seus contatos</p>
                    <div className="camposCadastro">
                        <label className='labelLogin' htmlFor="nome">Nome Completo</label>
                        <input className='inputsLogin' id="nome" placeholder="Ex: João Rodrigues Lacerda" onChange={(e) => setNomeValue(e.target.value)}></input>
                        <br></br>
                        <label className='labelLogin' htmlFor="email">E-mail</label>
                        <input className='inputsLogin' id="email" placeholder="abc@mail.com" onChange={(e) => setEmailValue(e.target.value)}></input>
                        <br></br>
                        <label className='labelLogin' htmlFor="senha">Senha</label>
                        <input className='inputsLogin' id="senha" placeholder="***********" type='password' onChange={(e) => setSenhaValue(e.target.value)}></input>
                        {aviso === "ERROCADASTRO" && (
                            <p className='mensagem'>Endereço de e-mail já cadastrado</p>
                        )}
                        {aviso === "ERROCADASTRO_PREENCHER" && (
                            <p className='mensagem'>É necessário preencher todos os campos</p>
                        )}
                        <div className='botoes'>
                            <button className='buttonLogin' onClick={criarConta}>Criar Conta</button>
                        </div>
                    </div>
                    <p className='paragrafoLogin' style={{ marginBottom: 0 }}>Já tem uma conta?</p>
                    <p className='voltarLogin paragrafoLogin' onClick={() => mudaTela("LOGIN")}>Clique aqui!</p>
                </div>
            )}
        </div>
    )
}
export default Usuario;