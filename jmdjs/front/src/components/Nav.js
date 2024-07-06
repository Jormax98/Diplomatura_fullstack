import { NavLink } from "react-router-dom"
import '../styles/components/layout/Nav.css';

const Nav = (props) => {
    return (
        <div>
            <nav>
                <ul class="holder">
                    <li><NavLink to="/" className={({ isActive}) => isActive ? "activo" : undefined}>Inicio</NavLink></li>
                    <li><NavLink to="/servicios" className={({ isActive}) => isActive ? "activo" : undefined}>Servicio</NavLink></li>
                    <li><NavLink to="/empresa" className={({ isActive}) => isActive ? "activo" : undefined}>Empresa</NavLink></li>
                    <li><NavLink to="/trabajos" className={({ isActive}) => isActive ? "activo" : undefined}>Nuestros trabajos</NavLink></li>
                    <li><NavLink to="/contacto" className={({ isActive}) => isActive ? "activo" : undefined}>Contacto</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
export default Nav;