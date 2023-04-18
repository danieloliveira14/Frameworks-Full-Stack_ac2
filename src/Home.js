import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
  return (
    <div>
           <h1>Bem vindo a Home</h1>
           <Link to="/">retornar a página inicial</Link>
       </div>
  );
}

export default Home;