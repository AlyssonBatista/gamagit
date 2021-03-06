import styled from "styled-components";
export const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background: #F26666;
`
export const Container1 = styled.div`
width: 300px;
height: 300px;

`

export const Input = styled.input`
  border: 1px solid #123453;
  height: 2rem;
  padding: 0 .5rem;
  border-radius: .25rem 0 0 .25rem;

  &:focus,
  &:active {
    outline:none;
    box-shadow: none;
  }
`
export const Buton = styled.button`
  height: 1.5rem;
  border: 1px solid #000;
  background: #000;
  color: #fff;
  border-radius: 0 .25rem .25rem 0;

  &:focus,
  &:active {
    outline:none;
    box-shadow: none;
`;