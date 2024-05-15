import React from "react";

const ListarContatos = ({ voltar, mudarConteudoMenu, listaContato, puxaNumero, iconeDiscar }) => {
    return (
        <div className='NovoMenu'>
            <button className='buttonVoltar' onClick={() => mudarConteudoMenu("AGENDA")}>
                <img src={voltar} alt='' width={"60%"} onClick={() => mudarConteudoMenu("AGENDA")} />
            </button>
            {listaContato.length === 0 && (
                <p style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", marginTop: "40px" }}>Nenhum contato salvo</p>
            )}
            {listaContato.map(contato => (
                <div key={contato.id} className='Contatos'>
                    <p>Nome: {contato.nome}</p>
                    <p>Número: {contato.numero}</p>
                    {contato.email && <p>Email:{contato.email}</p>}
                    <button onClick={() => puxaNumero(contato.numero)}>
                        <img src={iconeDiscar} alt='' width={"60%"} />
                    </button>
                </div>
            ))}
        </div>
    )
}
export default ListarContatos;