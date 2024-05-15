import Usuario from './components/User/user.js';
import AgendaPacientes from './components/Agenda/Agenda.js';
import React, { useState } from 'react';

function App() {
  const [cadastrados, setCadastrados] = useState([]);
  const [incrementId, setIncrementId] = useState(0);
  const [idLogado, setIdLogado] = useState(0);
  const [screen, setScreen] = useState('login');

  const buscarUser = () => {
    for (let i = 0; i < cadastrados.length; i++) {
      if (cadastrados[i].id === idLogado) {
        return cadastrados[i];
      }
    }
    return null;
  }

  return (
    <div>
      {screen === "login" && (
        <Usuario setScreen={setScreen} cadastrados={cadastrados} setCadastrados={setCadastrados} setIdLogado={setIdLogado}
          incrementId={incrementId} setIncrementId={setIncrementId} />
      )}
      {screen === 'homePage' && (
        <AgendaPacientes setScreen={setScreen} cadastrados={buscarUser()} />
      )}
    </div>
  );
}
export default App;
