import { useState } from 'react';
import axios from 'axios';
import * as S from './styled'
import {  useNavigate } from 'react-router-dom'


function App(props) {
  const [usuario, setUsuario] = useState('');
  const history = useNavigate();
  function handlePesquisa(){
   axios.get(` https://api.github.com/users/${usuario}/repos`).then(response => {
     const repositories = response.data;
     const repositoriesName = [];
     repositories.map((repository) => {
       repositoriesName.push(repository.name);
     });
     localStorage.setItem('repositoriesName',JSON.stringify(repositoriesName));
     history('/repositories');
   });
  }
  return (
    <S.Container1>
       <S.Container>
         <S.Input  value={usuario} className="usuarioInput" placeholder="usuário" onChange={e => setUsuario(e.target.value) }></S.Input>
         <S.Buton type="button" onClick={handlePesquisa}>Pesquisar</S.Buton>
       </S.Container>
    </S.Container1>
  );
}

export default App;
