import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import Usuario from './Usuario';
import Home from "./Home";
import Sobre from "./Sobre";

function App() {
  return (
    <>
    <header>
      <p><Link to="/home">Home</Link></p>
      <p><Link to='/usuario'>Usuário</Link></p>
      <p><Link to="/sobre/1">Sobre</Link></p>
    </header>
    <main>
      <Switch>
        <Route path="/home" component= {Home} />
        <Route path="/usuario" component= {Usuario} />
        <Route path="/sobre/:id?" component= {Sobre} />
      </Switch>
    </main>
    </>
  );
}

export default App;
