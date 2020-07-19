import React from 'react';
import CardInfo from '../components/CardInfo';
function Card(props) {

    return(
        <div className="d-inline-block m-card" >
            <img className="m-card-image" src={props.item.imgSrc} alt={props.item.imgSrc}></img>
            <CardInfo title ={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/> 
        </div>
    );

}

export default Card;
