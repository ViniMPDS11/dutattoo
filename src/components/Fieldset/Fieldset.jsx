import style from "./fieldset.module.css";

export default function Fieldset(props) {
    return(
        <fieldset className={style.formGroup}>
            <legend className={props.classNameLegend}>{props.title}</legend>

            {props.children}
        </fieldset>
    );
}