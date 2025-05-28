import style from './header.module.css'
import Logo from '../../assets/logo.png';
import List from './List/List';

export default function Header() {
    return (
        <header className={style.header}>
            <img src={Logo} alt="Logotipo" />
            <List />
        </header>
    );
}