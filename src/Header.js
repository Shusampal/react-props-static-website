import React from "react";
import Logo from './airbnb-logo.png';
import './header.css';

export default function Header() {

    return (
        <nav>
            <img src={Logo} />
        </nav>
    )
}