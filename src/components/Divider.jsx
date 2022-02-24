export default function Divider(props){
    const border = props.hide ? {border:"none"} :{borderTop:"1px solid rgba(0,0,0,0.5)"}
    return <hr style={{margin:"16px 0",...border}}/>
} 