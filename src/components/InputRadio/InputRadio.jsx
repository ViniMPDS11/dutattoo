import style from './inputRadio.module.css';

export default function Input(props) {
    return(
        // <label>
        //     <input type="radio" name={props.name} value={props.value} /> {props.radioName}
        // </label>
        <label className="relative flex items-center cursor-pointer">
            <input
            onChange={props.change}
            required={props.required} 
            className="sr-only peer"
            name={props.name} 
            value={props.value} 
            type="radio" 
            />
            <div className="w-4 h-4 bg-transparent border-2 border-white rounded-full peer-checked:bg-white peer-checked:border-white transition duration-300 ease-in-out"></div>
            <span className={style.span} >{props.radioName}</span>
        </label>
    );
}