import { Routes, Route } from 'react-router-dom'
import Cadastro from './views/TelaCadastro.jsx'
import Login from './views/TelaLogin.jsx'
import Conta from './views/TelaConta.jsx'
import Principal from './views/TelaPrincipal.jsx'

function App() {

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
