import React from "react";
import './hero.css';
import Grid from './airbnb-grid.png';



export default function Hero() {

    return (
        <section>

            <div id = "photo">
                <img src = {Grid} />
            </div>
            <div id = "hero">
                <h1 id = "h1--online">Online experiences</h1>
                <p id = "p--online">Join unique interactive activities led by one-of-a-kind hosts--all without leaving home</p>
            </div>

        </section>


    )
}