import {
  FaDollarSign,
  FaUsers,
  FaBoxOpen,
  FaExclamationTriangle,
} from 'react-icons/fa'

function Dashboard() {
  return (
    <>
      <p className="welcome">Bem-vindo ao sistema comercial.</p>

      <main className="dashboard">
        <h1>Painel Comercial</h1>
        <h2 className="subtitle">Resumo Geral do Sistema</h2>
        <p>Sistema de vendas externas iniciado.</p>

        <section className="cards">
          <div className="card">
            <h3><FaDollarSign /> Vendas Hoje</h3>
            <p>R$ 1.250</p>
          </div>

          <div className="card">
           <h3><FaUsers /> Clientes</h3>
            <p>18</p>
          </div>

          <div className="card">
            <h3><FaBoxOpen /> Estoque</h3>
            <p>320 Itens</p>
          </div>

          <div className="card">
          <h3><FaExclamationTriangle /> Pendências</h3>
            <p>R$ 540</p>
          </div>
        </section>

        <section className="actions">
          <button>Nova venda</button>
          <button>Clientes</button>
          <button>Produtos</button>
          <button>Relatórios</button>
        </section>

        <section className="recent">
          <h2>Atividade Recente</h2>

          <ul>
            <li>Venda registrada para Bar Central</li>
            <li>Pagamento PIX confirmado</li>
            <li>Novo cliente cadastrado</li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default Dashboard  