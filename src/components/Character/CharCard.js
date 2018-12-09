import React from "react";
import "./cardStyle.css";

const CharCard = props => (

    
        <div className="imageContainer">
        <img className="image rounded" alt={props.id} src={props.image} onClick={() => props.cardClick(props.id)}/>
        </div>
   

)

export default CharCard;
