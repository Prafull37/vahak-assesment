import "../css/components/banner.css";

export default function Banner(props){
    return (<div className="banner-wrapper">
        <span>{props.text}</span>
    </div>
    )
}