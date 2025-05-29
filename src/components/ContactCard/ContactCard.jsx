import style from './contactCard.module.css';

export default function ContactCard(props) {
    return(
        <div className={style.linkContact}>
            <a target="_blank" className={style.box} href={props.href}>
                {props.children}
            </a>
            <a target="_blank" href={props.href} className={style.titleContact}>{props.contactName}</a>
            <a target="_blank" href={props.href} className={style.contactName}>{props.contactContent}</a>
        </div>
    );
}