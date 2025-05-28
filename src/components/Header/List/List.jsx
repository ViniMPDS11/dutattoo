import style from './list.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function List() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <ul className={style.list}>
            <li><Link className={currentPath === '/' ? style.activeLink : style.link} to="/">Inicio</Link></li>
            <li><Link className={currentPath.startsWith('/orcamento') ? style.activeLink : style.link} to="/orcamento">Orçamento/Estimativa</Link></li>
            <li><Link className={currentPath.startsWith('/contato') ? style.activeLink : style.link} to="/contato">Contato</Link></li>
        </ul>
    );
}