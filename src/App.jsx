import { Routes, Route } from 'react-router-dom'; //Contêudos da biblioteca de rotas
import Cadastro from './views/TelaCadastro.jsx';
import Login from './views/TelaLogin.jsx';
import Conta from './views/TelaConta.jsx';
import Populares from './views/TelaPopulares.jsx';
import Principal from './views/TelaPrincipal.jsx';
import RecuperarConta from './views/TelaRecuperarConta.jsx';
import { useEffect } from 'react';

function App() {
  document.title = "Front-End Emakers"

  /*  
      App.jsx controla as rotas do website
      O componente Routes contem um conjunto de Route(rotas)
      Cada Route leva a uma pagina diferente
      Você inicia na tela de Cadastro
  */
  return (
        <Routes>
          <Route path='/' element={<Cadastro/>}/>
          <Route path='/TelaLogin' element={<Login/>}/>
          <Route path='/TelaPrincipal' element={<Principal/>}/>
          <Route path='/TelaConta' element={<Conta/>}/>
          <Route path='/TelaPopulares' element={<Populares/>} />
          <Route path='/RecuperarConta' element={<RecuperarConta />}/>
        </Routes>
  )
}

export default App
