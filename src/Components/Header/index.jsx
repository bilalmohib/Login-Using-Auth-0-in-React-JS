import React from "react";
import "./style.scss";

const Header = () => {
    return (
        <>
            {/* As a heading */}
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand navbar-text mb-0">Configurator</span>
                </div>
            </nav>
        </>
    )
}
export default Header;