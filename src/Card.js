import React from "react";
import './card.css';
import Image from "./robot.jpg";
import Phone from "./phone-icon.png";
import Mail from "./mail-icon.png";


export default function Card(props) {

    console.log(props);

    return (
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={Phone} />
                <p>{props.mobile}</p>
            </div>
            <div className="info-group">
                <img src={Mail} />
                <p>{props.mail}</p>
            </div>
        </div>


    )
}