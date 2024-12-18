import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Cadastro from './views/Cadastro.jsx'
import Login from './views/Login.jsx'

function App() {

  return (
        <Routes>
          <Route path='/' element={<Cadastro/>}/>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
  )
}

export default App
