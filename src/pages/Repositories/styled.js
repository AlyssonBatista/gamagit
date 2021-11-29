import styled from "styled-components";
import { Link } from 'react-router-dom'
  
export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

`
export const Title = styled.h1`
  text-align: center;
  font-size:2rem;
  font-family: sans-serif;
  color: #1675F2;
`
export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px;
  font-family:sans-serif;
`
export const ItemList = styled.li`
  margin: .5rem 0;
  Background: #F26666;
  color: #4B4B4B;
  padding: .5rem;
`
export const LinkHome = styled(Link)`
display: block;
width: 4rem;
text-align: center;
margin: 2rem auto;
background-color: #F26666;
padding: .5rem 0;
text-decoration: none;
color: #4B4B4B
`

