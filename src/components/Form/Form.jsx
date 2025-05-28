import styles from "./form.module.css";
import Fieldset from "../Fieldset/Fieldset";

export default function Form(props) {
  return (
    <form className={styles.formContainer}>
        {props.children}
    </form>
  );
}