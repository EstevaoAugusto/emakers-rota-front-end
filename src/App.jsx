import { Routes, Route } from 'react-router-dom' //Contêudos da biblioteca de rotas
import Cadastro from './views/TelaCadastro.jsx'
import Login from './views/TelaLogin.jsx'
import Conta from './views/TelaConta.jsx'
import Principal from './views/TelaPrincipal.jsx'

function App() {
  
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
        </Routes>
  )
}

export default App
