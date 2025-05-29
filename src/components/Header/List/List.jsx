import style from './list.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function List(props) {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <ul className={`${style.list} ${props.className || ''}`}>
            <li onClick={props.clickLi}><Link className={currentPath === '/' ? style.activeLink : style.link} to="/">Início</Link></li>
            <li onClick={props.clickLi}><Link className={currentPath.startsWith('/orcamento') ? style.activeLink : style.link} to="/orcamento">Orçamento</Link></li>
            <li onClick={props.clickLi}><Link className={currentPath.startsWith('/contato') ? style.activeLink : style.link} to="/contato">Contato</Link></li>
        </ul>
    );
}