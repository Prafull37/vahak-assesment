import "../css/components/button.css";

export default function Button(props){
    const {onButtonClick,text,style={},classes,disabled=false}= props
    return (
        <button className={`button ${disabled?"button-active":"button-disabled"} ${classes||""}`}  disabled={disabled}
        onClick={onButtonClick}
        style={style}
        >
            {text}
        </button>
    )
}