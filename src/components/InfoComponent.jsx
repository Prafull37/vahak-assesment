
import '../css/components/info.css';

export default function InfoComponent(props){
    return (
        <div className="info-container">
            <div className="headingContainer">
                <span className="info-heading">Journey</span>
                <EditButton/>
            </div>
            <div className="details-container">
                <div className="left">
                    <DetailsText>Something</DetailsText>
                    <DetailsText>Something</DetailsText>
                </div>
                <div className="right">
                <DetailsText>Something</DetailsText>
                <DetailsText>Something</DetailsText>
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
        <span className="edit-button"><i className="fa fa-pencil"></i> Edit</span>
    )
}