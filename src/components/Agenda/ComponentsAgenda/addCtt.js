import React from 'react';

const AdicionarCtt = ({ DigitaNome, DigitaNumero, DigitaEmail, criarNovoContato, mudarConteudoMenu, voltar, perfil, iconeConfirma, confirmacao}) => {
  return (
    <div className="NovoMenu">
      <button className='buttonVoltar' onClick={() => mudarConteudoMenu("AGENDA")}>
        <img src={voltar} alt='' width={"60%"} />
      </button>
      <div className='containerCampos'>
        <img src={perfil} alt='' width={"30%"} />
        <input placeholder='Digite o nome' type='text' onChange={DigitaNome}></input>
        <input placeholder='Digite o número' type='text' onChange={DigitaNumero}></input>
        <input placeholder='Digite o e-mail (opcional)' type='text' onChange={DigitaEmail}></input>
        <button onClick={()=>{criarNovoContato()}}>Salvar</button>
        {confirmacao === true &&(
          <div className='confirmacao'>
            <p>Contato Salvo</p>
            <img src={iconeConfirma} alt='' width={'30%'} />
          </div>
        )}

      </div>
    </div>
  );
}
export default AdicionarCtt;