
import '../css/components/info.css';

export default function InfoComponent(props){
    return (
        <div className="info-container">
            <div className="headingContainer">
                <span className="info-heading">{props.heading}</span>
                <EditButton onClick={props.onClick}/>
            </div>
            <div className="details-container">
                <div className="left">
                    {props.leftChild}
                </div>
                <div className="right">
                {!!props.rightChild && props.rightChild}
                </div>
            </div>
        </div>
    )
}

export  function DetailsText(props){
    return ( <div className='details-text'>
        {props.children}
    </div>)
}

export const EditButton=(props)=>{
    return (
        <span className="edit-button" onClick={props.onClick}><i className="fa fa-pencil"></i> Edit</span>
    )
}


export const makeChildFromArray=(props)=>{
    let data=[{},{}];
 
     return (data.map((data)=><DetailsText>Something</DetailsText>))
 
 }