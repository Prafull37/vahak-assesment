import Input from "./Input";
import "../css/components/currency.css";

export default function CurrencyInput(props){

    const {id,name,onInputChange,onInputBlur,value,style} = props;
    console.log(props.onInputChange);

    return (
        <Input
            label={<Rupee fontSize={"72px"} />}
            name={name}
            type="number"
            id={id}
            classes="border-bottom-input"
            labelClasses="currency-label"
            placeholder="0"
            onInputChange={onInputChange}
             onInputBlur={onInputBlur}
            value={value}
            style={style}
            required={false}
        />
    )
}

export function Rupee(props){
    return <span style={{fontSize:props.fontSize,fontWeight:"bold"}}>₹
    {!!props.label &&props.label}</span>
}
