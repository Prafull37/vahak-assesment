import "../css/components/button.css";

export default function Button(props){
    const {onButtonClick,text,style={},classes,disabled=false}= props
    return (
        <button className={`button ${disabled?"button-disabled" :"button-active"} ${classes||""}`}  disabled={disabled}
        onClick={onButtonClick}
        style={style}
        >
            {text}
        </button>
    )
}