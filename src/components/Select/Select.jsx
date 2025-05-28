import style from './select.module.css'
export default function Select(props) {

    return (
        <>
            <label htmlFor={props.name} className={props.classNameLabel}>{props.label}</label>
            <select required={props.required} value={props.value} onChange={props.change}>
                {props.children}
            </select>
        </>
    );
}