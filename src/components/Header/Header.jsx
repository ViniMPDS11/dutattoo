import style from './header.module.css'
import Logo from '../../assets/logo.png';
import List from './List/List';
import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function Header() {
    const [toggleButton, setToggleButton] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        if (toggleButton) {
            document.querySelector('html').classList.add('isActive');
        } else {
            document.querySelector('html').classList.remove('isActive');
        }

        let timeout;
        if (toggleButton) {
            setShouldRender(true);
        } else {
            timeout = setTimeout(() => setShouldRender(false), 400);
        }
        return () => clearTimeout(timeout);
    }, [toggleButton]);

    return (
        <header className={`${style.header} ${toggleButton ? style.isActive : ''}`}>
            <div>
                <button onClick={() => setToggleButton(!toggleButton)} className='flex md:hidden'>
                    {
                        toggleButton === false &&
                        <FiMenu style={{color: "white"}} size={40} />
                    }
                    {
                        toggleButton === true &&
                        <IoCloseOutline style={{color: "white"}} size={40} />
                    }
                </button>
                <Link onClick={() => setToggleButton(!toggleButton)} to="/">
                    <img title='Início' src={Logo} alt="Logotipo" />
                </Link>
                <List className={null} />
            </div>
            {
                shouldRender === true &&
                <List clickLi={() => setToggleButton(!toggleButton)} className={style.listColumn} />
            }
        </header>
    );
}