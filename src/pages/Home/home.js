import { useState } from 'react';
import axios from 'axios';
import {Input} from './styled'


function App(props) {
  const [usuario, setUsuario] = useState('');
  function handlePesquisa(){
   axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data));
  }
  return (
    <>
      <Input  value={usuario} className="usuarioInput" placeholder="usuário" onChange={e => setUsuario(e.target.value) }></Input>
      <button type="button" onClick={handlePesquisa}>Pesquisar</button>
    </>
  );
}

export default App;
