import style from './button.module.css'
export default function Button(props) {
    return (
        <>
            <button onClick={props.click} className={style.button} type={props.type || ''}>{props.children}</button>
        </>
    );
}