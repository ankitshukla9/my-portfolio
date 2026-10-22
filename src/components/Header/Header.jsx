
import { useState } from "react";
import "./Header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="header">
            <a href="#home" className="logo" onClick={closeMenu}>
                Full<span>Stack</span>Ankit
            </a>

            <nav
                id="navbar"
                className={`navbar ${menuOpen ? "active" : ""}`}
            >
                <a href="#home" onClick={closeMenu}>Home</a>
                <a href="#about" onClick={closeMenu}>About</a>
                <a href="#skills" onClick={closeMenu}>Skills</a>
                <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
                <a href="#contact" onClick={closeMenu}>Contact</a>
            </nav>
        </header>
    );
}

export default Header;
