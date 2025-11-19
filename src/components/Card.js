import React from "react";
import './Card.css';

export default function Card({ name, img, abbr }){
    return( 
    <>
        <div className="countryCard">
            <img src={img}
            alt={abbr}
            width={"100px"}
            height={"100px"} />
            <span><h3>{name}</h3></span>
        </div>
    </>)
}