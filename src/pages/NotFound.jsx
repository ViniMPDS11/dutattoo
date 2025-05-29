import style from './notFound.module.css';
import Button from './../components/Button/Button';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className={style.container}>
            <h1 className={style.title}>Erro 404</h1>
            <p className={style.text}>Essa página não existe ou está fora do ar</p>
            <Link to='/'>
                <Button>Voltar ao início</Button>
            </Link>
        </div>
    );
}