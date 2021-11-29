import React, { useEffect,useState }from 'react';
import {List,Title,ItemList,Container,LinkHome}from './styled';
import { useNavigate } from 'react-router-dom'
 

function Repositories(){
  const [ repositories, setRepositories] = useState([]);
  const history = useNavigate();
  useEffect(() =>{
    let  repositoriesName = localStorage.getItem('repositoriesName');
    if(repositoriesName != null){
      repositoriesName = JSON.parse(repositoriesName);
      setRepositories(repositoriesName);
      localStorage.clear();
    } else {
      history('/');
    }
  },[]);
  return(
    <>
       <Container>
         <Title>Repositories</Title>
            <List>
                 {repositories.map(repository => {
                   return (
                     <ItemList>{repository}</ItemList>
                   )
                 })}
            </List>
            <LinkHome to="/">Voltar</LinkHome>;
       </Container>
    </>
  );
}

export default Repositories;