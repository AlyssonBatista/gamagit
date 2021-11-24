import './App.css';

function App(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <input name="usuario" className="usuarioInput" id="usuario" placeholder="usuário"></input>
      <button type="button">Pesquisar</button>
    </>
  );
}

export default App;
