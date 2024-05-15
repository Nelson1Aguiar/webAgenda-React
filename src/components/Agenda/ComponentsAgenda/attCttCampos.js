import React from "react";

const AttCttCampos = ({ DigitaNome, DigitaNumero, DigitaEmail, AtualizarContato, mudarConteudoMenu, voltar, perfil,confirmacao,iconeConfirma}) => {
  return (
    <div className="NovoMenu">
      <button className='buttonVoltar' onClick={() => mudarConteudoMenu("AttContato")}>
        <img src={voltar} alt='' width={"60%"} />
      </button>
      <div className='containerCampos'>
        <img src={perfil} alt='' width={"30%"} />
        <input placeholder='Digite o novo nome' type='text' onChange={DigitaNome}></input>
        <input placeholder='Digite o novo número' type='text' onChange={DigitaNumero}></input>
        <input placeholder='Digite o novo e-mail (opcional)' type='text' onChange={DigitaEmail}></input>
        <button onClick={()=>{AtualizarContato();}}>Atualizar</button>
        {confirmacao === true &&(
          <div className='confirmacao'>
            <p>Contato atualizado</p>
            <img src={iconeConfirma} alt='' width={'30%'} />
          </div>
        )}
      </div>
    </div>
  )
}
export default AttCttCampos;