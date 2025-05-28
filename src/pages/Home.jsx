import { Link } from "react-router-dom";
import style from "./home.module.css";
import profileImage from "../assets/images/dutattoo.jpg";

export default function Home() {
  return (
    <section className={style.card}>
        <img src={profileImage} alt="Eduardo Rocha" className={style.image} />
        <div className={style.info}>
            <h1>Dutatto Arte na Pele</h1>
            <h2>Eduardo Rocha</h2>
            <p>🏆 4x tatuador mais votado de Mauá</p>
            <p>Desde 2002 transformando pele em arte</p>
            <p>+ de 15 mil clientes atendidos</p>
            <p>+ de 20 mil tatuagens realizadas</p>
            <p>Especialista em realismo, fine line e coberturas</p>
            <p><strong>Jesus é o centro de tudo.</strong></p>
            <Link to="/orcamento" className={style.button}>
            Fazer orçamento
            </Link>
        </div>
    </section>
  );
}
