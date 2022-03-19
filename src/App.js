import React from "react";
import Header from './Header';
import Card from './Card';
import Hero from './Hero';
import Image from "./robot.jpg";


export default function App() {

    return (
        <div>
            <Header />
            <Hero />
            <div className="contacts">
                <Card
                    img={Image}
                    name="Mr. Robo 1"
                    mobile="(212) 555-1234"
                    mail="robot1@robotics.devo"
                />
                <Card
                    img={Image}
                    name="Mr. Robo 2"
                    mobile="(212) 444-1234"
                    mail="robot2@robotics.devo"
                />
                <Card
                    img={Image}
                    name="Mr. Robo 3"
                    mobile="(212) 333-1234"
                    mail="robot3@robotics.devo"
                />
                <Card
                    img={Image}
                    name="Mr. Robo 4"
                    mobile="(212) 111-1234"
                    mail="robot4@robotics.devo"
                />

            </div>
        </div>
    )
}