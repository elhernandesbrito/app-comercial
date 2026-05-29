import {Link, useLocation} from 'react-router-dom'

import {
    FaChartLine,
    FaUsers,
    FaBoxOpen,
    FaShoppingCart,
    FaFileAlt,
} from 'react-icons/fa'

function Sidebar() {
    const location = useLocation()

    return (
        <aside className="sidebar">
            
            <h3>App Comercial</h3>
            <p className="menu-title">MENU PRINCIPAL</p>

            <ul className="menu">
                <li className={location.pathname === '/' ? 'active' : ''}>
                    <Link to="/">
                        <FaChartLine />
                        Dashboard
                    </Link>
                </li>

                <li className={location.pathname === '/clientes' ? 'active' : ''}>
                    <Link to="/clientes">
                        <FaUsers />
                        Clientes
                    </Link>
                </li>
                
                <li className={location.pathname === '/produtos' ? 'active' : ''}>
                    <Link to="/produtos">
                        <FaBoxOpen />
                        Produtos
                    </Link>
                </li>
                
                <li className={location.pathname === '/vendas' ? 'ative' : ''}>
                    <Link to="/vendas">
                        <FaShoppingCart />
                        Vendas
                    </Link>
                 
                </li>

                <li className={location.pathname === '/relatorios' ? 'ative' : ''}>
                    <Link to="/relatorios">
                        <FaFileAlt />
                        Relatorios
                    </Link>
                 
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar