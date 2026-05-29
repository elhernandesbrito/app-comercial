
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Clientes from './pages/Clientes'
import Produtos from './pages/Produtos'
import Vendas from './pages/Vendas'
import Relatorios from './pages/Relatorios'
import './App.css'

function App() {
  return (
    <Routes>
       <Route path="/" element={<Layout><Dashboard /></Layout>} />

      <Route path="/clientes" 
        element=
        {<Layout>
          <Clientes />
        </Layout>
        } 
      />

      <Route
      path="/produtos"
      element={
        <Layout>
          <Produtos />
        </Layout>
        }
      />

      <Route
      path="/vendas"
      element= {
        <Layout>
          <Vendas />
        </Layout>
      }
      />

      <Route
        path="/relatorios"
        element={
          <Layout>
            <Relatorios />
          </Layout>
        }
      />

    </Routes>
  )
}

export default App