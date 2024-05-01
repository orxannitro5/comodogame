import React, { useState } from "react";
import "./header.css";
import comodologo from "./assets/comodologo.webp";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
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
                    <div className="burger-icon" onClick={toggleMenu}>☰</div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="burger-menu-block">
                    <div className="burger-menu-block-contaniner">
                    <h4 className="burger-menu-block-nav">HOME</h4>
                    <h4 className="burger-menu-block-nav">ABOUT</h4>
                    <h4 className="burger-menu-block-nav">GALLERY</h4>
                    <h4 className="burger-menu-block-nav">PRICING</h4>
                    <h4 className="burger-menu-block-nav">BLOG</h4>
                    <h4 className="burger-menu-block-nav">CONTACT</h4>
                    </div>
                </div>
            )}
        </>
    );
}