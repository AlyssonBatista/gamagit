import React from 'react';
import {List,Title,ItemList,Container}from './styled';

function Repositories(){
  return(
    <Container>
        <Title>Repositories</Title>
          <List>
              <ItemList>Repositório 1</ItemList>
              <ItemList>Repositório 2</ItemList>
              <ItemList>Repositório 3</ItemList>
              <ItemList>Repositório 4</ItemList>
              <ItemList>Repositório 5</ItemList>
              <ItemList>Repositório 6</ItemList>
              <ItemList>Repositório 7</ItemList>
              <ItemList>Repositório 8</ItemList>
              <ItemList>Repositório 9</ItemList>
              <ItemList>Repositório 10</ItemList>
          </List>
    </Container>
  )
}

export default Repositories;