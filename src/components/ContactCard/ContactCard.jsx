import style from './contactCard.module.css';

export default function ContactCard(props) {
    return(
        <div class={style.linkContact}>
            <a target="_blank" class={style.box} href={props.href}>
                {props.children}
            </a>
            <a target="_blank" href={props.href} class={style.titleContact}>{props.contactName}</a>
            <a target="_blank" href={props.href} class={style.contactName}>{props.contactContent}</a>
        </div>
    );
}