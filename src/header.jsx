import React from "react";
import "./header.css";
import comodologo from "./assets/comodologo.webp"
export default function Header() {
    return (
        <div className="header-main">
            <div className="header-main-content">
                <img src={comodologo} alt="" />
                <div className="nav-menu">
                    <div className="nav-link">HOME</div>
                    <div className="nav-link">ABOUT</div>
                    <div className="nav-link">GALLERY</div>
                    <div className="nav-link">PRICING</div>
                    <div className="nav-link">BLOG</div>
                    <div className="nav-link">CONTACT</div>
                </div>
                <button className="header-button">JOIN US</button>
            </div>
        </div>
    )
}

